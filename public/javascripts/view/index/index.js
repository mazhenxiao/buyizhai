import React,{Component} from "react";
import {} from '../../service/s-index.js';
import Head from "../commen/head.js";
import Foot from '../commen/foot.js';
import Add from "../add/add.js";
//import Canvas from '../../tools/canvas.js';
class ViewIndex extends Component{
    state={
        add:"hide"
    }
    componentDidMount(){
        
    }
    Event_Click_AddTable=(ev,th)=>{
        console.log(this);
        console.log(ev.currentTarget)
        console.log(th);
        this.setState({
            add:this.state.add=="show"? "hide":"show"
        })
    }
    render(){
        let {add}=this.state;
        return <article className="byz-index Ph100 oh">
            <Head />
            <section className="byz-content Ph100" >
           
           
            </section>
           <Foot click={this.Event_Click_AddTable} />
           
            <Add animate={add}/>
            
        </article> 
    }
}
export default ViewIndex;