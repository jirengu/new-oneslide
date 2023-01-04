let text = `
# CSS
选择器优先级、样式继承、文本样式、单位

![](https://imgs.xiedaimala.com/LIjzPBygsVKz98q2eojsADUuyrxX1fUz/%25E9%25A5%25A5%25E4%25BA%25BA%25E8%25B0%25B7%2520logo.png)   <!-- .element: style="height:100px; " --> 


*若愚@饥人谷*


## 为什么关注优先级 

\`\`\`html [7-9|10-12|12-15]
<div id="app">
  <div class="header">
    <p class="user">饥人谷</p>
  </div>
</div> 
<style>
  p {
    color: yellow
  }
  #app p {
    color: red;
  }
  .header .user {
    color: blue;
  }
</style>
\`\`\`

不同方式修改同一元素同属性，谁说了算？ <!-- .element:  class="fragment" --> 

## 继承的样式


### 一个继承的案例
<!-- .slide: data-auto-animate -->
*a链接的<yellow>颜色</yellow>是什么？为什么*

\`\`\`html
<style>
  .box  {
    color: red!important;
  }
 </style>
<div class="box">
  <a href="#">饥人谷</a>
</div>
\`\`\` 

### 一个继承的案例
<!-- .slide: data-auto-animate  data-background="lightgreen"-->
*a链接的<yellow>颜色</yellow>是什么？为什么*

\`\`\`html[]
<style>
  .box  {
    color: red!important;
  }
 </style>
<div class="box">
  <a href="#">饥人谷</a>
</div>
\`\`\`
![](https://imgs.xiedaimala.com/s54CKVIhDkPDdjCVVEkaw9KAFzrzhBV6/WX20230104-163156%402x.png)   <!-- .element: style="height:200px" --> 
 

## 优先级计算
- 千位： 如果声明在style的属性（内联样式）则该位得一分 <!-- .element: class="fragment"  -->
- 百位： 选择器中包含ID选择器则该位得一分 <!-- .element: class="fragment" -->
- 十位： 选择器中包含类选择器、属性选择器 或者伪类 则该位得一分 <!-- .element: class="fragment" -->
- 个位：选择器中包含标签选择器、伪元素选择器则该位得一分  <!-- .element: class="fragment" style="color:yellow"--> 

### 
<!-- .slide: data-auto-animate -->
| 选择器   | 百位 |十位|个位 | 权重  |
| ---     | --- | --- | --- | ---  |
| <yellow>h1<yellow>      | 0   | 0   |  0  | 001  |
| #box p  |  1  | 0   |  1  | 101  | 
|#logo a:hover| 1 | 1 |  1  | 111  |

### 
<!-- .slide: data-auto-animate -->
| 选择器   | 百位 |十位|个位 | 权重  |
| ---     | --- | --- | --- | ---  |
| h1      | 0   | 0   |  0  | 001  |
| <yellow>#box p<yellow>  |  1  | 0   |  1  | 101  | 
|#logo a:hover| 1 | 1 |  1  | 111  |

### 
<!-- .slide: data-auto-animate -->
| 选择器   | 百位 |十位|个位 | 权重  |
| ---     | --- | --- | --- | ---  |
| h1      | 0   | 0   |  0  | 001  |
| #box p  |  1  | 0   |  1  | 101  | 
|<yellow>#logo a:hover<yellow>| 1 | 1 |  1  | 111  |




## 另一个例子
<!-- .slide: data-auto-animate -->
*p的<yellow>颜色</yellow>是什么？为什么*

\`\`\`html[]
<style>
  .box {
    color: red!important;
  }
  
  .box p {
    color: blue;
  }
</style>
<div class="box">
  <p  style="color: yellow;">饥人谷</p>
</div>
\`\`\`
 


## 另一个例子
<!-- .slide: data-auto-animate class="column-2"-->

*p的<yellow>颜色</yellow>是什么？为什么*

\`\`\`html[3-7]
<style>
  .box {
    color: red!important;
  }
  
  .box p {
    color: blue;
  }
</style>
<div class="box">
  <p  style="color: yellow;">饥人谷</p>
</div>
\`\`\`

![](https://imgs.xiedaimala.com/QX2cB2w92WCtYJQrhKsvItshnz5YvlEJ/WX20230104-170804%402x.png)<!-- .element: style="height:200px;margin-top:20%;" -->

`  

export default text
