const isMain = str => (/^#{1,2}(?!#)/).test(str)
const isSub = str => (/^#{3}(?!#)/).test(str)
const convert = raw => {
  let arr = raw.split(/\n(?=\n*#{1,3}[^#])/).filter(s => s!="").map(s => s.trim())
  let html = ''
  for(let i=0; i<arr.length; i++) {

    if(arr[i+1] !== undefined) {
      if(isMain(arr[i]) && isMain(arr[i+1])) {
        html += `
<section data-markdown>
<script type="text/template">
${arr[i]}
</script>
</section>
        `
      } else if(isMain(arr[i]) && isSub(arr[i+1])) {
        html += `
<section>
<section data-markdown>
<script type="text/template">
${arr[i]}
</script>
</section>
        `
      } else if(isSub(arr[i]) && isSub(arr[i+1])) {
        html += `
<section data-markdown>
<script type="text/template">
${arr[i]}
</script>
</section>
        `
      } else if(isSub(arr[i]) && isMain(arr[i+1])) {
        html += `
<section data-markdown>
<script type="text/template">
 ${arr[i]}
</script>
</section>
</section>
        `
      }      

    } else {
      if(isMain(arr[i])) {
        html += `
 <section data-markdown>
<script type="text/template">
${arr[i]}
</script>
</section>
      `        
      } else if(isSub(arr[i])) {
        html += `
<section data-markdown>
<script type="text/template">
${arr[i]}
</script>
</section>
</section>
      `        
      }
    }

  }

  return html
}

export default convert
