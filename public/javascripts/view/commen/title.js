import React,{Component} from "react";
import "./css/commen.less";
import "../commen/css/commen.less";
class Title extends Component{
    state={
        title:"标题"
    }
    componentWillReceiveProps(prevate,next){
        
    }
    componentDidMount(){

    }
    Event_Click_Back=(ev)=>{
        if(this.props["onClick"]){
            this.props.onClick.call(this,ev,this);
        }
    }
    render(){
        
        return <header className="byz-Title">
            <button onClick={this.Event_Click_Back}><i className="icon iconfont icon-lefy-exchange-o"></i></button>
            <h3>{this.state.title}</h3>
        </header>
    }
}
export default Title;