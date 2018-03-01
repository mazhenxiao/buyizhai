/**
 * 页面宽度判断
 */
;!(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = (clientWidth / 7.5) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

// 洗牌算法
 
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
// 托管
   HTMLElement.prototype.on=function(ev,callback){
     let th = this,reg = new RegExp(ev),
         str = "blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,\
                mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,\
                change,select,submit,keydown,keypress,keyup,error,contextmenu,input,\
                touchstart,touchend,touchmove";
        let execs = reg.exec(str);
        if(execs){
            let events= execs[0];
            th.addEventListener(events,callback,false)
        }else{
            let event= new Event()
        } 
   }


})(document, window);

