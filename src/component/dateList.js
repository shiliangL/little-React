import React , { Component } from 'react'

const RenderList = (props) => {
  const items = []
  props.data.forEach((item,index) => {
  items.push(<li key={index}> {item.name} <button onClick={()=>{props.delItem(index)}}> 删除 </button> </li>)
  })
  return <ul>{items}</ul>
}

export default RenderList
