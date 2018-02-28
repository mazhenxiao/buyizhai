const mongoclient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/buyizhai";
function db() {

}
db.prototype = {
    /**
     * 数据库查询
     * @param {表名} table  “默认为projedtlist” 
     * @param {查询类型} type "【select-普通查询-默认】【update-更新】 【insert-新增】 【remove-删除】"
     * @param {查询条件} sql “默认为空”
     */
    getDB(table = "projectlist", type = "select", sql = {}) {

        return new Promise((resolve, reject) => {
            mongoclient.connect(url, (err, $db) => {
                if (err) { throw (err) }
                let file = $db.db("buyizhai");
                let project = file.collection(table);
                if (type == "select") { //查
                    let list = project.aggregate(sql, (e, d) => {
                        d.toArray((e, li) => {
                            if (e) {
                                reject(e);
                                $db.close();
                            } else {
                                resolve(li);
                                $db.close();
                            }
                        })
                    })
                } else if (type == "update") {//改

                } else if (type == "inset") { //增

                } else if (type == "remove") { //删

                }
            })
        })
    }
}
function sucess(da) {
    return
}
function error(e) { }
module.exports = new db();