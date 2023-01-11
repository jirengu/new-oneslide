const $ =  s => document.querySelector(s)

$('.editor .button-step').onclick = () => {
  insertText('<!-- .element: class="fragment" -->')
}

$('.editor .button-animation').onclick = () => {
  insertText('<!-- .slide: data-auto-animate -->')
}

$('.editor .button-style').onclick = () => {
  insertText('<!-- .element: class="fragment" style="" -->')
}

$('.editor .button-code').onclick = () => {
  insertText(`
\`\`\`[1-3|4-5]  

\`\`\`  
  `)
}

$('.editor .button-color').onchange = function() {
  let color = this.value
  if(color === 'none') return
  insertText(`<${color}> </${color}>`)
  this.value = 'none'
}

$('.editor .button-animate').onchange = function() {
  let animate = this.value
  if(animate === 'none') return
  insertText(`<!-- .element: class="fragment animate__animated ${animate}" -->`)
  this.value = 'none'
}


function insertText(text = '') {
  let $textarea = $('.editor textarea')
  let start = $textarea.selectionStart
  let end = $textarea.selectionEnd
  let oldText = $textarea.value

  $textarea.value = `${oldText.substring(0, start)}${text} ${oldText.substring(end)}`
  $textarea.setSelectionRange(start, start)
  $textarea.focus()
  $textarea.setSelectionRange(start, start + text.length)
}