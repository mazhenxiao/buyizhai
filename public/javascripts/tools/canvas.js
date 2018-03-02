/**
 * Created by mazhenxiao on 2018/3/1.
 * 页面需要判断加载、宽度改变
 * 
 */

import React,{ Component } from "react";
class Canvas extends Component{
   state={
     list:[
         "/images/1.png","/images/2.png","/images/2.png","/images/2.png","/images/5.png","/images/6.png","/images/7.png",
     ]
   }
   local={
     dom:null,
     d2:null,
     point:{
         x:0,y:0,z:0,router:0
     },
     width:950,
     height:600,
     list:[]
   }
   init(){
      Object.assign(this.local,{
          dom:this.refs.canvas,
          d2:this.refs.canvas.getContext("2d")
      });
      this.loadImage(); 
   }
   /**
    * 图片加载
    * 
    * @memberof Canvas
    */
   loadImage(){
        
        this.state.list.forEach(arg=>{
           let img = new Image();
               img.src= arg;
               this.local.list.push({name:arg.split("/").pop(),img:""})
               img.on("load",event=>{
                    let th = event.target,src=img.src.split("/").pop();
                   
                    //console.log(this.local.d2);
                     
               },false);
               img.on("error",event=>{
                    let th = event.target;
               })
               
        })
   }    
   componentDidMount(){
       this.init(); //页面初始化
   }
   render(){
       return <div className="canvasdom">
           <canvas ref="canvas" />
       </div>
   }
}
export default Canvas;