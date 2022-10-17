import React,{Component} from "react";
export default class LifeClyces extends Component{
   constructor(propss){
    console.log("tis.constructor");
    super(propss)
   }

    state ={count:0}

    add=()=>{
        const {count} = this.state
        this.setState({count:count+1})
    }

    // 组件将要挂载时调用
    componentWillMount(){
     console.log("count-componentWillMount");
    }
    // 组件挂载完毕的时候
    componentDidMount=()=>{
        console.log("cound-componentDidMount");
    }
    render(){
        console.log("count-render");
        const {count} = this.state
        return(
            <div>
                <h2>当前和为{count}</h2>
            <button onClick={this.add}>dian</button>
            </div>
        )
    }
}
// 生命周期 挂载时候 首先调用constructor 然后
//  componentWillMount 组件将要挂载的时候
// 然后 render 调用render将组件挂载
// 然后 compomentDidMount 组件挂在成功时调用