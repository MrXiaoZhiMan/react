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
        // return null
        // return {count:0} 
        // 必须得有个返回值 可以是null不会影响组件 
        // 也可以是状态对象 {count:108} 这样的话会影响
// 状态的更新 就会一直是 108
    //   可以接收到props方法传过来的数据 就相当于用props
    // 改变了状态，会一直以props为状态的值  
    // 派生状态会使代码冗余是代码难以维护
    }
    // 组件挂载完毕的构子
    componentDidMount(){
        console.log("new---componentDidMount");
    }
    render(){
        console.log("new---render");
        return(
            <div>
                <h3>da</h3>
            </div>
        )
    }
}