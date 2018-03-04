import React,{Component} from "react";
class Foot extends Component{
    componentDidMount(){

    }
    Event_Click_Add=(ev)=>{
        this.props.click.call(this,ev,this);
    }
    render(){
        return <footer className="byz-footer">
            <div className="byz-addbtn" onClick={this.Event_Click_Add}><i className="icon iconfont icon-add" /></div>
            <div className="byz-footer-box"></div> 
        </footer>
    }
}
export default Foot;