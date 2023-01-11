import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import 'reveal.js/plugin/highlight/monokai.css'
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js'
import Notes from 'reveal.js/plugin/notes/notes.esm.js'
import Math from 'reveal.js/plugin/math/math.esm.js'
import convert from './convert'
import ComplexText from './example-complex.js'
import SimpleText from './example-simple.js'
import { debounce } from 'lodash'

const parseQuery = search => {
  let obj = {}
  search.replace(/^\?/,'').split('&').forEach(s => {
    let arr = s.split('=')
    obj[arr[0]] = decodeURIComponent(arr[1])
  })
  return obj
}


const Editor = {
  init() {
  
    this.$editInput = document.querySelector('.editor textarea')
    this.$saveBtn = document.querySelector('.editor .button-save')
    this.$resetSimpleBtn = document.querySelector('.editor .button-reset-simple')
    this.$resetComplexBtn = document.querySelector('.editor .button-reset-complex')
    this.$slideContainer = document.querySelector('.slides')
    this.$fetchBtn = document.querySelector('.button-fetch')
    this.$previewBtn = document.querySelector('.button-preview')
    this.$input = document.querySelector('.input-url')
    this.$status = document.querySelector('.status')
    this.$loadingText = document.querySelector('.loading p')
    this.markdown = localStorage.markdown || ComplexText


    this.bind()
    this.start()
  },

  bind() {
    this.$saveBtn.onclick = () => {
      localStorage.markdown  = this.$editInput.value
      console.log('reload')
      console.log(location.origin + location.pathname + location.hash )
      location.href = location.origin + location.pathname + location.hash 
      location.reload()
    } 
    this.$resetSimpleBtn.onclick = () => {
      this.$editInput.value = SimpleText
    }
    this.$resetComplexBtn.onclick = () => {
      this.$editInput.value = ComplexText
    }
    this.$fetchBtn.onclick = async () => {
      localStorage.url = this.$input.value
      this.$status.innerText = '同步中...'
      let res = await (await fetch('https://api.jirengu.com/api/github/raw?url='+this.$input.value)).json()
      if(res.errCode !== 0) {
        this.$status.innerText = '同步失败，可多试几次'
      } else {
        this.$editInput.value = res.data
        this.$status.innerText = '同步完成，在上方编辑器点保存可预览效果'
      }
    }
    this.$previewBtn.onclick = async () => {
      location.href = location.origin + location.pathname + '?url=' + encodeURIComponent(this.$input.value)
    }
    this.$editInput.oninput = debounce(() => {
      localStorage.markdown = this.$editInput.value 
    }, 1000)
    
  },

  async start() {
    let queryObj = parseQuery(location.search)
    if(queryObj.url) {
      let res = await (await fetch('https://api.jirengu.com/api/github/raw?url=' + queryObj.url)).json()
      if(res.errCode !== 0) {
        this.$loadingText.innerText = '下载Markdown文件失败，可刷新重试'
        return
      } else {
        localStorage.markdown  = this.markdown = this.$editInput.value = res.data
        localStorage.url = queryObj.url
      }        
    } else {
      this.$editInput.value = this.markdown
      this.$input.value = localStorage.url || ''
    }

    this.$slideContainer.innerHTML = convert(this.markdown)
    Reveal.initialize({
          controls: true,
          progress: true,
          center: localStorage.center === 'left-top' ? false : true,
          hash: true,
          transition: localStorage.transition || 'slide', // none/fade/slide/convex/concave/zoom
          // More info https://github.com/hakimel/reveal.js#dependencies
          plugins: [ Markdown, Highlight, Notes, Math.KaTeX ]
        })
  }
}

export default Editor