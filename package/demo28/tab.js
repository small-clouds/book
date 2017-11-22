/* 
* Field Declare ^-^  
*/ 
var Asgard; 
if(!Asgard) 
    Asgard={}; 
if(!Asgard.CardProgram) 
    Asgard.CardProgram={}; 
/* 
*function:define Object ItemsPanel 
*/ 
Asgard.CardProgram.ItemsPanel=function(id,frameId) 
{ 
    this.element=$(id); 
    this.register=new Array(); 
    this.currentItem=null; 
    this.cardFrame=$(frameId); 
    this.element.className='itemsPanel'; 
} 
/* 
*function:add item from panel 
*/ 
Asgard.CardProgram.ItemsPanel.prototype.addItem=function(item) 
{ 
    if(this.validateExist(item.element.getAttribute('id'))) 
            return; 
    item.panel=this; 
    this.visitedRegister(item,"add"); 
    this.element.appendChild(item.element); 
} 
/* 
*function:delete item from panel 
*/ 
Asgard.CardProgram.ItemsPanel.prototype.deleteItem=function(item) 
{             
    this.visitedRegister(item,"delete"); 
    this.element.removeChild(item.element); 
} 
/* 
*Ajax or other  
*/ 
Asgard.CardProgram.ItemsPanel.prototype.changeSubPage=function() 
{ 
    if(this.register.length==0) 
    { 
        this.cardFrame.src=""; 
        return; 
    } 
     
    this.cardFrame.src=this.currentItem.url; 
    /* 
    *这里用户可以自己定义想要的页面，如果你想内嵌IFrame。 
    */ 
} 
Asgard.CardProgram.ItemsPanel.prototype.validateExist=function(id) 
{ 
    for(var i=0;i<this.register.length;i++) 
    { 
        if(this.register[i].element.id==id) 
        { 
            return true; 
        } 
    }     
    return false; 
} 
/* 
*function:register visited sequence 
*         type--add | delete | active 
*/ 
Asgard.CardProgram.ItemsPanel.prototype.visitedRegister=function(item,type) 
{ 
    var i=this.register.length; 
    if(type=="add") 
    {         
        for(var k=0;k<i;k++) 
        { 
            this.register[k].resetItem(); 
        } 
        this.currentItem=item; 
        this.register[i]=item; 
        this.currentItem.element.className="active"; 
         
        this.changeSubPage(); 
    } 
    else if(type=="delete") 
    {                     
        for(k=0;k<i;k++) 
        { 
            if(this.register[k]==item) 
            { 
                this.register.splice(k,1); 
                break; 
            } 
        } 
        if(item==this.currentItem) 
        { 
            i=this.register.length; 
            if(i>0) 
            { 
                this.currentItem=this.register[i-1]; 
                this.currentItem.element.className="active"; 
            } 
            else 
                this.currentItem=null; 
        } 
         
        this.changeSubPage(); 
    } 
    else if(type=="active") 
    { 
        if(this.currentItem==item) 
            return; 
        else 
        {                     
            for(k=0;k<i;k++) 
            { 
                if(this.register[k]==item) 
                { 
                    this.register.splice(k,1); 
                    break; 
                } 
            } 
             
            i=this.register.length; 
            for(k=0;k<i;k++) 
            { 
                this.register[k].resetItem(); 
            } 
            this.currentItem=item; 
            this.register.push(item); 
        } 
         
        this.changeSubPage(); 
    } 
} 
/* 
*function:define Object Item 
*/ 
Asgard.CardProgram.Item=function(id,title,url,flag) 
{     
    this.element=this.$C(); 
    this.panel={}; 
    this.id=id; 
    this.title=title; 
    this.url=url; 
    this.flag=flag; 
    this.init(); 
}; 
/* 
*function:init item 
*/ 
Asgard.CardProgram.Item.prototype.init=function() 
{ 
    this.element.setAttribute('id',this.id); 
    this.element.className="default";         
     
    var mirror=this; 
    if(!this.flag) 
    {         
        this.element.innerHTML="<nobr class='title' title='"+this.title+"'>"+this.title+"</nobr>"+"<a href='#nogo' class='close' title='关闭'></a>";         
        this.addEventListener(this.$ES(this.element,'nobr')[0],'click',function(){mirror.activeItem();}); 
        this.addEventListener(this.$ES(this.element,'a')[0],'click',function(){mirror.destroyItem();}); 
    } 
    else 
    { 
        this.element.innerHTML="<nobr class='title' title='"+this.title+"'>"+this.title+"</nobr>";     
        this.addEventListener(this.$ES(this.element,'nobr')[0],'click',function(){mirror.activeItem();}); 
    } 
     
} 
/* 
*active item 
*/ 
Asgard.CardProgram.Item.prototype.activeItem=function() 
{ 
    this.panel.visitedRegister(this,"active"); 
    this.element.className="active";     
} 
/* 
*function:reset item 
*/ 
Asgard.CardProgram.Item.prototype.resetItem=function() 
{ 
    this.element.className="default";     
} 
/* 
*function:destroy item 
*/ 
Asgard.CardProgram.Item.prototype.destroyItem=function() 
{ 
    this.panel.deleteItem(this); 
} 
/* 
*function:addListener to item 
*/ 
Asgard.CardProgram.Item.prototype.addEventListener=function(element,type,handler) 
{ 
    if(element.addEventListener) 
        element.addEventListener(type,handler,true); 
    else 
        element.attachEvent("on"+type,handler,true); 
} 
/* 
*function:usefull functions 
*/ 
Asgard.CardProgram.Item.prototype.$C=function(tag) 
{ 
    if(tag && typeof tag =="string") 
            return document.createElement(tag); 
    else 
        return document.createElement('li'); 
} 
Asgard.CardProgram.Item.prototype.$ES=function(element,tag) 
{ 
    return element.getElementsByTagName(tag); 
} 
function $(id) 
{ 
    return document.getElementById(id); 
} 