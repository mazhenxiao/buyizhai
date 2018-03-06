import React, { Component } from "react";
import { } from '../../service/s-index.js';
import "./css/add.less";
import "../commen/css/commen.less";
//import Canvas from '../../tools/canvas.js';
import Title from "../../view/commen/title.js";
import Upload from "../commen/upload.js";
class Add extends Component {
    state = {
        title: "新增",
        animate:"hide",
    }
    local={
        time:0
    }
    componentWillReceiveProps(pre,next){
       this.Bind_SetCurrentAnimate();
    }
    componentDidMount() {
        this.Bind_SetCurrentAnimate();
    }
    Bind_SetCurrentAnimate(){
       let animate = this.props["animate"]=="show"? "show":"hide";
       this.setState({
           animate
       }) 
    }
    Event_Click_AddTable = (ev, th) => {
        console.log(this);
        console.log(ev.currentTarget)
        console.log(th);
    }
    async Event_Click_Cancel(ev){
        await this.setState({
           animate:"hide" 
         })
         await setTimeout(() => {
            this.props["onCancel"]&&this.props["onCancel"].call(this,ev,this);
         }, 500);
        
    }
    Event_Click_Submit=(ev)=>{

        this.props["onSubmit"]&&this.props["onSubmit"].call(this,ev,this);
    }
  
    render() {
        let animate = this.state.animate=="show"? `byz-add animated bounceInUp`:`byz-add animated bounceOutUp`;
       // let prop_add = this.props["animate"]||this.state.animate;
    
       // if(prop_add=="hide"){return <div className="null"></div>}
        return <article className={animate} >
            <Title text={this.state.title} onClick={this.Event_Click_Cancel.bind(this)} />
            <section className="byz-content pad10">
               <Upload type="image"  />
               <div className="from padT30">
                    <p className="item">
                        <span className="label">时间:</span>
                        <span className="content"><input className="ipt" type="text" placeholder="输入时间" /></span>
                        <span className="error"></span>
                    </p>
                    <p className="item">
                        <span className="label">名称:</span>
                        <span className="content"><input className="ipt" type="text" placeholder="输入名称" /></span>
                        <span className="error"></span>
                    </p>
                    <p className="item">
                        <span className="label">编号:</span>
                        <span className="content"><input className="ipt" type="text" placeholder="输入名称" /></span>
                        <span className="error"></span>
                    </p>
                    <p className="item">
                        <span className="label">价格:</span>
                        <span className="content"><input className="ipt" type="text" placeholder="输入价格" /></span>
                        <span className="error"></span>
                    </p>
                    <p className="item">
                        <span className="label">存储位置:</span>
                        <span className="content"><input className="ipt" type="text" placeholder="输入价格" /></span>
                        <span className="error"></span>
                    </p>
                     <p className="item">
                        <span className="label">说明:</span>
                        <span className="content"><textarea placeholder="说明"></textarea></span>
                        <span className="error"></span>
                    </p>

               </div>
            </section>
            <footer className="byz-footer padT10 Center">
                <button className="btn submit" onClick={this.Event_Click_Submit}>提交</button>
            </footer>
        </article>
    }
}
export default Add;