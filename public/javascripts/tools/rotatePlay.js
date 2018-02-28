//import createjs from "./tweenjs";
import React,{Component} from "react";
import "./css/rotatePlay.less";

class RotatePlay extends Component{
    state={
        startList:[],
        rotate:0
    }
    local={
        point:0,
        angle:0
    }
    componentDidMount(){
        let {startList} = this.props;
        this.setState({startList});
    }
    //模拟数据获取，具体参见yuanyang项目
    Ajax_getcurrent(){
         let num = parseInt(Math.random()*8)
         let da=[{id:num,txt:`${num}等奖`}];
        return da;
    }
    async Get_Angle(){
        let start = 3600;
        let {startList,rotate}=this.state;
        let {point,angle}=this.local;
        let j = 360/startList.length;
        let current = await this.Ajax_getcurrent();
        let id=startList.findIndex(d=>d.id==current[0].id) //判断应该转到大角度
        let end = -(rotate+point*angle+start+j*id);
        this.local = {...this.local,...{point:id,angle:j}};
        return end;
    }
    async Event_Click_Rotate(ev){

        let start = await this.Get_Angle();
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
            <p className="m-rotatePoint" onClick={this.Event_Click_Rotate.bind(this)}>抽奖</p>
        </div>
    }
}
export default RotatePlay;