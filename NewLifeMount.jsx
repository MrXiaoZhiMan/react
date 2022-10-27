import React,{Component} from "react"
export default class NewLifeMount extends Component{
    state = {count:0}
    constructor(){
        super()
        console.log("new---constructor");
    }
    // 获得派生的状态从props
   static getDerivedStateFromProps(props,state){
        console.log("new---getDerivedStateFromProps",props);
        return null
        // return {count:0} 
        // 必须得有个返回值 可以是null不会影响组件 
        // 也可以是状态对象 {count:108} 这样的话会影响
// 状态的更新 就会一直是 108
    //   可以接收到props方法传过来的数据 就相当于用props
    // 改变了状态，会一直以props为状态的值  
    // 派生状态会使代码冗余是代码难以维护
    // 也可以进行判断 然后在决定要用state还是这个构子 
    // 使用概率极低 应用场景是你的state值完全来自于props就可以使用它
    // 这种场景还可以用构造器 他也可以接收到props直接就可以给state
    }
    add=()=>{
        const {count} = this.state
        this.setState({count:count+1})
    }
    // 组件挂载完毕的构子
    componentDidMount(){
        console.log("new---componentDidMount");
    }
    // 
    componentDidUpdate(preProps,preState,Snapshot){
   console.log("componentDidUpdate",preProps,preState,Snapshot);
//    a获得的是先前的paops b获得的是先前的state （prestate）
// 
    }


    getSnapshotBeforeUpdate(){
 console.log("getSnapshotBeforeUpdate");
 return "asdf"
//  必须写return 可以返回null或者 Snapshot value（快照值）
// 快照值可以是数组函数数字等都可以
// 在最近一次渲染输出（提交到dom节点）之前调用，他使得组件
// 能在发生更改之前从DOM中捕获一些信息（例如，滚动位置）
// 此生命周期的任何返回值将作为参数传递给componentDidUpdate()
// 此用法并不常见，但是他可能出现在ui处理中，如需要哟特殊方式
// 处理滚动位置的聊天线程等
    }
    render(){
        console.log("new---render");
        const {count} = this.state
        return(
            <div>
                <span>{count}</span>
                <button onClick={this.add}>aaa</button>
            </div>
        )
    }
}