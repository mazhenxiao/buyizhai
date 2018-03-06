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
        this.setState({
            add:"show"
        })
    }
    Add_onCancel=()=>{
        this.setState({
            add:"hide"
        })
    }
    Add_onSubmit=()=>{
        
    }
    render(){
        let {add}=this.state;
        return <article className="byz-index Ph100 oh">
            <Head />
            <section className="byz-content Ph100" >
           
           
            </section>
           <Foot click={this.Event_Click_AddTable} />
           
           {add=="show"&&<Add animate={add} onCancel={this.Add_onCancel} onSubmit={ this.Add_onSubmit} />} 
            
        </article> 
    }
}
export default ViewIndex;