import React, { Component } from "react";
import "../commen/css/commen.less";
class Upload extends Component{
    state={
        multiple:true, //多选
        type:"*" ,//"*,image"
        accept:"*/*", //格式
        data:[]//显示数据
    }
  
    componentDidMount(){
        
        this.Set_Stage(this.props["type"])
    }
    componentWillReceiveProps(pre,next){
        if(next["props"]){
            this.Set_Stage(next.props["type"])
        }
       
    }
    Set_Stage(arg){
        this.setState({
            type:arg||"image"
        })
    }
    Get_File=(arg)=>{
        let str = "*,image";
        let reg = /(\[|\]|\(|\)|\-|\+\^|\$|\.|\*|\{|\}|\&|\!)/ig;
        let text = arg.split(",").map(def=>{
            let tt="";
            switch(def){
                case "*":def="*/*",tt=def.replace(reg,"\\\\$1");break;
                case "video":
                case "audio":
                case "image":tt=def.replace(reg,"\\\\$1\\/*");break;
            }
           return tt;
        });
       return text.join(",")
    }
    Set_List=()=>{
        let da = this.state.data;
            return da.map((el,ind)=>{
                
                   return <li key={ind}>
                                <img src={ el.type.includes("image")? el.file:""} />
                                <div>
                                    
                                        <span>{el.name}</span>
                                        <span>{el.size}</span>
                                        <span>{el.lastModified}</span>
                                    
                                </div>
                            </li>
                
            })
    }
    Event_Change(ev){
        let th =ev.target,file = th.files,list=[],num=0;
         let asyncfun = arg=>{
            if(num!=0&&num>=list.length){
                let data = [...this.state.data,...list]//.concat(list);
                this.setState({
                    data
                })
                
            }
         }
         [...file].forEach(element => {
             let {name,size,type,lastModified} = element;
             
            if(!this.state.data.some(arg=>arg.name==element.name)){
                let file = new FileReader();
                    file.readAsDataURL(element);
                    file.onloadend=arg=>{
                        let me = arg.target.result;
                        list.push({
                            name,size,type,lastModified,file:me,progress:0
                        });
                        num+=1 ;
                        asyncfun();
                    }
                    file.onerror =arg=>{
                        num+=1;
                        asyncfun();
                    }
               
            }

        });
        

    }

    render(){
        let ty = this.state.type.includes("image")? "PhotoImageList":"PhotoFileList";
        let classname = `byz-Photo Center padT30 ${ty}`;
        return <h3 className={classname}>
            <ul className="byz-Photo-list">
                {this.Set_List()}
                <li> 
                    <p className="byz-photoadd">
                        <input onChange={this.Event_Change.bind(this)} multiple={this.state.multiple} accept={this.Get_File(this.state.type)} type="file" className="file" />
                    </p>
                </li>
            </ul>
           
            </h3>
    }
}
export default Upload;