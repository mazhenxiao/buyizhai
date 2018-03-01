import React,{Component} from "react";
//import Canvas from '../../tools/canvas.js';
import {} from '../../service/s-index.js';
import Head from "../commen/head.js";
import Foot from '../commen/foot.js';
class ViewIndex extends Component{
    componentDidMount(){
        
    }
    
    render(){
        return <article className="byz-index">
            <Head />
            <section className="byz-content">

            </section>
           <Foot />
        </article> 
    }
}
export default ViewIndex;