### React  学习

1 父组件与 自组件之间 数据的交互关系
2 事件与事件监听-  React.js 不需要手动调用浏览器原生的 addEventListener 进行事件监听。 而是加 on* 的属性 时间属性必须使用驼峰命名
注意没有经过特殊处理的 haul on*  的事件监听是不能用于组件上 （如果需要使用到 React 对象属性 则一般在监听事件后 + .bind(this) 把 React 传到到函数中使用，这个时候需要注意的是 this ）
你也可以在 bind 的时候给事件监听函数传入一些参数

```
例如
class Temp extends Component {
  handleClick (word, e) {
    console.log(this, word)
  }

  render () {
    return (
      <h1 onClick={this.handleClick.bind(this, 'Hello')}>React xxxxx</h1>
    )
  }
}
```


事件对象 event
事件监听函数会被自动传入一个 event 对象，这个对象和普通的浏览器 event 对象所包含的方法和属性都基本一致。不同的是 React.js 中的 event 对象并不是浏览器提供的，而是 React.js 将浏览器原生的 event 对象封装了一下，对外提供统一的 API 和属性，它具有类似于event.stopPropagation、event.preventDefault


3 组件的 state 和 setState,  属性 与 属性设置  setState 方法，它接受一个对象或者函数作为参数。

```
import React, { Component } from 'react'

class SomeTemp extends Component {
  constructor (props) {
    super(props)  // 超类
    this.state = { isLove: false }   // 初始化状态
  }

  handleClick () {
    this.setState({
      isLiked: !this.state.isLove
    })  // 改变状态 触发视图渲染
  }

  render () {
    return (
      <button onClick={this.handleClick.bind(this)}>
        {this.state.isLove ? '不爱' : '爱'}
      </button>
    )
  }
}

这里还有要注意的是，当你调用 setState 的时候，React.js 并不会马上修改 state。
而是把这个对象放到一个更新队列里面，稍后才会从队列当中把新的状态提取出来合并到 state 当中，
然后再触发组件更新。

handleClick () {
   console.log(this.state.isLiked)
   this.setState({
     isLiked: !this.state.isLiked
   })
   console.log(this.state.isLiked)
 }
```

发现两次打印的都是 false，即使我们中间已经 setState 过一次了。这并不是什么 bug，
只是 React.js 的 setState 把你的传进来的状态缓存起来，稍后才会帮你更新到 state 上，所以你获取到的还是原来的 isLiked
所以如果你想在 setState 之后使用新的 state 来做后续运算就做不到的  所以就有了 下面的函数改变 state 的方法

接受一个函数作为参数。React.js 会把 ||上一个 setState 的结果||传入这个函数，你就可以使用该结果进行运算、操作，然后返回一个对象作为更新 state 的对象：
```
handleClick () {
    this.setState((prevState) => {
      return { count: 0 }
    })
    this.setState((prevState) => {
      return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
    })
    this.setState((prevState) => {
      return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
    })
    // 最后的结果是 this.state.count 为 3
  }

```
进行了三次 setState，但是实际上组件只会重新渲染一次，
因为在 React.js 内部会把 JavaScript 事件循环中的消息队列的
同一个消息中的 setState 都进行合并以后再重新渲染组件,无需担心
多层 setState 会带来性能问题。


4 配置和 配置 组件的 props （state 多情 props 专一）
 不能改变一个组件被渲染的时候传进来的 props

默认
static defaultProps = {
  likedText: '取消',
  unlikedText: '点赞'
}


1为了使得组件的可定制性更强，在使用组件的时候，可以在标签上加属性来传入配置参数。
2组件可以在内部通过 this.props 获取到配置参数，组件可以根据 props 的不同来确定自己的显示形态，达到可配置的效果。
3可以通过给组件添加类属性 defaultProps 来配置默认参数。
4props 一旦传入，你就不可以在组件内部对它进行修改。但是你可以通过父组件主动重新渲染的方式来传入新的 props，从而达到更新的效果。
