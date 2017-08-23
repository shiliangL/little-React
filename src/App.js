import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.scss';
import './static/bootstrap.css'
import 'element-theme-default';

import HaeaderBar from './component/headerBar'
import TablContent from './page/foundation/pay'

// 图片数据信息
import imgDatas from './data/imgsDc.json'

//设置图片路径
function getUrl(arrt) {
  arrt.forEach((item)=>{
    item.SingPicUrl = require('./static/imgs/'+ item.fileName)
  })
  return arrt
}
let ArrayImg = getUrl(imgDatas)

//范围取值函数 区间内随机值
function getRangeRandom(low,hight){
  return Math.ceil(Math.random() * (hight - low) + low)
}
function get30DegRandom() {
  let deg = '';
  deg = (Math.random() > 0.5) ? '+' : '-';
  return deg + Math.ceil(Math.random() * 30);
}

//定义展示单个图片信息组件
class SingPicShow extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    let styleObject = {}
    if (this.props.arrange.pos) {
          styleObject = this.props.arrange.pos;
    }
    return <figure className="img-figure">
      <img src={this.props.data.SingPicUrl}  style={ styleObject }  alt={this.props.data.title}/>
      <figcaption>
        <h2>{this.props.data.title}</h2>
      </figcaption>
    </figure>
  }
}

//主要 App 组件
class App extends Component {
  constructor(props){
    super(props)
    this.Constant = {
          centerPos: { //中心位置
            left: 0,
            right: 0
          },
          hPosRange: {   // 水平方向的取值范围
            leftSecX: [0, 0],
            rightSecX: [0, 0],
            y: [0, 0]
          },
          vPosRange: {    // 垂直方向的取值范围
            x: [0, 0],
            topY: [0, 0]
          }
    }
    this.state = {
      imgsArrangeArr:[] //存储多个图片状态信息
    }
  }
  rearrange(centerIndex) {
    let imgsArrangeArr = this.state.imgsArrangeArr,
      Constant = this.Constant,
      centerPos = Constant.centerPos,
      hPosRange = Constant.hPosRange,
      vPosRange = Constant.vPosRange,
      hPosRangeLeftSecX = hPosRange.leftSecX,
      hPosRangeRightSecX = hPosRange.rightSecX,
      hPosRangeY = hPosRange.y,
      vPosRangeTopY = vPosRange.topY,
      vPosRangeX = vPosRange.x,
      imgsArrangTopArr = [],
      topImgNum = Math.floor(Math.random() * 2), //取一个或者不取
      topImgSpiceIndex = 0,
      imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);
    //首先居中centerIndex图片 ,centerIndex图片不需要旋转
    imgsArrangeCenterArr[0] = {
        pos: centerPos,
        rotate: 0,
        isCenter: true
      }
      //取出要布局上测的图片的状态信息
    topImgSpiceIndex = Math.floor(Math.random() * (imgsArrangeArr.length - topImgNum));
    imgsArrangTopArr = imgsArrangeArr.splice(topImgSpiceIndex, topImgNum);
    //布局位于上侧的图片
    imgsArrangTopArr.forEach((value, index) => {
      imgsArrangTopArr[index] = {
        pos: {
          top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
          left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
        },
        rotate: get30DegRandom(),
        isCenter: false

      };
    });

    //布局左两侧的图片
    for (let i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++) {
      let hPosRangeLORX = null;

      //前半部分布局左边,右边部分布局右边
      if (i < k) {
        hPosRangeLORX = hPosRangeLeftSecX;
      } else {
        hPosRangeLORX = hPosRangeRightSecX
      }
      imgsArrangeArr[i] = {
        pos: {
          top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
          left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
        },
        rotate: get30DegRandom(),
        isCenter: false
      };
    }
    if (imgsArrangTopArr && imgsArrangTopArr[0]) {
      imgsArrangeArr.splice(topImgSpiceIndex, 0, imgsArrangTopArr[0]);
    }
    imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);
    this.setState({
      imgsArrangeArr: imgsArrangeArr
    });
  }

  /*利用rearramhe函数
   *居中对应index的图片
   *
   */
  center(index) {
    return () => {
      this.rearrange(index);
    }
  }

  //组件渲染完成 计算位置
  componentDidMount(){
    console.log('组件 app 加载完成')
    //操作 DOM 的能力需要 引入 ReactDOM 模块 -获取 可视区域 高度 宽度
    // scrollWidth （及时出现滚动条也是内容实际宽度） clientWidth（可视内容区域宽度）
    let stageDOM = ReactDOM.findDOMNode(this.refs['stage'])
    let stageW = stageDOM.scrollWidth
    let stageH = stageDOM.scrollHeight
    //获取中心位置
    let half_StageW = Math.ceil(stageW/2)
    let half_StageH = Math.ceil(stageH/2)

    //获取一个图片展示块的 大小
    let singPicShowDOM = ReactDOM.findDOMNode(this.refs['singPicShow0'])
    let singPicW = singPicShowDOM.scrollWidth
    let singPicH = singPicShowDOM.scrollHeight
    let half_singPicW = Math.ceil(singPicW/2)
    let half_singPicH = Math.ceil(singPicH/2)

    // 中心位置
    this.Constant.centerPos = {
          left: stageW - half_singPicW,
          right: stageH - half_singPicH
    }
    // 计算左、右区域图片排布范围
    this.Constant.hPosRange.leftSecX[0] =  - half_singPicW
    this.Constant.hPosRange.leftSecX[1] =  half_StageW - half_singPicW * 3
    this.Constant.hPosRange.rightSecX[0] =  half_StageW + half_singPicW
    this.Constant.hPosRange.rightSecX[1] =  stageW - half_singPicW
    this.Constant.hPosRange.y[0] =  - half_singPicH
    this.Constant.hPosRange.y[1] =  stageH - half_singPicH

    // 垂直方向的取值范围
    this.Constant.vPosRange.x[0] = stageW - singPicW
    this.Constant.vPosRange.x[1] = stageW
    this.Constant.vPosRange.topY[0] =  -half_singPicH
    this.Constant.vPosRange.topY[1] = half_StageH - half_singPicH * 3

    this.rearrange(0)
  }

  render() {
    let imgArray = []
    ArrayImg.forEach((item,index)=>{
      if (!this.state.imgsArrangeArr[index]) {
        this.state.imgsArrangeArr[index] = {
          pos:{
            left: 0,
            top: 0
          }
        }
        console.log(this.state.imgsArrangeArr);
      }
      imgArray.push(<SingPicShow data={item}  key={index} ref={`singPicShow${index}`} arrange={this.state.imgsArrangeArr[index]} />)
    })

    return (
      <section className="stage" ref="stage">
        <section className="img-sec">
          {imgArray}
        </section>
        <nav className="controller-nav"></nav>
      </section>
    )
  }
}
export default App;
