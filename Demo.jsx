import React,{Component} from "react";
import "./democss/Demo.css"
 class Demo extends Component {
    state={newArr:[]}
    componentDidMount(){
   setInterval(()=>{
    const {newArr} = this.state;
    const news = "新闻"+(newArr.length+1)
    this.setState({newArr:[news,...newArr]})
   },1000)
    }
    getSnapshotBeforeUpdate(){
     return this.refs.lists.scrollHeight
    }
    componentDidUpdate(preProps,preState,heigth){
     return this.refs.lists.scrollTop += this.refs.lists.scrollHeight - heigth
    }
render(){
    return(
        <div className="list" ref="lists">
            {
                this.state.newArr.map((n)=>{
                 return <div>{n}</div>
                })
            }
        </div>
    )
}
    
}



// state={newsArr:[]};
// componentDidMount(){
//     setInterval(()=>{
//         setInterval(()=>{
//             const {newsArr} = this.state;
//             const news="新闻"+(newsArr.length+1);
//             this.setState({newsArr:[news,...newsArr]})
//     })
// })
// }
// render(){
//     return(
//         <div className="list">
//           {
//             this.state.newsArr.map((n,index)=>{
//                 return <div key={index} className="news">{n}</div>
//             })
//           }
//         </div>
//     )
// }