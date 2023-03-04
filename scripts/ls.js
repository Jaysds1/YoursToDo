$(document).ready(function(){
    var b=localStorage,
        m=b.i||0,
        k=$("#list"),
        c=JSON.parse(b.getItem("d"))||[],
        d=JSON.parse(b.getItem("c"))||[],
        g=JSON.parse(b.getItem("s"))||[];
    "undefined"===typeof b.i&&b.setItem("i",0);
    "undefined"===typeof b.d&&b.setItem("d","[]");
    "undefined"===typeof b.c&&b.setItem("c","[]");
    "undefined"===typeof b.s&&(b.setItem("s","[]"),
        g={textColor:"#000000",bgColor:"#ffffaa"},
        b.s=JSON.stringify(g)
    );
    "undefined"===typeof b.TS&&b.setItem("TS",5242880-unescape(encodeURIComponent(JSON.stringify(b))).length);
b.length!==localStorage.length&&(b=localStorage);
if(0<d.length){
    var h=0;
    for(k.html("");h<d.length;++h)k.html(k.html()+'<li id="'+d[h]+'">'+b.getItem(d[h])+"</li>\n");
    if(0<c.length)
        for(h=0;h<=c.length;h++)$("#"+c[h])&&$("#"+c[h]).html("<del>"+$("#"+c[h]).html()+"</del>");k.html(k.html()+'<li><input type="text" placeholder="To-Do" autofocus></li>')}$("input").bind("keypress",function(a){a=a.keyCode||a.which;13==a&&(a=$(this).val(),0!==a.length&&($(this).parent().append(a),b.setItem(++m+"",a),b.setItem("i",
m),d[d.length]=m,$("li").last().after("<li></li>"),a=$("li").last(),a.css("color",g.textColor),$(this).val("").appendTo(a).focus(),b.c=JSON.stringify(d)))});$("ul > li").click(function(a){if("edit"!=a.toElement.id&&"newEdit"!=a.toElement.id){a=$(this);var l=a.attr("id");a.find("del")[0]||(a.html("<del>"+a.html()+"</del>"),c[c.length]=l,b.d=JSON.stringify(c))}}).dblclick(function(a){if("edit"!=a.toElement.id&&"newEdit"!=a.toElement.id){a=$(this);var l=a.attr("id"),f=0;if(a.find("del")[0]){a.slideUp();
for(b.getItem(l)&&b.removeItem(l);f<c.length;f++)c[f]==l&&c.splice(f);for(f=0;f<d.length;f++)d[f]==l&&d.splice(f);b.d=JSON.stringify(c);b.c=JSON.stringify(d)}}}).mouseover(function(){$(this).find("del")[0]||($("#edit").css("display","inline-block"),$("#edit").appendTo($(this)))}).mouseout(function(){$("#edit").css("display","none")});var n="";$("#edit").click(function(){var a=$(this).parent();n=a.html();$(this).appendTo(k);$(this).css("display","none");a.html('<input type="text" id="newEdit" autofocus="true">');
a.off();$("#newEdit").focus().bind("keypress",function(a){a=a.keyCode||a.which;if(13==a){a=$(this).val();var f=$(this).parent();$(this).remove();if(0==a.length)return f.html(n);f.html(a);b.setItem(f.attr("id"),a)}})});$("li").last().off();$("#settings").click(function(){ this.classList.toggle('change');switch(Number($(this).data("open"))){case 0:$("aside").css("display","block");$("#wrap").css("position","absolute").css("left","350px");break;case 1:$("aside").css("display","none"),$("#wrap").css("position","static").css("left","0px")}$(this).data("open",
0==Number($(this).data("open"))?1:0)});"color"==$("#tColor").attr("type")?($("#tColor").val(g.textColor).change(function(){$("h1,h2,h3,li,p,input[type=text],label,span").css("color",$(this).val());g.textColor=$(this).val();b.s=JSON.stringify(g)}),$("#bgColor").val(g.bgColor).change(function(){$("body,input[type=text]").css("background-color",$(this).val());g.bgColor=$(this).val();b.s=JSON.stringify(g)})):($("#tColor").parent().html('Text Color: <div class="preview"></div>'),$("#bgColor").parent().html('Background Color: <div class="preview"></div>'),
$("aside").html($(this).html()+'<div class="colorpicker" style="display:none"><canvas id="picker" var="1" width="300" height="300"></canvas><div class="controls"><div><label>R</label> <input type="text" id="rVal" /></div><div><label>G</label> <input type="text" id="gVal" /></div><div><label>B</label> <input type="text" id="bVal" /></div><div><label>RGB</label> <input type="text" id="rgbVal" /></div><div><label>HEX</label> <input type="text" id="hexVal" /></div></div></div>'),$(function(){var a=!0,
b=document.getElementById("picker"),f=b.getContext("2d"),c=new Image;c.onload=function(){f.drawImage(c,0,0,c.width,c.height)};var d="images/colorwheel1.png";switch($(b).attr("var")){case "2":d="images/colorwheel2.png";break;case "3":d="images/colorwheel3.png";break;case "4":d="images/colorwheel4.png";break;case "5":d="images/colorwheel5.png"}c.src=d;$("#picker").mousemove(function(e){if(a){var c=$(b).offset();e=f.getImageData(Math.floor(e.pageX-c.left),Math.floor(e.pageY-c.top),1,1).data;c="rgb("+
e[0]+", "+e[1]+", "+e[2]+")";$(".preview").css("backgroundColor",c);$("#rVal").val(e[0]);$("#gVal").val(e[1]);$("#bVal").val(e[2]);$("#rgbVal").val(e[0]+","+e[1]+","+e[2]);e=e[2]+256*e[1]+65536*e[0];$("#hexVal").val("#"+("0000"+e.toString(16)).substr(-6))}});$("#picker").click(function(b){a=!a});$(".preview").click(function(b){$(".colorpicker").fadeToggle("slow","linear");a=!0})}),$(".colorpicker").css("background-color","#222222").css("border-radius","5px 5px 5px 5px").css("box-shadow","2px 2px 2px #444444").css("color",
"#FFFFFF").css("font-size","12px").css("position","absolute").css("width","460px"),$("#picker").css("cursor","crosshair").css("float","left").css("margin","10px").css("border","0"),$(".controls").css("float","right").css("margin","10px"),$(".controls > div").css("border","1px solid #2F2F2F").css("margin-bottom","5px").css("overflow","hidden").css("padding","5px"),$(".controls label").css("float","left"),$(".controls > div input").css("background-color","#121212").css("border","1px solid #2F2F2F").css("color",
"#DDDDDD").css("float","right").css("font-size","10px").css("height","14px").css("margin-left","6px").css("text-align","center").css("text-transform","uppercase").css("width","75px"),$(".preview").css("background",'url("../images/select.png") repeat scroll center center transparent').css("border-radius","3px").css("box-shadow","2px 2px 2px #444444").css("cursor","pointer").css("height","30px").css("width","30px"));$("h1,h2,h3,li,p,input[type=text],label,span").css("color",g.textColor);$("body,input[type=text]").css("background-color",
g.bgColor)});