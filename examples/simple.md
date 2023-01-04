# CSS
选择器优先级、样式继承、文本样式、单位



![](https://imgs.xiedaimala.com/LIjzPBygsVKz98q2eojsADUuyrxX1fUz/%25E9%25A5%25A5%25E4%25BA%25BA%25E8%25B0%25B7%2520logo.png)   <!-- .element: style="height:100px; " --> 
  
*若愚@饥人谷*


## 为什么关注优先级

```html [7-9|10-12|12-15]
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
不同的选择器组合修改同一个元素的同一个属性，谁说了算

## 继承的样式
*以下文字的颜色是什么？为什么*

```html[3|11]
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

### 一个继承的案例
*a链接的颜色是什么？为什么？*

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
- 千位： 如果声明在 <yellow>style</yellow> 的属性（内联样式）则该位得一分
- 百位： 选择器中包含<green>ID</green>选择器则该位得一分
- 十位： 选择器中包含<red>类选择器</red>、<strong>属性选择器</strong> 或者<strong>伪类</strong> 则该位得一分
- 个位：选择器中包含<grey>标签选择器</grey> 、<strong>伪元素</strong> 选择器则该位得一分

### 
| 选择器   | 百位 |十位|个位 | 权重  |
| ---     | --- | --- | --- | ---  |
| h1      | 0   | 0   |  0  | 001  |
| #box p  |  1  | 0   |  1  | 101  | 
|#logo a:hover| 1 | 1 |  1  | 111  |


## 参考
本项目基于 [revealjs](https://revealjs.com/) 开发