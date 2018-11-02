-安装依赖
-配置开发调试
```
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import { AppStore } from '@/store';

let store = createStore(AppStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

```

- 使用 connect 链接 组件与 状态中心, connect接收两个参数（其实有4个数据）
> 1-映射数据 可以理解为 state 
> 2-映射方法 

```
import { connect } from "react-redux";

```

### ! create-react-app 中使用装饰器
安装 
```
npm install --save-dev @babel/plugin-proposal-decorators
配置（ npm run /暴露配置之后）
```
  "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "import",
        {
          "libraryName": "antd",
          "style": "css"
        }
      ]
    ]
  },
```


```
代理接口   // "proxy": "http://39.108.68.85:3001/",
