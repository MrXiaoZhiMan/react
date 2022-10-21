import React,{Component} from "react"
export default class MyLifeB extends Component{
    // 组件将要接受新的props的构子
   componentWillReceiveProps(props){
   console.log("b ---componentWillReceiveProps",props);
   }
//    控制组件更新的阀门
shouldComponentUpdate(){
 console.log("b---shouldComponentUpdate");
 return true
}
// 组将将要更新的构子
componentWillUpdate(){
    console.log("b---componentWillUpdate");
}
// 组件更新完毕的构子
componentDidUpdate(){
    console.log("b---componentDidUpdate");
}
    render(){
        console.log("b---render");
        const {carName} = this.props
        return(
            <div>
                <h2>接受到的车是 {carName}</h2>
                <button>b</button>
            </div>
        )
    }
}