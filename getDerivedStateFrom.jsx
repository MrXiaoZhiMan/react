import React,{Component} from "react"
export default class getDerivedStateFromProps extends Component{
    constructor(props){
        super(props)
        console.log("constructor");
    }
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps");
        return null
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}