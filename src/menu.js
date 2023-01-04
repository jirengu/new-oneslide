import Event from './event'

const Menu = {
  init() {
    this.$settingIcon = document.querySelector('.control .icon-setting')
    this.$menu = document.querySelector('.menu')
    this.$closeIcon = document.querySelector('.menu .icon-close')
    this.$$tabs = document.querySelectorAll('.menu .tab')
    this.$$contents = document.querySelectorAll('.menu .content')

    this.bind()

  },

  bind() {
    Event.on('menuclose', () => {
      this.close()
    })

    Event.on('menuopen', () => {
      this.open()
    })

    this.$settingIcon.onclick = () => {
      this.open()
    }

    this.$closeIcon.onclick = () => {
      this.close()
    }

    this.$$tabs.forEach($tab => $tab.onclick = () => {
      this.$$tabs.forEach($node => $node.classList.remove('active'))
      $tab.classList.add('active')
      let index = [...this.$$tabs].indexOf($tab)
      this.$$contents.forEach($node => $node.classList.remove('active'))
      this.$$contents[index].classList.add('active')
    })
  },

  open() {
    this.$menu.classList.add('open')
  },

  close() {
    this.$menu.classList.remove('open')
  }
}

export default Menu