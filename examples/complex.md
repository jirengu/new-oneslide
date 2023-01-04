
# CSS
选择器优先级、样式继承

![](https://imgs.xiedaimala.com/LIjzPBygsVKz98q2eojsADUuyrxX1fUz/%25E9%25A5%25A5%25E4%25BA%25BA%25E8%25B0%25B7%2520logo.png)   <!-- .element: style="height:100px; " --> 


*若愚@饥人谷*


## 为什么关注优先级 

```html [7-9|11-13|15-18]
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
```

不同方式修改同一元素同属性，谁说了算？ <!-- .element:  class="fragment" --> 

## 优先级从高到低
<!-- .slide: data-auto-animate -->


## 优先级从高到低
<!-- .slide: data-auto-animate -->
- !important


## 优先级从高到低
<!-- .slide: data-auto-animate -->
- !important
- 行内样式

## 优先级从高到低
<!-- .slide: data-auto-animate -->
- !important
- 行内样式
- 选择器选中(优先级算法)


## 优先级从高到低
<!-- .slide: data-auto-animate -->
- !important
- 行内样式
- 选择器选中(优先级算法)
- 继承样式

## 继承的样式


### 
<!-- .slide: data-auto-animate -->
a链接的<yellow>颜色</yellow>是什么？为什么

```html[]
<style>
  .box  {
    color: red!important;
  }
 </style>
<div class="box">
  <a href="#">饥人谷</a>
</div>
``` 

### 
<!-- .slide: data-auto-animate  data-background="lightgreen"-->
a链接的<yellow>颜色</yellow>是什么？为什么

```html[]
<style>
  .box  {
    color: red!important;
  }
 </style>
<div class="box">
  <a href="#">饥人谷</a>
</div>
```
![](https://imgs.xiedaimala.com/s54CKVIhDkPDdjCVVEkaw9KAFzrzhBV6/WX20230104-163156%402x.png)   <!-- .element: style="height:200px" --> 
 

## 优先级计算
- 千位： 如果声明在style的属性（内联样式）则该位得一分 <!-- .element: class="fragment"  -->
- 百位： 选择器中包含ID选择器则该位得一分 <!-- .element: class="fragment" -->
- 十位： 选择器中包含类选择器、属性选择器 或者伪类 则该位得一分 <!-- .element: class="fragment" -->
- 个位：选择器中包含标签选择器、伪元素选择器则该位得一分  <!-- .element: class="fragment" style="color:yellow"--> 

### 
| 选择器   | 百位 |十位|个位 | 权重  |
| ---     | --- | --- | --- | ---  |
| h1      | ?   | ?   |  ?  | 001 <!-- .element:  class="fragment" -->  |
| #box p  | ?  | ?   |  ? | 101 <!-- .element:  class="fragment" -->  | 
|#logo a:hover| ? | ? |  ?  | 111 <!-- .element:  class="fragment" -->  |







## 另一个例子
<!-- .slide: data-auto-animate -->
*p的<yellow>颜色</yellow>是什么？为什么*

```html[]
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
```
 


## 另一个例子
<!-- .slide: data-auto-animate class="column-2"-->

*p的<yellow>颜色</yellow>是什么？为什么*

```html[]
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
```

![](https://imgs.xiedaimala.com/QX2cB2w92WCtYJQrhKsvItshnz5YvlEJ/WX20230104-170804%402x.png)<!-- .element: style="height:200px;margin-top:20%;" -->

# 更多
- 项目作者：若愚@饥人谷 [知乎](https://www.zhihu.com/people/jirengu-ruo-yu)
- 本项目基于 [revealjs](https://revealjs.com/) 开发
- 本项目[源码地址](https://github.com/jirengu/new-oneslide)



