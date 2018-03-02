import React,{Component} from "react";
import {} from '../../service/s-index.js';
import Head from "../commen/head.js";
import Foot from '../commen/foot.js';
//import Canvas from '../../tools/canvas.js';
class ViewIndex extends Component{
    componentDidMount(){
        
    }
    
    render(){
        return <article className="byz-index Ph100 oh">
            <Head />
            <section className="byz-content Ph100">
                
            </section>
           <Foot />
        </article> 
    }
}
export default ViewIndex;