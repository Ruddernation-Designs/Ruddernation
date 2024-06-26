function $$(id){return document.getElementById(id)}; 
var cleanHex=function(a){return a.replace(/[^A-F0-9]/ig,"")};
var expandHex=function(c,a){c=cleanHex(c);if(!c){
	return null}switch(c.length){case 0:c=a;
			break;
		case 1:c=c+c+c+c+c+c;
			break;
		case 2:c=c[0]+c[0]+c[0]+c[1]+c[1]+c[1];
			break;
		case 3:c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2];
			break;
		case 4:c=c+"FF";break;case 5:c=c+"F";
			break;
		case 6:break;default:c=null}return c}
var hex2rgb=function(a){a=parseInt(((a.indexOf("#")>-1)?a.substring(1):a),16);
						return{r:a>>16,g:(a&65280)>>8,b:(a&255)}};
function calc()
{	var hex = expandHex($$("hexcolour").value);
	var rgb = hex2rgb(hex,"ABCDEF");
	$$("hexcolour").value = hex;
	$$("redcolour").value = rgb.r;
	$$("greencolour").value = rgb.g;
	$$("bluecolour").value = rgb.b;
	var rgbcss = "rgb("+rgb.r+","+rgb.g+","+rgb.b+")";
	$$("csscolour").value =rgbcss;
	$$("divpreview").style.background =rgbcss;
}
function resets()
{
	$$("hexcolour").value = "";
	$$("redcolour").value = "";
	$$("greencolour").value = "";
	$$("bluecolour").value = "";
	$$("csscolour").value ="";
	$$("divpreview").style.background ="#00FF00";
}
