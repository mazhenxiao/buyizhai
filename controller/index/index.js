const db = require("../db");

class index {
    constructor() {
       // console.log(db);
       // this.getIndex();
    }
    getIndex() {
        let dblist = [];
        return db.getDB("projectlist","select",{$project:{_id:0,id:1,name:1,pid:1}})
            .then((list) => { 
                dblist = list;
                return dblist;
             })
            .catch(e => { 
                dblist = e;
                Promise.resolve(dblist)
            })
            
            
    }
}
module.exports = new index();
