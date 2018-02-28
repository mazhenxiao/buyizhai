/**
 * Created by mazhenxiao on 2018/2/28.
 */

export const guid = () => {
    //guid的生成
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
/**
 * @name (fetch异步获取数据)
 * @param {*} opt
 */
export const Ajax = (opt) => {
    const { url, ...params } = opt;
    if(!url){ Toast.fail("没填入url");return Promise.reject({ errorcode: "5000", data:[], message: `自定义错误-未填入url`, url })}
    let token =guid();//this.token;
    let requestInfo = {
        method: opt["type"] ? opt.type : 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        }
    };
    let _URL = url.replace(/^\\/ig, "");
    if (params) {
        let ParamsStr = ``;
        if (typeof params["data"] == "string") {
            ParamsStr += params["data"];
        } else {
            for (var li in params["data"]) {
                ParamsStr += `${li}=${params["data"][li]}&`;
            }
        }
        ParamsStr = ParamsStr.replace(/\&$/ig, "");
        ParamsStr = !!ParamsStr ? `${ParamsStr}&token=${token}` : `token=${token}`;
        if (requestInfo.method.toLocaleLowerCase() == "post") {
            requestInfo.body = ParamsStr;
        } else {
            //get请求添加时间戳
            ParamsStr = !!ParamsStr ? `${ParamsStr}&t=${new Date().getTime()}` : `t=${new Date().getTime()}`;
            _URL = url.indexOf("?") >= 0 ? url + "&" + ParamsStr : url + "?" + ParamsStr;
        }

    }
    return fetch(_URL, requestInfo)
        .then(res => {
            return res.json()
                .then(arg=>{

                    return arg;

                })
                .catch(e => {

                    //Toast.fail(`${_URL}接口错误！`)
                    return Promise.reject({ errorcode: "500", data: requestInfo, message: `服务器错误`, url: _URL });
                });
        })
        .then(res => {

            if (res["errorcode"] && res.errorcode == "200") {
                return res;
            } else if (res["errorcode"] && res.errorcode == "401") {
               // Toast.fail("登陆超时请重新登陆！");
            } else if (res["errorcode"] && res.errorcode == "500") {
                return Promise.reject(res)
            } else {
                return Promise.reject(res);
            }
        })
}

/**
 * @name (是否为null判断)
 * @description 浅比较是否为null
 * @param {null} arg
 * @see {isNull(null);}
 */
export const isNull = (arg) => {
    return JSON.stringify(arg) == "null";
}
/**
 * @name (是否为json)
 * @description 校验数据是否符合数组嵌套对象模式，json浅比对
 * @param {json} json
 * @see {isJSON([{a:1}])}
 */
export const isJSON = (json) => {
    let _json = typeof json == "string" ? JSON.parse(json) : json,
        check = false,
        _str = JSON.stringify(json);
    if (Array.isArray(_json)) {
        let num = _json.length;
        let reg = /(?:\{.*?\:.*?\})+/ig;
        let ex = _str.match(reg);
        check = ex.length == num
    }
    return check;
}
/**
 * @name (深层比对)
 * @param {变更前数据} begin
 * @param {比对数据} after
 */
export const comparison = (begin, after, check) => {
    let btype = typeof begin;
    let atype = typeof after;
    check = check || true;
    if (btype != atype) {
        Toast.fail("数据类型不匹配！", 3);
        return false
    }
    for (let k in begin) {
        const bc = begin[k];
        const ac = after[k];
        if (bc == undefined) { //判断结果为null和undefined的时候,
            check = ac == bc;
        } else if (isJSON(bc) && check) {
            check = comparison(bc, ac, check);
        } else {
            if (check) {
                check = JSON.stringify(bc) != JSON.stringify(ac);
            }
        }
    }
    return check;
}


