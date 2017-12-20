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
