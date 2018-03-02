import React,{Component} from "react";
import reactDom from 'react-dom';
import SNCRouter from './router/index.js';
class Index extends Component{
    componentDidMount(){

    }
    render(){
         return <article className="m-routerMain Ph100">
             <SNCRouter />
         </article>
    }
}
reactDom.render(<Index />,document.querySelector("#m-router"));