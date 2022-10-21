
import React,{Component} from "react"
import MyLifeB from "./MyLifeB"
// export default class LifeCycleCummation extends Component {
//     state={count:0}


//     add=()=>{
//    const {count}=this.state
//    this.setState({count:count+1})
//     }


//     componentWillMount(){
//         console.log('简要挂在1');
//     }

//     componentDidMount(){
//         console.log("挂载完成");
//     }
//     // 控制组件更新的阀门 控制组件是否继续执行
//     shouldComponentUpdate(){
//         console.log("阀门");
//         return true
//         // 如果不写return那么他的返回值就是false 不管是rrue还是
//         // false都会调用这个阀门 因为要问问阀门 要不要继续更新
//     }
// // 组件将要更新
//     componentWillUpdate(){
// console.log("componentWillUpdate");
//     }
//     // 组件更新完成
//     componentDidUpdate(){
//         console.log("组件更新完毕");
//     }
//     // 组件强制更新
//     force=()=>{
//         this.forceUpdate()
//     }
//     render(){
//         console.log("render");
//    const {count} = this.state
//         return(
//             <div>
//                 <h2>递加{count}</h2>
//                 <button onClick={this.add}>到我加1</button>
//                 <button onClick={this.force}>强制更新</button>
//             </div>
//         )
//     }
// }
export default class LifeCycleCummation extends Component{
    state = {carName:"奥迪"}

    changeCar=()=>{
        const {carName} = this.state
        this.setState({carName:"奥拓"})
    }
    render(){
        return(
            <div>
                <h2>我是a组件</h2>
                <button onClick={this.changeCar}>点我换车</button>
                <MyLifeB carName={this.state.carName} />
            </div>
        )
    }
}