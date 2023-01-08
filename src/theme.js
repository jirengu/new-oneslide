import Event from './event'

const Theme = {
  init() {
    this.$$figures = document.querySelectorAll('.theme figure')
    this.$transition = document.querySelector('.theme .transition')
    this.$align = document.querySelector('.theme .align')
    this.$reveal = document.querySelector('.reveal')

    this.bind()
    this.loadTheme()
  },

  bind() {
    this.$$figures.forEach($figure => $figure.onclick = () => {
      this.$$figures.forEach($item => $item.classList.remove('select'))
      $figure.classList.add('select')
      localStorage.theme = $figure.dataset.theme
      this.loadTheme()
      Event.fire('menuclose')
    })

    this.$transition.onchange = function() {
      localStorage.transition = this.value
      location.href = location.origin + location.pathname + location.hash 
    }

    this.$align.onchange = function() {
      localStorage.align = this.value
      location.href = location.origin + location.pathname + location.hash 
    }
  },


  loadTheme() {
    let theme = localStorage.theme || 'beige'
    let $theme = document.querySelector('#link-theme')
    if($theme) {
      document.head.removeChild($theme)
    }

    let $link = document.createElement('link')
    $link.id = 'link-theme'
    $link.rel = 'stylesheet'
    $link.href = `./theme/${theme}.css`
    document.head.appendChild($link)

    //$(`.theme figure[data-theme=${theme}]`)
    Array.from(this.$$figures).find($figure => $figure.dataset.theme === theme).classList.add('select')
    this.$transition.value = localStorage.transition || 'slide'
    this.$align.value = localStorage.align || 'center'
    this.$reveal.classList.add(this.$align.value)
  }
}

export default Theme