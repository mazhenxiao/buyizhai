import React,{Component} from "react";
import {} from '../../service/s-index.js';
import "./css/add.less";
//import Canvas from '../../tools/canvas.js';
class Add extends Component{
    componentDidMount(){
        
    }
    Event_Click_AddTable=(ev,th)=>{
        console.log(this);
        console.log(ev.currentTarget)
        console.log(th);
    }
    list(){
        let arr = [];
        for(var i = 0 ;i<50;i++){
            arr.push(<li key={i}>{
            i}fdsfafsfsafd</li>)
        }
        return arr;
    }
    render(){
        let animate = `byz-add ${this.props.animate}`;
        return <article className={animate} >
            <ul>
            {
               this.list()
            }
            </ul>
        </article> 
    }
}
export default Add;