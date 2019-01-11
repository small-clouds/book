var BaseTools = {
	//
    colorRandom: function () {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    },
    // var haorooms1 = new Date().Format("yyyy-MM-dd");
    //  var haorooms2= new Date().Format("yyyy-MM-dd hh:mm:ss");
    dateFmt: function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "h+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            "S": this.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },
	ajax:function(){
		var res ={en:"123"};
		return res;
	}
}
//去重
function unique(arr) {
    const res = new Map();
    return arr.filter((a) => !res.has(a.toString()) && res.set(a.toString(), 1))
}

var y_arr1=[
    {'name':'ceshi1','c_name':'测试','Ename':'ceshizi11','C_Ename':'测试子11','value':'yyy11'},
    {'name':'ceshi1','c_name':'测试','Ename':'ceshizi12','C_Ename':'测试子12','value':'yyy12'},
    {'name':'ceshi2','c_name':'测试2','Ename':'ceshizi21','C_Ename':'测试子21','value':'yyy21'},
    {'name':'ceshi2','c_name':'测试2','Ename':'ceshizi22','C_Ename':'测试子22','value':'yyy22'},
    {'name':'ceshi3','c_name':'测试3','Ename':'ceshizi3','C_Ename':'测试子3','value':'yyy3'},
    {'name':'ceshi4','c_name':'测试4','Ename':'ceshizi4','C_Ename':'测试子4','value':'yyy4'}
  ]
/*
var  target =[
{'name':'ceshi1','c_name':'测试','children':[{'Ename':'ceshizi11','C_Ename':'测试子11','value':'yyy11'},{'Ename':'ceshizi12','C_Ename':'测试子12','value':'yyy12'}]},
]*/
function chai(obj){
  var y_arr=[]
  for(var i=0 ;i<obj.length;i++){
      y_arr.push({
        'name':obj[i].name,
        'c_name':obj[i].c_name,
        'children':[{
            'Ename':obj[i].Ename,
            'C_Ename':obj[i].C_Ename,
            'value':obj[i].value
        }]
    });
  }
  return y_arr;
}
function mubiao(obj){
  var arr=[],result=[],y_child=obj
  for(var i =0; i<obj.length; i++){  
    var $b = {'children':[]};  
    var t = y_child[i];
    if(arr.indexOf(t['name']) ==-1){  // 如果没有重复的 
      arr.push(t['name']);
      $b.name=t['name'];
      $b.c_name=t['c_name'];
      $b.children.push(t['children']);  //?
      result.push($b);
    }else{ //如果有重复的  添加到result里面去  位置 如何选择
      for(var j =0; j<result.length; j++){
          if(result[j].name == t['name']){
              result[j].children.push(t['children']);
          }
      }
    } 
  }
  return result
}
console.time(1);
console.log(mubiao(chai(y_arr1)))
console.timeEnd(1);

function getCNameIndex(obj,TargetArr){
    for(var i = 0;i<TargetArr.length;i++){
        if(TargetArr[i].c_name===obj.c_name){
            return i;
        }
    }
    TargetArr.push({
        'name':obj.name,
        'c_name':obj.c_name,
        'children':[]
    })
    return TargetArr.length-1;
}
function addChild(obj,TargetArr,index){
    TargetArr[index].children.push({
        'Ename':obj.Ename,
        'C_Ename':obj.C_Ename,
        'value':obj.value
    })
}
var target =[]

console.time(2);
y_arr1.forEach(function(x){
  var i =getCNameIndex(x,target);
  addChild(x,target,i)
})
console.log(target);
console.timeEnd(2)


	
// 重构数据结构
var test = [1, 2, 3, 4];
var result = test.map((item, index) => {
    if (index % 2 === 0) {
        return [item, test[index + 1]]
    }
}).filter(item=>item!==undefined);
    
//关于浏览器缓存的应用  基本上 Ie8 以上都支持  特别是h5 和css3 所以基本不考虑兼容问题
if(!window.localStorage){
    alert("浏览器支持localstorage");
}else{
    var storage=window.localStorage;
    //写入a字段
    storage["a"]=1;
    //写入b字段
    storage.a=1;
    //写入c字段
    storage.setItem("c",3);
    console.log(typeof storage["a"]);
    console.log(typeof storage["b"]);
    console.log(typeof storage["c"]);
    //第一种方法读取
    var a=storage.a;
    console.log(a);
    //第二种方法读取
    var b=storage["b"];
    console.log(b);
    //第三种方法读取
    var c=storage.getItem("c");
    console.log(c);
}
//依然数据重构

var  data4=[{"name":"aaa"},{"name":"bbb"},{"name":'ccc'},{"name":'beqa'},{"name":'bert'},{"name":'ffff'}]
let data3=  data4.reduce((accum,current)=>{
  let initial=current.name[0];
  if(!accum[initial]) accum[initial]=[]
  accum[initial].push(current);
  return accum;
},{})
console.log("data3",data3)


//原生控制css
// obj.style[attr] = "css"
data={}

let data = {
      ...this.data,
      userGroupId: this.userGroupId
    };

// 数组 中文排序
    // accum[initial].sort(
    //     (param1, param2) => {
    //       return param1.name.localeCompare(param2.name,"zh");
    //     }
    //   )

    // 循环对象
    var Statistics_Website_logo ={
                     'Website_logo_title':'学而思',
                     'Website_logo_Theme':'教育行业',
                     'Website_logo_Company':'好未来'
           };
         
        for (var Key in Statistics_Website_logo){
              console.log(Key+'='+Statistics_Website_logo[Key]+'')
            }


//数组对象去重 
var  demo5=[{"name":"aaa"},{"name":"bbb"},{"name":'ccc'},{"name":'beqa'},{"name":'bert'},{"name":'ffff'},{"name":'aaa'},{"name":'ffff'}]
var obj = {};
var demo = demo5.reduce((item, next)=> {
    obj[next.name] ? '' : obj[next.name] = true && item.push(next);
    return item;
}, []);
  console.log("data3",demo)























