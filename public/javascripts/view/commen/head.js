import React,{Component} from "react";
import "./css/commen.less";
class Head extends Component{
    componentDidMount(){

    }
    render(){
        return <header className="byz-header row">
            <div className="byz-search col-3">
                <h5>查询</h5>
                <ul className="byz-searchBox">
                    <li>条件查询</li>
                </ul>
            </div>
            <div className="col-3"><input type="text" className="search-bar" /></div>
            <div className="col-3">我的</div>
        </header>
    }
}
export default Head;