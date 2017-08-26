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


3 组件的 state 和 setState,  属性 与 属性 设置
