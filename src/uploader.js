import AV from 'leancloud-storage/dist/av'
const Uploader = {
  init() {
    this.$fileInput = document.querySelector('#img-uploader')
    this.$textarea = document.querySelector('.editor textarea')

    AV.init({
      appId: "UqBaAsQMqOQB3rLwNGLTKtOF-gzGzoHsz",
      appKey: "uv9EyQmkgX7UjUt4TeVUBhVa",
      serverURLs: "https://uqbaasqm.lc-cn-n1-shared.com"
    })

    this.bind()
  },

  bind() {
    let self = this
    this.$fileInput.onchange = function() {
      if (this.files.length > 0) {
        let localFile = this.files[0]
        if(localFile.size/1048576 > 2) {
          alert('文件不能超过2M')
          return
        }
        self.insertText(`![上传中，进度0%]()`)
        let  avFile = new AV.File(encodeURI(localFile.name), localFile)
        avFile.save({ 
          keepFileName: true, 
          onprogress(progress) {
            self.insertText(`![上传中，进度${progress.percent}%]()`)
          }
        }).then(file => {
          let text = `![](${file.attributes.url})<!-- .element: style="height:200px" -->`
          self.insertText(text)
        }).catch(err => console.log(err))
       }     
    }
  },

  insertText(text = '') {
    let $textarea = this.$textarea
    let start = $textarea.selectionStart
    let end = $textarea.selectionEnd
    let oldText = $textarea.value

    $textarea.value = `${oldText.substring(0, start)}${text} ${oldText.substring(end)}`
    $textarea.focus()
    $textarea.setSelectionRange(start, start + text.length) 
  }
}

export default Uploader