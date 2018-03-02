import React,{Component} from "react";
import "./css/commen.less";
class Head extends Component{
    componentDidMount(){

    }
    render(){
        return <header className="byz-header row">
            <div className="byz-search col-2">
                <h5>查询</h5>
            </div>
            <div className="byz-searchDom col-8">
                <p>
                    <span className="search-icon"><i className="icon iconfont icon-search"></i></span>
                    <input placeholder="搜索" type="text" className="search-bar P100" />
                </p>
            </div>
            <div className="col-2"><p className="byz-login">登陆</p></div>
        </header>
    }
}
export default Head;