/**
 * Created by mazhenxiao on 2018/2/28.
 */
import React,{Component} from "react";
import RotatePlay from "../../tools/rotatePlay.js";//旋转游戏
class Play extends Component{
    componentDidMount(){

    }
    render(){
        let startList=[
            {id:0,txt:"1000元",number:1},
            {id:1,txt:"100元",number:2},
            {id:2,txt:"10元",number:3},
            {id:3,txt:"1元",number:4},
            {id:4,txt:"5元",number:5},
            {id:5,txt:"10.12元",number:6},
            {id:6,txt:"6元",number:7},
            {id:7,txt:"8元",number:8}
        ]
        return <article>
            <RotatePlay startList={startList} />
        </article>
    }
}
export default Play;