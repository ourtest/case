/**
 * 获取元素节点的方法
 * @param str
 * @returns {*}
 */
function getElement(str){
    var b=str.charAt(0);
    if(b==="#"){
        return document.getElementById(str.slice(1));
    }else if(b=="."){
        return document.getElementsByClassName(str.slice(1));
    }else{
        return document.getElementsByTagName(str);
    }
}
/**
 * 获得第一个子元素
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstChild(ele){
    return ele.firstElementChild || ele.firstChild
}
/**
 * 获得最后一个子元素
 * @param ele
 * @returns {Element|*|Node}
 */
function getLastChild(ele){
    return ele.lastElementChild || ele.lastChild
}
/**
 * 获得下一个兄弟元素
 * @param ele
 * @returns {Element|*|Node}
 */
function getnextSibling(ele){
    return ele.nextElementSibling || ele.nextSibling
}
/**
 * 获得上一个兄弟元素
 * @param ele
 * @returns {Element|*|Node}
 */
function getpreviousSibling(ele){
    return ele.previousElementSibling || ele.previousSibling
}
/**
 * 通过一个子元素获得所有子元素
 * @param ele
 * @param index
 * @returns {*|HTMLElement}
 */
function getchildren(ele,index){
    return ele.parentNode.children[index];
}
/**
 * 通过一个子元素获得所有兄弟元素
 * @param ele
 * @returns {Array}
 */
function getAllSiblings(ele){
    var arr=ele.parentNode.children;
    var arrNew=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]!==ele){
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
}
/**
 * 缓动动画y方向
 * @param ele
 * @param target
 * @param intervalTime
 */
function animateHY(ele, target,intervalTime) {
    clearInterval(ele.timer)
    ele.timer = setInterval(function () {
        var step = (target - ele.offsetTop) / 10;
        //step = step / Math.abs(step) * Math.ceil(Math.abs(step));
        step = step>0?Math.ceil(step):Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        var val = target - ele.offsetTop;
        if (Math.abs(val) <= Math.abs(step)) {
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    }, intervalTime)
}
/**
 * 缓动动画x方向
 * @param ele
 * @param target
 * @param intervalTime
 */
function animateHX(ele, target,intervalTime) {
    clearInterval(ele.timer)
    ele.timer = setInterval(function () {
        var step = (target - ele.offsetLeft) / 10;
        //step = step / Math.abs(step) * Math.ceil(Math.abs(step));
        step = step>0?Math.ceil(step):Math.floor(step);
        ele.style.left = ele.offsetLeft + step + "px";
        var val = target - ele.offsetLeft;
        if (Math.abs(val) <= Math.abs(step)) {
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    }, intervalTime)
}

/**
 * 匀速动画x轴方向
 * @param ele
 * @param target
 * @param intervalTime
 */
function animateCX(ele,target,intervalTime){
    clearInterval(ele.timer);
    var speed = target>box.offsetLeft?10:-10;
    ele.timer = setInterval(function () {
        //var val = target - box.offsetLeft;//在这里有问题,多走一步
        box.style.left = box.offsetLeft + speed + "px";
            var val = target - box.offsetLeft;
        if(Math.abs(val)<=Math.abs(speed)){
            box.style.left = target + "px";
            clearInterval(ele.timer);
        }
    },intervalTime)
}
/**
 * 匀速动画Y轴方向
 * @param ele
 * @param target
 * @param intervalTime
 */
function animateCY(ele,target,intervalTime){
    clearInterval(ele.timer);
    var speed = target>box.offsetTop?10:-10;
    ele.timer = setInterval(function () {
        //var val = target - box.offsetLeft;//在这里有问题,多走一步
        box.style.top = box.offsetTop + speed + "px";
        var val = target - box.offsetTop;
        if(Math.abs(val)<=Math.abs(speed)){
            box.style.top = target + "px";
            clearInterval(ele.timer);
        }
    },intervalTime)
}
/**
 * 获得滚动值
 * @returns {{top: number, left: number}}
 */
function scroll(){
    if(window.pageYOffset!==undefined){
        return {
            "top":window.pageYOffset,
            "left":window.pageXOffset
        }
    }else if(document.compatMode==="CSSiCompat"){
        return {
            "top":document.documentElement.scrollTop,
            "left":document.documentElement.scrollLeft
        }
    }else{
        return {
            "top":document.body.scrollTop,
            "left":document.body.scrollLeft
        }
    }
    //或者以下写法
//        return{
//            "top":window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,
//            "left":window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft
//        }
//        或者以下写法
//        return{
//            "top":window.pageYOffset||document.documentElement.scrollTop+document.body.scrollTop,
//            "left":window.pageXOffset||document.documentElement.scrollLeft+document.body.scrollLeft
//        }

}