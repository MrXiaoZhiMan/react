import React,{Component} from "react"
export default class Diffings extends Component{
    state = {date:new Date()}
    componentDidMount(){
        
        setInterval(()=>{
            this.setState({date:new Date()})
        },1000)
    }
  render(){
    return(
        <div>
            <h1>hello</h1>
            <input type="text" />
            <span>现在是：{this.state.date.toTimeString()}
            <input type="text" />
            </span>
        </div>
    )
  }
}
// react中真实dom会对应一个虚拟dom每次更新渲染的时候 都会进行新旧dom对比
// 如果有几条数据是一样的那么这几条数据就不会有任何改变 只会把新增加的
// 映射成真实dom渲染在页面上 对比的最小力度是标签  他会监控很多层 上面的例子
// span因为计时器的原因重新放置了 所以里面的 文字被重新放置了 但是里面的input又是
// 一个标签所以没有重新放置