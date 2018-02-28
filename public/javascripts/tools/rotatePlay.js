//import createjs from "./tweenjs";
import React,{Component} from "react";
import "./css/rotatePlay.less";
class RotatePlay extends Component{
    state={
        startList:[],
        point:0, //起始
        rotate:0
    }
    local={
        
    }
    componentDidMount(){
        let {startList} = this.props;
        this.setState({startList});
    }
     Event_Click_Rotate=(ev)=>{
        let start = 3600;
        let {startList}=this.state;
        let j = 360/startList.length;
        
        this.setState({rotate:start})
    }
    renderli=()=>{
       let {startList}=this.state;
     
       let h = 100/startList.length;
       let r = 1/startList.length;
       return startList.map((el,ind)=>{
            
           return <li style={{transform:`rotate(${ind*r}turn)`}} key={ind}>
                        <img src="" width="50" height="50" />
                        <p>{el.txt}</p>
                    </li>
       })
    }
    render(){
        let {rotate}=this.state;
       return <div className="m-rotatePlay">
                <ul refs="MrotateDom" className="m-rotateDom" style={{transform:`rotate(${rotate}deg)`}}>
                    {
                      this.renderli()
                    }
                </ul>
                <p className="m-rotatePoint" onClick={this.Event_Click_Rotate}>抽奖</p>
        </div>
    }
}
export default RotatePlay;