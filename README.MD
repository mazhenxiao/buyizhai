# M #
技术栈「 服务端 express+mongodb，前端 react react-router redux, 皮肤待定 」


### 插件简介 ###
* 大转盘

~~~ HTML
 <RotatePlay startList={startList} />
~~~

|名称|说明|例子|
|:---------:|:--------|:-------|
|startList|JSON|[{id:1,txt:"例子"}]|

~~~ javascript
import React,{Component} from "react";
import "./css/rotatePlay.less";

class RotatePlay extends Component{
    state={
        startList:[], //初始化默认显示内容
        rotate:0      //滚动角度
    }
    local={
        point:0,      // 上一个滚动位置
        angle:0       // 固定滚动角度步长
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
        let start = 3600; //默认滚动角度
        let {startList,rotate}=this.state;
        let {point,angle}=this.local;
        let j = 360/startList.length; //计算滚动步长角度
        let current = await this.Ajax_getcurrent();
        let id=startList.findIndex(d=>d.id==current[0].id) //判断应该转到大角度
        let end = -(rotate+point*angle+start+j*id);//每次转动减去之前滚动的角度，使角度归位。
        this.local = {...this.local,...{point:id,angle:j}};//给本地角度复值
        return end;
    }
    async Event_Click_Rotate(ev){

        let start = await this.Get_Angle();
        this.setState({rotate:start})
    }
    //初始化每个与元素位置
    renderli=()=>{
        let {startList}=this.state;

        let h = 100/startList.length;  //设置元素高度百分比
        let r = 1/startList.length;   //获取单位元素弧度
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
~~~

* 洗牌算法

~~~ javascript
  let Arr = [1,2,3,4,5]
  Arr.shuffle(); // [6, 3, 2, 1, 4, 5]
~~~
> 源码
~~~ javascript
 Array.prototype.shuffle=function(){
      let arr= this,len = arr.length-1;
      for(var i = 0 ;i<=len;i++){
          let random = parseInt(Math.random()*(len-i));
          let current= arr[i];
          let item = arr[random];
          arr[random] = current;
          arr[i]=item;
      }
      return arr;
   }
~~~


