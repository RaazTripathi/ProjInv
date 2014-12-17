/**

* No Copyright : Free to Use
* قال الشيخ صالح اللحيدان حفظه الله : أما العلم فلا يحتكر . أي العلم الشرعي
*
**/

HijrahDate = null;
tmp=null;
function City(all){this.cache=all;return this;};
(function(_HijrahDate, proxy,City) {
    if(!Object.equals){
        
         !function(){Number.prototype.isEven=function(){return this%2==0},Number.prototype.isOdd=function(){return!this.isEven()},Number.prototype.toRoman=function(){var t,n=Math.floor(this),e="",i=3999,o=0;if(v=[1e3,900,500,400,100,90,50,40,10,9,5,4,1],r=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"],1>n||n>i)return"";for(;13>o;){for(t=v[o];n>=t;)n-=t,e+=r[o];if(0==n)return e;++o}return""},Number.fromRoman=function(t){if(t=String(t).toUpperCase(),t.length>15||/[^MDCLXVI]/.test(t))return 0/0;for(var r,n,e=t.length,i=0,o=0,s={M:1e3,D:500,C:100,L:50,X:10,V:5,I:1};e>o;){if(n=t.charAt(o++),!s[n])return 0/0;n=s[n],r=s[t.charAt(o)||"N"]||0,r>n&&(n*=-1),i+=n}return i.toRoman()==t?i:0/0},Date.prototype.toHHMMSS=function(t){return((this.getTime()-t.getTime())/1e3+"").toHHMMSS()},Date.prototype.daysNext=function(t){return t||(t=0),new Date(this.getTime()+864e5*t)},Date.prototype.daysAgo=function(t){return t||(t=0),Date.daysNext(-1*t)},Date.prototype.tomorrow=function(){return this.daysNext(1)},Date.prototype.yesterday=function(){return this.daysAgo(1)},Date.tomorrow=function(){return Date.daysNext(1)},Date.yesterday=function(){return Date.daysAgo(1)},Date.daysNext=function(t){return t||(t=0),new Date((new Date).getTime()+864e5*t)},Date.daysAgo=function(t){return t||(t=0),Date.daysNext(-1*t)},String.prototype.fileExtension=function(){return this.substr((~-this.lastIndexOf(".")>>>0)+2)},String.prototype.urlReady=function(t,r,n){n||0==n||(n=10);var e=!1,i=this;return $.ajax({url:this,type:"HEAD",success:function(){"function"==typeof t&&(t.call(i),e=!0)},error:function(){n>0?setTimeout(function(){i.urlReady(t,r,--n)},150):"function"==typeof r&&r.call(i)}}),e},String.prototype.urlParams=function(t,r){var n,e,i="",o=$("<a />").attr("href",this)[0],s=/\+/g,a=/([^&=]+)=?([^&]*)/g,p=function(t){return decodeURIComponent(t.replace(s," "))},u=o.search.substring(1);for(n={};e=a.exec(u);)n[p(e[1])]=p(e[2]);if(t||r){if(t&&!r)return n[t];n[t]=r;var h=[];for(var f in n)h.push(encodeURIComponent(f)+"="+encodeURIComponent(n[f]));return h.length>0&&(i="?"+h.join("&")),o.origin+o.pathname+i}return n},String.prototype.urlPrasing=function(){var t=$("<a />").attr("href",this)[0],r=t.protocol+"//"+t.hostname;t.port.length>0&&(r=r+":"+t.port);var n=this.urlParams();return{host:t.host,hostname:t.hostname,pathname:t.pathname,port:t.port,protocol:t.protocol,search:t.search,hash:t.hash,origin:r,params:n}},String.prototype.urlParsing=String.prototype.urlPrasing,String.prototype.toHHMMSS=function(){var t=parseInt(this,10),r=Math.floor(t/3600),n=Math.floor((t-3600*r)/60),e=t-3600*r-60*n;10>r&&(r="0"+r),10>n&&(n="0"+n),10>e&&(e="0"+e);var i=r+":"+n+":"+e;return i},String.prototype.toFunction=function(){for(var t=this.split("."),r=window||this,n=0,e=t.length;e>n;n++)r=r[t[n]];if("function"!=typeof r)throw new Error("function not found");return r},String.equalIfNull=function(t,r){return t?t:r},String.prototype.passwordColor=function(){var t={Secure:"#008000",Strong:"#006000",good:"#e3cb00",weak:"#Fe3d1a"};return t[this.passwordSecurity()]},String.prototype.passwordSecurity=function(){var t=this.passwordScore();return t>=90?"Secure":t>80?"Strong":t>60?"good":t>=30?"weak":""},String.prototype.passwordScore=function(){var t=0;if(!this)return t;for(var r=new Object,n=0;n<this.length;n++)r[this[n]]=(r[this[n]]||0)+1,t+=5/r[this[n]];var e={digits:/\d/.test(this),lower:/[a-z]/.test(this),upper:/[A-Z]/.test(this),nonWords:/\W/.test(this)};variationCount=0;for(var i in e)variationCount+=1==e[i]?1:0;return t+=10*(variationCount-1),parseInt(t)},String.prototype.toDate=function(t,r){t||(t="/"),r||(r=":");var n=this.reduceWhiteSpace().match(new RegExp("(\\d{4})"+t+"(\\d{2})"+t+"(\\d{2}) (\\d{2})"+r+"(\\d{2})"+r+"(\\d{2})"));if(n)return new Date(Date.UTC(parseInt(n[1]),parseInt(n[2],10)-1,parseInt(n[3],10),parseInt(n[4],10),parseInt(n[5],10),parseInt(n[6],10),0));var e,i,o,s,a,p;return this.noSpace().length===8+2*t.length,n=this.reduceWhiteSpace().match(new RegExp("(\\d{2})"+t+"(\\d{2})"+t+"(\\d{4}) (\\d{2})"+r+"(\\d{2})"+r+"(\\d{2})")),n?(a=n[6],s=n[5],o=n[4],i=n[2],e=n[1],a=String.equalIfNull(a,"00"),o=String.equalIfNull(o,"00"),s=String.equalIfNull(s,"00"),a=a?a:"00",isFinite(e)&&parseInt(e,10)>12&&isFinite(i)&&(parseInt(i,10)>12?e="12":(p=e,e=i,i=p)),new Date(e+"/"+i+"/"+n[3]+" "+o+":"+s+":"+a)):new Date},String.prototype.toInstance=function(){var t=this.toFunction();return t?new t:new Object},String.prototype.strRight=function(t){var r=this.lastIndexOf(t),n=this.substring(r+t.length,this.length);return n},String.prototype.strLeft=function(t){var r=this.indexOf(t),n=this.substring(0,r);return n},String.prototype.strCenter=function(t,r){return this.strRight(t).strLeft(r)},String.prototype.noSpace=function(){return this.replace(/\s+/g,"")},String.prototype.noParenthesesInner=function(){return this.replace(/ *\([^)]*\) */g,"")},String.prototype.replaceAll=function(t,r,n){return this.replace(new RegExp(t.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),n?"gi":"g"),"string"==typeof r?r.replace(/\$/g,"$$$$"):r)},String.prototype.reduceWhiteSpace=function(){return this.replace(/\s+/g," ").replace(/^ /,"").replace(/ $/,"")},String.prototype.belongTo=function(t){return-1!==t.indexOf(this)},String.prototype.toInt=function(){var t=parseInt(this.replace(/\D/g,""),10);return 0/0===t&&(t=this.toASCII()),t},String.prototype.toASCII=function(t){return t?this.charCodeAt(t):this.split("").map(function(t){return t.charCodeAt(0)})},Array.prototype.ASCII=function(){var s="";return eval("s=String.fromCharCode("+this.join(",")+")"),s},String.prototype.toFloat=function(){return parseFloat(this)},String.prototype.toFloatx=function(){if(",".belongTo(this)){for(var t=this.replaceAll(",",".").split("."),r=t.shift(),n=0;n<t.length;n++)t[n]=t[n].replace(/\D/g,"");var e=r.replace(/\D/g,"")+"."+t.join("");return parseFloat(e,10)}return parseFloat(this,10)},String.prototype.removeFirst=function(){return this.substr(1)},String.prototype.endsWith=function(t){return-1!==this.indexOf(t,this.length-t.length)},String.prototype.sumInts=function(){for(var t=this.match(/([0-9]+)/g),r=0,n=0;n<t.length;n++)r+=parseInt(t[n]);return r},String.prototype.finishWith=function(t){return this.endsWith(t)},String.prototype.removeLast=function(t){return t?this.lastIndexOf(t)+t.length==this.length?this.substring(0,this.length-1):this.toString():this.substring(0,this.length-1)},String.prototype.startsWith=function(t){return 0===this.indexOf(t)},String.prototype.separateStringNumber=function(){return this.match(/\D+|\d+/g)},String.prototype.numbers=function(){return this.separateStringNumber().filter(function(t){return isFinite(t)})},String.prototype.stripTags=function(){return this.replace(/(<([^>]+)>)/gi,"")},Storage.prototype.setObj=function(t,r){return this.setItem(t,JSON.stringify(r))},Storage.prototype.getObj=function(t){return JSON.parse(this.getItem(t))},String.prototype.removeByTagName=function(t){if(t||(t="div"),t instanceof Array)for(var r,n=0;n<t.length;n++)r=t[n],this.replace(/<div\b[^<]*(?:(?!<\/div>)<[^<]*)*<\/div>/gi,"");return t=t.toLowerCase(),this.replace(/<div\b[^<]*(?:(?!<\/div>)<[^<]*)*<\/div>/gi,"")},String.prototype.contains=function(t){return-1!==this.indexOf(t)},String.prototype.capitalize=function(t){return t?this.split(" ").map(function(t){return t.capitalize()}).join(" "):this.charAt(0).toUpperCase()+this.slice(1)},Array.prototype.flatten=function(t){if(t){if(this.length>0){var r=this[0];r=r instanceof Array?r.flatten(!0):[r];var n=this.slice(1);return r.concat(n.flatten(!0))}return[].concat(this)}return[].concat.apply([],this)},Array.prototype.empty=function(){return 0===this.length},Array.prototype.isFinite=function(){return this.map(function(t){return isFinite(t)}).inject(!0,function(t,r){return t&&r})},Array.prototype.first=function(){return this.empty()?null:this[0]},Array.prototype.last=function(){return this.empty()?null:this[this.length-1]},Array.prototype.noSpace=function(){return this.map(function(t){return t.noSpace()})},Array.prototype.parseInt=function(){return this.map(function(t){return parseInt(t)})},Array.prototype.max=function(){return Math.max.apply(null,this)},Array.prototype.min=function(){return Math.min.apply(null,this)},Array.prototype.contains=function(t){for(var r=0;r<this.length;r++)if(this[r]===t)return!0;return!1},Array.prototype.random=function(){return this.length>=2?Math.floor(Math.random()*(this[1]-this[0]+1)+this[0]):void 0},Array.prototype.unique=function(){var t=[];for(var r in this.frequencies())"all"!==r&&t.push(r);return t},Array.prototype.remove=function(){for(var t,r,n=arguments,e=n.length;e&&this.length;)for(t=n[--e];-1!==(r=this.indexOf(t));)this.splice(r,1);return this},Array.prototype.isEmpty=function(){return 0===this.length},Array.prototype.isntEmpty=function(){return!this.isEmpty()},Array.prototype.average=function(){for(var t=0,r=0,n=0;n<this.length;n++)isFinite(this[n])&&(t+=parseFloat(this[n]),r++);return 0===r?0:t/r},Array.prototype.pushunique=function(t){return-1==this.indexOf(t)?this.push(t):this.length},Array.prototype.subarray=function(t,r){return r||(r=-1),this.slice(t,this.length+1- -1*r)},Array.prototype.toHtmlUL=function(t,r,n){if(!n)var n=function(t,r){return"<li"+r+">"+t+"</li>"};var e="<ul",i=[];t=t?' class ="'+t+'" ':"",r=r?' class ="'+r+'" ':"",e=e+t+">";for(var o=0;o<this.length;o++)i.push(n(this[o],r,o));return e+i.join("\n")+"</ul>"},Array.prototype.tojQueryUL=function(t,r){if(jQuery){if(!r)var r=function(t,r){return $(t).html(r)};var n=$("<ul />");jQuery.fn.attrs&&n.attrs(t);for(var e=0;e<this.length;e++)n.append(r("<li />",this[e],e));return n}},Array.prototype.frequencies=function(){for(var t=this.length,r={all:[]};t--;)r[this[t]]=r[this[t]]?++r[this[t]]:1;for(var t in r)r.hasOwnProperty(t)&&"all"!==t&&r.all.push([t,r[t]]);return r},Array.prototype.clean=function(){for(var t=[],r=0;r<this.length;r++)this[r]&&t.push(this[r]);return t},Array.prototype.pluck=function(t){return this.map(function(r){return r[t]})},Array.prototype.prefixed=function(t){for(var r=[],n=0;n<this.length;n++)r.push(t+this[n]);return r},Array.asObject=function(t){for(var r,n=[],e=JSON.stringify(t).removeFirst().removeLast().split(","),i=0;i<e.length;i++)r=e[i].split(":"),n[r[0].removeFirst().removeLast()]=r[1];return n},Array.prototype.inject=function(t,r){for(var n=t,e=0;e<this.length;)n=r.call(null,n,this[e]),e++;return n},Array.prototype.insert=function(t){return t=Math.min(t,this.length),arguments.length>1&&this.splice.apply(this,[t,0].concat([].pop.call(arguments)))&&this.insert.apply(this,arguments),this},Array.prototype.toJsonWith=function(t){return console.log("{"+this.mapWithIndex(function(r,n){return'"'+r+'":"'+t[n]+'"'}).join(",").replaceAll('"','"')+"}"),JSON.parse("{"+this.mapWithIndex(function(r,n){return'"'+r+'":"'+t[n]+'"'}).join(",").replaceAll('"','"')+"}")},Array.prototype.mapWithIndex=function(t){var r=[];if("function"==typeof t){for(var n=0;n<this.length;n++)r.push(t.apply(null,[this[n],n]));return r}return this},HTMLCanvasElement.prototype.relMouseCoords=function(t){var r=0,n=0,e=0,i=0,o=this;do r+=o.offsetLeft,n+=o.offsetTop;while(o=o.offsetParent);return e=t.pageX-r,i=t.pageY-n,e=Math.round(e*(this.width/this.offsetWidth)),i=Math.round(i*(this.height/this.offsetHeight)),{x:e,y:i}}}();
    (function(){Storage.prototype.removeAll=function(){var e=this;Object.keys(this).forEach(function(t){e.removeItem(t)})};Array.prototype.pushunique=function(e){if(this.map(function(t,n){return Object.equals(t,e)}).indexOf(true)===-1){this.push(e)}return this};String.prototype.count=function(e){return(this.length-this.replace(new RegExp(e,"g"),"").length)/e.length};setTimeout(function(){[].forEach.call(document.querySelectorAll("[spl-converter=dec2roman]"),function(e){if(parseInt(e.innerHTML)){e.innerHTML=parseInt(e.innerHTML).toRoman()}})},10);Object.equals=function(e,t){if(e===t)return true;if(!(e instanceof Object)||!(t instanceof Object))return false;if(e.constructor!==t.constructor)return false;for(var n in e){if(!e.hasOwnProperty(n))continue;if(!t.hasOwnProperty(n))return false;if(e[n]===t[n])continue;if(typeof e[n]!=="object")return false;if(!Object.equals(e[n],t[n]))return false}for(n in t){if(t.hasOwnProperty(n)&&!e.hasOwnProperty(n))return false}return true}})()
  
      }
     function SalatAwkat(e){var t={imsak:"Imsak",fajr:"Fajr",sunrise:"Sunrise",dhuhr:"Dhuhr",asr:"Asr",sunset:"Sunset",maghrib:"Maghrib",isha:"Isha",midnight:"Midnight"},n={MWL:{name:"Muslim World League",params:{fajr:18,isha:17}},ISNA:{name:"Islamic Society of North America (ISNA)",params:{fajr:15,isha:15}},Egypt:{name:"Egyptian General Authority of Survey",params:{fajr:19.5,isha:17.5}},Makkah:{name:"Umm Al-Qura University, Makkah",params:{fajr:18.5,isha:"90 min"}},Karachi:{name:"University of Islamic Sciences, Karachi",params:{fajr:18,isha:18}},Tehran:{name:"Institute of Geophysics, University of Tehran",params:{fajr:17.7,isha:14,maghrib:4.5,midnight:"Jafari"}},Jafari:{name:"Shia Ithna-Ashari, Leva Institute, Qum",params:{fajr:16,isha:14,maghrib:4,midnight:"Jafari"}}},r={maghrib:"0 min",midnight:"Standard"},i="MWL",s={imsak:"10 min",dhuhr:"0 min",asr:"Standard",highLats:"NightMiddle"},o="24h",u=["am","pm"],a="-----",f=1,l={},c,h,p,d,v;var m=r;for(var g in n){var y=n[g].params;for(var b in m)if(typeof y[b]=="undefined")y[b]=m[b]}i=n[e]?e:i;var y=n[i].params;for(var w in y)s[w]=y[w];for(var g in t)l[g]=0;return{setMethod:function(e){if(n[e]){this.adjust(n[e].params);i=e}},adjust:function(e){for(var t in e)s[t]=e[t]},tune:function(e){for(var t in e)l[t]=e[t]},getMethod:function(){return i},getSetting:function(){return s},getOffsets:function(){return l},getDefaults:function(){return n},getTimes:function(e,t,n,r,i){c=1*t[0];h=1*t[1];p=t[2]?1*t[2]:0;o=i||o;if(e.constructor===Date)e=[e.getFullYear(),e.getMonth()+1,e.getDate()];if(typeof n=="undefined"||n=="auto")n=this.getTimeZone(e);if(typeof r=="undefined"||r=="auto")r=this.getDst(e);d=1*n+(1*r?1:0);v=this.julian(e[0],e[1],e[2])-h/(15*24);return this.computeTimes()},getFormattedTime:function(e,t,n){if(isNaN(e))return a;if(t=="Float")return e;n=n||u;e=DMath.fixHour(e+.5/60);var r=Math.floor(e);var i=Math.floor((e-r)*60);var s=t=="12h"?n[r<12?0:1]:"";var o=t=="24h"?this.twoDigitsFormat(r):(r+12-1)%12+1;return o+":"+this.twoDigitsFormat(i)+(s?" "+s:"")},midDay:function(e){var t=this.sunPosition(v+e).equation;var n=DMath.fixHour(12-t);return n},sunAngleTime:function(e,t,n){var r=this.sunPosition(v+t).declination;var i=this.midDay(t);var s=1/15*DMath.arccos((-DMath.sin(e)-DMath.sin(r)*DMath.sin(c))/(DMath.cos(r)*DMath.cos(c)));return i+(n=="ccw"?-s:s)},asrTime:function(e,t){var n=this.sunPosition(v+t).declination;var r=-DMath.arccot(e+DMath.tan(Math.abs(c-n)));return this.sunAngleTime(r,t)},sunPosition:function(e){var t=e-2451545;var n=DMath.fixAngle(357.529+.98560028*t);var r=DMath.fixAngle(280.459+.98564736*t);var i=DMath.fixAngle(r+1.915*DMath.sin(n)+.02*DMath.sin(2*n));var s=1.00014-.01671*DMath.cos(n)-14e-5*DMath.cos(2*n);var o=23.439-3.6e-7*t;var u=DMath.arctan2(DMath.cos(o)*DMath.sin(i),DMath.cos(i))/15;var a=r/15-DMath.fixHour(u);var f=DMath.arcsin(DMath.sin(o)*DMath.sin(i));return{declination:f,equation:a}},julian:function(e,t,n){if(t<=2){e-=1;t+=12}var r=Math.floor(e/100);var i=2-r+Math.floor(r/4);var s=Math.floor(365.25*(e+4716))+Math.floor(30.6001*(t+1))+n+i-1524.5;return s},computePrayerTimes:function(e){e=this.dayPortion(e);var t=s;var n=this.sunAngleTime(this.eval(t.imsak),e.imsak,"ccw");var r=this.sunAngleTime(this.eval(t.fajr),e.fajr,"ccw");var i=this.sunAngleTime(this.riseSetAngle(),e.sunrise,"ccw");var o=this.midDay(e.dhuhr);var u=this.asrTime(this.asrFactor(t.asr),e.asr);var a=this.sunAngleTime(this.riseSetAngle(),e.sunset);var f=this.sunAngleTime(this.eval(t.maghrib),e.maghrib);var l=this.sunAngleTime(this.eval(t.isha),e.isha);return{imsak:n,fajr:r,sunrise:i,dhuhr:o,asr:u,sunset:a,maghrib:f,isha:l}},computeTimes:function(){var e={imsak:5,fajr:5,sunrise:6,dhuhr:12,asr:13,sunset:18,maghrib:18,isha:18};for(var t=1;t<=f;t++)e=this.computePrayerTimes(e);e=this.adjustTimes(e);e.midnight=s.midnight=="Jafari"?e.sunset+this.timeDiff(e.sunset,e.fajr)/2:e.sunset+this.timeDiff(e.sunset,e.sunrise)/2;e=this.tuneTimes(e);return this.modifyFormats(e)},adjustTimes:function(e){var t=s;for(var n in e)e[n]+=d-h/15;if(t.highLats!="None")e=this.adjustHighLats(e);if(this.isMin(t.imsak))e.imsak=e.fajr-this.eval(t.imsak)/60;if(this.isMin(t.maghrib))e.maghrib=e.sunset+this.eval(t.maghrib)/60;if(this.isMin(t.isha))e.isha=e.maghrib+this.eval(t.isha)/60;e.dhuhr+=this.eval(t.dhuhr)/60;return e},asrFactor:function(e){var t={Standard:1,Hanafi:2}[e];return t||this.eval(e)},riseSetAngle:function(){var e=.0347*Math.sqrt(p);return.833+e},tuneTimes:function(e){for(var t in e)e[t]+=l[t]/60;return e},modifyFormats:function(e){for(var t in e)e[t]=this.getFormattedTime(e[t],o);return e},adjustHighLats:function(e){var t=s;var n=this.timeDiff(e.sunset,e.sunrise);e.imsak=this.adjustHLTime(e.imsak,e.sunrise,this.eval(t.imsak),n,"ccw");e.fajr=this.adjustHLTime(e.fajr,e.sunrise,this.eval(t.fajr),n,"ccw");e.isha=this.adjustHLTime(e.isha,e.sunset,this.eval(t.isha),n);e.maghrib=this.adjustHLTime(e.maghrib,e.sunset,this.eval(t.maghrib),n);return e},adjustHLTime:function(e,t,n,r,i){var s=this.nightPortion(n,r);var o=i=="ccw"?this.timeDiff(e,t):this.timeDiff(t,e);if(isNaN(e)||o>s)e=t+(i=="ccw"?-s:s);return e},nightPortion:function(e,t){var n=s.highLats;var r=1/2;if(n=="AngleBased")r=1/60*e;if(n=="OneSeventh")r=1/7;return r*t},dayPortion:function(e){for(var t in e)e[t]/=24;return e},getTimeZone:function(e){var t=e[0];var n=this.gmtOffset([t,0,1]);var r=this.gmtOffset([t,6,1]);return Math.min(n,r)},getDst:function(e){return 1*(this.gmtOffset(e)!=this.getTimeZone(e))},gmtOffset:function(e){var t=new Date(e[0],e[1]-1,e[2],12,0,0,0);var n=t.toGMTString();var r=new Date(n.substring(0,n.lastIndexOf(" ")-1));var i=(t-r)/(1e3*60*60);return i},eval:function(e){return 1*(e+"").split(/[^0-9.+-]/)[0]},isMin:function(e){return(e+"").indexOf("min")!=-1},timeDiff:function(e,t){return DMath.fixHour(t-e)},twoDigitsFormat:function(e){return e<10?"0"+e:e}}}var DMath={dtr:function(e){return e*Math.PI/180},rtd:function(e){return e*180/Math.PI},sin:function(e){return Math.sin(this.dtr(e))},cos:function(e){return Math.cos(this.dtr(e))},tan:function(e){return Math.tan(this.dtr(e))},arcsin:function(e){return this.rtd(Math.asin(e))},arccos:function(e){return this.rtd(Math.acos(e))},arctan:function(e){return this.rtd(Math.atan(e))},arccot:function(e){return this.rtd(Math.atan(1/e))},arctan2:function(e,t){return this.rtd(Math.atan2(e,t))},fixAngle:function(e){return this.fix(e,360)},fixHour:function(e){return this.fix(e,24)},fix:function(e,t){e=e-t*Math.floor(e/t);return e<0?e+t:e}}
    var awkatSalat=new SalatAwkat();
    function addZero(length){
        var str=this;
        while(str.length<length){str='0'+str}
        return str;
    };
    
    
    _HijrahDate = function(tm) {
       // console.log(arguments);
        if (this.constructor == _HijrahDate) {
            this.cfg=proxy.cfg;
            if (arguments.length === 0) {
                proxy.constructor.void.call(this);
            }
            else if (arguments.length === 1) {
                if (typeof tm === 'string') {

                    proxy.constructor.string.call(this, tm)
                } else {
                 //   console.log(this.cfg.city);
                    proxy.constructor.int.call(this, tm)
                }
            } else if (arguments.length > 1 && arguments.length <= 7) {
                
                proxy.constructor.many.apply(this, Array.prototype.slice.call(arguments, 0));
            }
            return this;
        } else {
            if(typeof tm ==='object'){
                var tmp=-1;
                var tz=null;
                for(var p in tm){
                    proxy.cfg[p]=tm[p];
                    tmp=_HijrahDate._.db.cfgFieldsEquivalences[0].indexOf(p);
                    if(tmp !==-1){
                        proxy.cfg[_HijrahDate._.db.cfgFieldsEquivalences[0][tmp]]=tm[p]
                    }
                    if(p==='city' &&( proxy.cfg[p] !=='Mecca')){
                        _HijrahDate.setCity(proxy.cfg[p]);
                        
                    }
                }
            }  else{
               return new _HijrahDate();    
            }
            
        }
    };
    
    _HijrahDate.prototype.tomorrow=function(){
        return new _HijrahDate(parseInt(this.time+_HijrahDate.DAY));
    };
    _HijrahDate.prototype.yesterday=function(){
        return new _HijrahDate(praseIn(this.time-_HijrahDate.DAY));
    };
     _HijrahDate.prototype.utcToString=function(){
         if(this.hours===this.UTCHours){return ''}
         if(this.hours<this.UTCHours){return (this.hours-this.UTCHours).toString()}
         else{return '+'+(this.hours-this.UTCHours).toString()}
      
     }
     _HijrahDate.prototype.toString=function(){
         return this.fullyear+'/'+this.month+'/'+this.date+' '+this.hours+':'+this.minutes+':'+this.secondes+' Mecca, Time zone'+this.utcToString()+'(MTZ)'
     } 
     _HijrahDate.prototype.toSalibiDate=function(){
         return this.proxy;
     };
     
    Date.prototype.toHijrahDate=function(){
         var toR=proxy.fromSalibi(this);
         toR.hours=this.getHours();
         toR.minutes=this.getMinutes();
         toR.secondes=this.getSeconds();
         toR.milliseconds=this.getMilliseconds();
         toR.UTCHours=this.getUTCHours()+3;
         toR.UTCMinutes=this.getUTCMinutes();
         toR.proxy=this;
         toR.cfg=proxy.cfg;
         return toR;
    } ;
    _HijrahDate['ثانية']=1000;
    _HijrahDate['دقيقة']=60*1000;
    _HijrahDate['ساعة']=60*60*1000;
    _HijrahDate.SECONDE=1000;
    _HijrahDate.MINUTE=60*1000;
    _HijrahDate.HOUR=60*60*1000;
    _HijrahDate.DAY=24*60*60*1000;
    _HijrahDate['يوم']=24*60*60*1000;
    _HijrahDate['أسبوع']=7*_HijrahDate.DAY;
    _HijrahDate.WEEK=7*_HijrahDate.DAY;
    

    _HijrahDate.prototype.valueOf=function(){return this.time};
    
    _HijrahDate.prototype.format=function(pattern,lang){
        if(!lang){lang=proxy.cfg.lang}
       return pattern.replace('yyyy',this.fullyear).replace('MMM',_HijrahDate._.db.months[lang][this.month-1]).replace('MM',addZero.call(this.month,2)).replace('dd',addZero.call(this.date,2)).replace('EEEE',_HijrahDate._.db.week[lang][this.proxy.getDay()]).replace('EEE',_HijrahDate._.db.weekmin[lang][this.proxy.getDay()]).replace('EE',_HijrahDate._.db.week[lang][this.proxy.getDay()]).replace('E',_HijrahDate._.db.week[lang][this.proxy.getDay()]).replace('hh',addZero.call(this.hours,2)).replace('mm',addZero.call(this.minutes,2)).replace('ss',addZero.call(this.secondes,2)).replace('SSS',addZero.call(this.milliseconds,3))
        
    }
    _HijrahDate._ = {};
    


    _HijrahDate._.db = {};
    _HijrahDate._.db.months = {ar: ['محرم', 'صفر', 'ربيع أول', 'ربيع الآخر', 'جمادى أولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'],
        en: ["Muharram", "Safar", "Rabi'ul Awwal", "Rabi'ul Akhir",
            "Jumadal Ula", "Jumadal Akhira", "Rajab", "Sha'ban",
            "Ramadan", "Shawwal", "Dhul Qa'ada", "Dhul Hijja"]
    };
    
    _HijrahDate._.db.week = {ar: ['الأحد', 'الاثنين', 'الثلاثاء', 'الإربغاء', 'الخميس', 'الجمعة', 'السبت'], en: ['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Tuesday', 'Friday', 'Saturday']}
    _HijrahDate._.db.weekmin = {ar: ['أح', 'اث', 'ثلا', 'ربع', 'خمس', 'جمع', 'سبت'], en: ['Sun', 'Mon', 'Thur', 'Wed', 'Tue', 'Fri', 'Sat']}
    _HijrahDate._.db.cities=[]
    /**
    * Array of {TZ:[arr2]}
    * arr2=[ISO3166,coord,comment,utcOffset,utcDSToffset,notes]
    */
    _HijrahDate._.db.tz=[{"Africa/Abidjan":["CI","+0519-00402","","+00:00","+00:00",""]},{"Africa/Accra":["GH","+0533-00013","","+00:00","+00:00",""]},{"Africa/Addis_Ababa":["ET","+0902+03842","","+03:00","+03:00",""]},{"Africa/Algiers":["DZ","+3647+00303","","+01:00","+01:00",""]},{"Africa/Asmara":["ER","+1520+03853","","+03:00","+03:00",""]},{"Africa/Asmera":["","","","+03:00","+03:00","Link to Africa/Asmara"]},{"Africa/Bamako":["ML","+1239-00800","","+00:00","+00:00",""]},{"Africa/Bangui":["CF","+0422+01835","","+01:00","+01:00",""]},{"Africa/Banjul":["GM","+1328-01639","","+00:00","+00:00",""]},{"Africa/Bissau":["GW","+1151-01535","","+00:00","+00:00",""]},{"Africa/Blantyre":["MW","-1547+03500","","+02:00","+02:00",""]},{"Africa/Brazzaville":["CG","-0416+01517","","+01:00","+01:00",""]},{"Africa/Bujumbura":["BI","-0323+02922","","+02:00","+02:00",""]},{"Africa/Cairo":["EG","+3003+03115","","+02:00","+03:00",""]},{"Africa/Casablanca":["MA","+3339-00735","","+00:00","+01:00",""]},{"Africa/Ceuta":["ES","+3553-00519","Ceuta & Melilla","+01:00","+02:00",""]},{"Africa/Conakry":["GN","+0931-01343","","+00:00","+00:00",""]},{"Africa/Dakar":["SN","+1440-01726","","+00:00","+00:00",""]},{"Africa/Dar_es_Salaam":["TZ","-0648+03917","","+03:00","+03:00",""]},{"Africa/Djibouti":["DJ","+1136+04309","","+03:00","+03:00",""]},{"Africa/Douala":["CM","+0403+00942","","+01:00","+01:00",""]},{"Africa/El_Aaiun":["EH","+2709-01312","","+00:00","+01:00","Assuming it follows Morocco DST rules."]},{"Africa/Freetown":["SL","+0830-01315","","+00:00","+00:00",""]},{"Africa/Gaborone":["BW","-2439+02555","","+02:00","+02:00",""]},{"Africa/Harare":["ZW","-1750+03103","","+02:00","+02:00",""]},{"Africa/Johannesburg":["ZA","-2615+02800","","+02:00","+02:00",""]},{"Africa/Juba":["SS","+0451+03136","","+03:00","+03:00","Link to Africa/Khartoum"]},{"Africa/Kampala":["UG","+0019+03225","","+03:00","+03:00",""]},{"Africa/Khartoum":["SD","+1536+03232","","+03:00","+03:00",""]},{"Africa/Kigali":["RW","-0157+03004","","+02:00","+02:00",""]},{"Africa/Kinshasa":["CD","-0418+01518","west Dem. Rep. of Congo","+01:00","+01:00",""]},{"Africa/Lagos":["NG","+0627+00324","","+01:00","+01:00",""]},{"Africa/Libreville":["GA","+0023+00927","","+01:00","+01:00",""]},{"Africa/Lome":["TG","+0608+00113","","+00:00","+00:00",""]},{"Africa/Luanda":["AO","-0848+01314","","+01:00","+01:00",""]},{"Africa/Lubumbashi":["CD","-1140+02728","east Dem. Rep. of Congo","+02:00","+02:00",""]},{"Africa/Lusaka":["ZM","-1525+02817","","+02:00","+02:00",""]},{"Africa/Malabo":["GQ","+0345+00847","","+01:00","+01:00",""]},{"Africa/Maputo":["MZ","-2558+03235","","+02:00","+02:00",""]},{"Africa/Maseru":["LS","-2928+02730","","+02:00","+02:00",""]},{"Africa/Mbabane":["SZ","-2618+03106","","+02:00","+02:00",""]},{"Africa/Mogadishu":["SO","+0204+04522","","+03:00","+03:00",""]},{"Africa/Monrovia":["LR","+0618-01047","","+00:00","+00:00",""]},{"Africa/Nairobi":["KE","-0117+03649","","+03:00","+03:00",""]},{"Africa/Ndjamena":["TD","+1207+01503","","+01:00","+01:00",""]},{"Africa/Niamey":["NE","+1331+00207","","+01:00","+01:00",""]},{"Africa/Nouakchott":["MR","+1806-01557","","+00:00","+00:00",""]},{"Africa/Ouagadougou":["BF","+1222-00131","","+00:00","+00:00",""]},{"Africa/Porto-Novo":["BJ","+0629+00237","","+01:00","+01:00",""]},{"Africa/Sao_Tome":["ST","+0020+00644","","+00:00","+00:00",""]},{"Africa/Timbuktu":["","","","+00:00","+00:00","Link to Africa/Bamako"]},{"Africa/Tripoli":["LY","+3254+01311","","+01:00","+02:00","Assume revert to permanent UTC+2 rule before 2012."]},{"Africa/Tunis":["TN","+3648+01011","","+01:00","+01:00",""]},{"Africa/Windhoek":["NA","-2234+01706","","+01:00","+02:00",""]},{"America/Adak":["US","+515248-1763929","Aleutian Islands","−10:00","−09:00",""]},{"America/Anchorage":["US","+611305-1495401","Alaska Time","−09:00","−08:00",""]},{"America/Anguilla":["AI","+1812-06304","","−04:00","−04:00",""]},{"America/Antigua":["AG","+1703-06148","","−04:00","−04:00",""]},{"America/Araguaina":["BR","-0712-04812","Tocantins","−03:00","−03:00",""]},{"America/Argentina/Buenos_Aires":["AR","-3436-05827","Buenos Aires (BA, CF)","−03:00","−03:00",""]},{"America/Argentina/Catamarca":["AR","-2828-06547","Catamarca (CT), Chubut (CH)","−03:00","−03:00",""]},{"America/Argentina/ComodRivadavia":["","","","−03:00","−03:00","Link to America/Argentina/Catamarca"]},{"America/Argentina/Cordoba":["AR","-3124-06411","most locations (CD, CC, CR, ER, FO, MN, SE, SF)","−03:00","−03:00",""]},{"America/Argentina/Jujuy":["AR","-2411-06518","Jujuy (JY)","−03:00","−03:00",""]},{"America/Argentina/La_Rioja":["AR","-2926-06651","La Rioja (LR)","−03:00","−03:00",""]},{"America/Argentina/Mendoza":["AR","-3253-06849","Mendoza (MZ)","−03:00","−03:00",""]},{"America/Argentina/Rio_Gallegos":["AR","-5138-06913","Santa Cruz (SC)","−03:00","−03:00",""]},{"America/Argentina/Salta":["AR","-2447-06525","(SA, LP, NQ, RN)","−03:00","−03:00",""]},{"America/Argentina/San_Juan":["AR","-3132-06831","San Juan (SJ)","−03:00","−03:00",""]},{"America/Argentina/San_Luis":["AR","-3319-06621","San Luis (SL)","−03:00","−03:00",""]},{"America/Argentina/Tucuman":["AR","-2649-06513","Tucuman (TM)","−03:00","−03:00",""]},{"America/Argentina/Ushuaia":["AR","-5448-06818","Tierra del Fuego (TF)","−03:00","−03:00",""]},{"America/Aruba":["AW","+1230-06958","","−04:00","−04:00",""]},{"America/Asuncion":["PY","-2516-05740","","−04:00","−03:00",""]},{"America/Atikokan":["CA","+484531-0913718","Eastern Standard Time - Atikokan, Ontario and Southampton I, Nunavut","−05:00","−05:00",""]},{"America/Atka":["","","","−10:00","−09:00","Link to America/Adak"]},{"America/Bahia":["BR","-1259-03831","Bahia","−03:00","−02:00",""]},{"America/Bahia_Banderas":["MX","+2048-10515","Mexican Central Time - Bahia de Banderas","−06:00","−05:00",""]},{"America/Barbados":["BB","+1306-05937","","−04:00","−04:00",""]},{"America/Belem":["BR","-0127-04829","Amapa, E Para","−03:00","−03:00",""]},{"America/Belize":["BZ","+1730-08812","","−06:00","−06:00",""]},{"America/Blanc-Sablon":["CA","+5125-05707","Atlantic Standard Time - Quebec - Lower North Shore","−04:00","−04:00",""]},{"America/Boa_Vista":["BR","+0249-06040","Roraima","−04:00","−04:00",""]},{"America/Bogota":["CO","+0436-07405","","−05:00","−05:00",""]},{"America/Boise":["US","+433649-1161209","Mountain Time - south Idaho & east Oregon","−07:00","−06:00",""]},{"America/Buenos_Aires":["","","","−03:00","−03:00","Link to America/Argentina/Buenos_Aires"]},{"America/Cambridge_Bay":["CA","+690650-1050310","Mountain Time - west Nunavut","−07:00","−06:00",""]},{"America/Campo_Grande":["BR","-2027-05437","Mato Grosso do Sul","−04:00","−03:00",""]},{"America/Cancun":["MX","+2105-08646","Central Time - Quintana Roo","−06:00","−05:00",""]},{"America/Caracas":["VE","+1030-06656","","−04:30","−04:30",""]},{"America/Catamarca":["","","","−03:00","−03:00","Link to America/Argentina/Catamarca"]},{"America/Cayenne":["GF","+0456-05220","","−03:00","−03:00",""]},{"America/Cayman":["KY","+1918-08123","","−05:00","−05:00",""]},{"America/Chicago":["US","+415100-0873900","Central Time","−06:00","−05:00",""]},{"America/Chihuahua":["MX","+2838-10605","Mexican Mountain Time - Chihuahua away from US border","−07:00","−06:00",""]},{"America/Coral_Harbour":["","","","−05:00","−05:00","Link to America/Atikokan"]},{"America/Cordoba":["","","","−03:00","−03:00","Link to America/Argentina/Cordoba"]},{"America/Costa_Rica":["CR","+0956-08405","","−06:00","−06:00",""]},{"America/Creston":["CA","+4906-11631","Mountain Standard Time - Creston, British Columbia","−07:00","−07:00",""]},{"America/Cuiaba":["BR","-1535-05605","Mato Grosso","−04:00","−03:00",""]},{"America/Curacao":["CW","+1211-06900","","−04:00","−04:00",""]},{"America/Danmarkshavn":["GL","+7646-01840","east coast, north of Scoresbysund","+00:00","+00:00",""]},{"America/Dawson":["CA","+6404-13925","Pacific Time - north Yukon","−08:00","−07:00",""]},{"America/Dawson_Creek":["CA","+5946-12014","Mountain Standard Time - Dawson Creek & Fort Saint John, British Columbia","−07:00","−07:00",""]},{"America/Denver":["US","+394421-1045903","Mountain Time","−07:00","−06:00",""]},{"America/Detroit":["US","+421953-0830245","Eastern Time - Michigan - most locations","−05:00","−04:00",""]},{"America/Dominica":["DM","+1518-06124","","−04:00","−04:00",""]},{"America/Edmonton":["CA","+5333-11328","Mountain Time - Alberta, east British Columbia & west Saskatchewan","−07:00","−06:00",""]},{"America/Eirunepe":["BR","-0640-06952","W Amazonas","−05:00","−05:00",""]},{"America/El_Salvador":["SV","+1342-08912","","−06:00","−06:00",""]},{"America/Ensenada":["","","","−08:00","−07:00","Link to America/Tijuana"]},{"America/Fort_Wayne":["","","","−05:00","−04:00","Link to America/Indiana/Indianapolis"]},{"America/Fortaleza":["BR","-0343-03830","NE Brazil (MA, PI, CE, RN, PB)","−03:00","−03:00",""]},{"America/Glace_Bay":["CA","+4612-05957","Atlantic Time - Nova Scotia - places that did not observe DST 1966-1971","−04:00","−03:00",""]},{"America/Godthab":["GL","+6411-05144","most locations","−03:00","−02:00",""]},{"America/Goose_Bay":["CA","+5320-06025","Atlantic Time - Labrador - most locations","−04:00","−03:00",""]},{"America/Grand_Turk":["TC","+2128-07108","","−05:00","−04:00",""]},{"America/Grenada":["GD","+1203-06145","","−04:00","−04:00",""]},{"America/Guadeloupe":["GP","+1614-06132","","−04:00","−04:00",""]},{"America/Guatemala":["GT","+1438-09031","","−06:00","−06:00",""]},{"America/Guayaquil":["EC","-0210-07950","mainland","−05:00","−05:00",""]},{"America/Guyana":["GY","+0648-05810","","−04:00","−04:00",""]},{"America/Halifax":["CA","+4439-06336","Atlantic Time - Nova Scotia (most places), PEI","−04:00","−03:00",""]},{"America/Havana":["CU","+2308-08222","","−05:00","−04:00",""]},{"America/Hermosillo":["MX","+2904-11058","Mountain Standard Time - Sonora","−07:00","−07:00",""]},{"America/Indiana/Indianapolis":["US","+394606-0860929","Eastern Time - Indiana - most locations","−05:00","−04:00",""]},{"America/Indiana/Knox":["US","+411745-0863730","Central Time - Indiana - Starke County","−06:00","−05:00",""]},{"America/Indiana/Marengo":["US","+382232-0862041","Eastern Time - Indiana - Crawford County","−05:00","−04:00",""]},{"America/Indiana/Petersburg":["US","+382931-0871643","Eastern Time - Indiana - Pike County","−05:00","−04:00",""]},{"America/Indiana/Tell_City":["US","+375711-0864541","Central Time - Indiana - Perry County","−06:00","−05:00",""]},{"America/Indiana/Valparaiso":["US","+414761-0870569","Central Time - Indiana - Porter County","−06:00","−05:00",""]},{"America/Indiana/Vevay":["US","+384452-0850402","Eastern Time - Indiana - Switzerland County","−05:00","−04:00",""]},{"America/Indiana/Vincennes":["US","+384038-0873143","Eastern Time - Indiana - Daviess, Dubois, Knox & Martin Counties","−05:00","−04:00",""]},{"America/Indiana/Winamac":["US","+410305-0863611","Eastern Time - Indiana - Pulaski County","−05:00","−04:00",""]},{"America/Indianapolis":["","","","−05:00","−04:00","Link to America/Indiana/Indianapolis"]},{"America/Inuvik":["CA","+682059-1334300","Mountain Time - west Northwest Territories","−07:00","−06:00",""]},{"America/Iqaluit":["CA","+6344-06828","Eastern Time - east Nunavut - most locations","−05:00","−04:00",""]},{"America/Jamaica":["JM","+1800-07648","","−05:00","−05:00",""]},{"America/Jujuy":["","","","−03:00","−03:00","Link to America/Argentina/Jujuy"]},{"America/Juneau":["US","+581807-1342511","Alaska Time - Alaska panhandle","−09:00","−08:00",""]},{"America/Kentucky/Louisville":["US","+381515-0854534","Eastern Time - Kentucky - Louisville area","−05:00","−04:00",""]},{"America/Kentucky/Monticello":["US","+364947-0845057","Eastern Time - Kentucky - Wayne County","−05:00","−04:00",""]},{"America/Knox_IN":["","","","−06:00","−05:00","Link to America/Indiana/Knox"]},{"America/Kralendijk":["BQ","+120903-0681636","","−04:00","−04:00","Link to America/Curacao"]},{"America/La_Paz":["BO","-1630-06809","","−04:00","−04:00",""]},{"America/Lima":["PE","-1203-07703","","−05:00","−05:00",""]},{"America/Los_Angeles":["US","+340308-1181434","Pacific Time","−08:00","−07:00",""]},{"America/Louisville":["","","","−05:00","−04:00","Link to America/Kentucky/Louisville"]},{"America/Lower_Princes":["SX","+180305-0630250","","−04:00","−04:00","Link to America/Curacao"]},{"America/Maceio":["BR","-0940-03543","Alagoas, Sergipe","−03:00","−03:00",""]},{"America/Managua":["NI","+1209-08617","","−06:00","−06:00",""]},{"America/Manaus":["BR","-0308-06001","E Amazonas","−04:00","−04:00",""]},{"America/Marigot":["MF","+1804-06305","","−04:00","−04:00","Link to America/Guadeloupe"]},{"America/Martinique":["MQ","+1436-06105","","−04:00","−04:00",""]},{"America/Matamoros":["MX","+2550-09730","US Central Time - Coahuila, Durango, Nuevo Leon, Tamaulipas near US border","−06:00","−05:00",""]},{"America/Mazatlan":["MX","+2313-10625","Mountain Time - S Baja, Nayarit, Sinaloa","−07:00","−06:00",""]},{"America/Mendoza":["","","","−03:00","−03:00","Link to America/Argentina/Mendoza"]},{"America/Menominee":["US","+450628-0873651","Central Time - Michigan - Dickinson, Gogebic, Iron & Menominee Counties","−06:00","−05:00",""]},{"America/Merida":["MX","+2058-08937","Central Time - Campeche, Yucatan","−06:00","−05:00",""]},{"America/Metlakatla":["US","+550737-1313435","Metlakatla Time - Annette Island","−08:00","−08:00",""]},{"America/Mexico_City":["MX","+1924-09909","Central Time - most locations","−06:00","−05:00",""]},{"America/Miquelon":["PM","+4703-05620","","−03:00","−02:00",""]},{"America/Moncton":["CA","+4606-06447","Atlantic Time - New Brunswick","−04:00","−03:00",""]},{"America/Monterrey":["MX","+2540-10019","Mexican Central Time - Coahuila, Durango, Nuevo Leon, Tamaulipas away from US border","−06:00","−05:00",""]},{"America/Montevideo":["UY","-3453-05611","","−03:00","−02:00",""]},{"America/Montreal":["CA","+4531-07334","Eastern Time - Quebec - most locations","−05:00","−04:00",""]},{"America/Montserrat":["MS","+1643-06213","","−04:00","−04:00",""]},{"America/Nassau":["BS","+2505-07721","","−05:00","−04:00",""]},{"America/New_York":["US","+404251-0740023","Eastern Time","−05:00","−04:00",""]},{"America/Nipigon":["CA","+4901-08816","Eastern Time - Ontario & Quebec - places that did not observe DST 1967-1973","−05:00","−04:00",""]},{"America/Nome":["US","+643004-1652423","Alaska Time - west Alaska","−09:00","−08:00",""]},{"America/Noronha":["BR","-0351-03225","Atlantic islands","−02:00","−02:00",""]},{"America/North_Dakota/Beulah":["US","+471551-1014640","Central Time - North Dakota - Mercer County","−06:00","−05:00",""]},{"America/North_Dakota/Center":["US","+470659-1011757","Central Time - North Dakota - Oliver County","−06:00","−05:00",""]},{"America/North_Dakota/New_Salem":["US","+465042-1012439","Central Time - North Dakota - Morton County (except Mandan area)","−06:00","−05:00",""]},{"America/Ojinaga":["MX","+2934-10425","US Mountain Time - Chihuahua near US border","−07:00","−06:00",""]},{"America/Panama":["PA","+0858-07932","","−05:00","−05:00",""]},{"America/Pangnirtung":["CA","+6608-06544","Eastern Time - Pangnirtung, Nunavut","−05:00","−04:00",""]},{"America/Paramaribo":["SR","+0550-05510","","−03:00","−03:00",""]},{"America/Phoenix":["US","+332654-1120424","Mountain Standard Time - Arizona (except Navajo)","−07:00","−07:00",""]},{"America/Port_of_Spain":["TT","+1039-06131","","−04:00","−04:00",""]},{"America/Port-au-Prince":["HT","+1832-07220","","−05:00","−04:00",""]},{"America/Porto_Acre":["","","","−05:00","−05:00","Link to America/Rio_Branco"]},{"America/Porto_Velho":["BR","-0846-06354","Rondonia","−04:00","−04:00",""]},{"America/Puerto_Rico":["PR","+182806-0660622","","−04:00","−04:00",""]},{"America/Rainy_River":["CA","+4843-09434","Central Time - Rainy River & Fort Frances, Ontario","−06:00","−05:00",""]},{"America/Rankin_Inlet":["CA","+624900-0920459","Central Time - central Nunavut","−06:00","−05:00",""]},{"America/Recife":["BR","-0803-03454","Pernambuco","−03:00","−03:00",""]},{"America/Regina":["CA","+5024-10439","Central Standard Time - Saskatchewan - most locations","−06:00","−06:00",""]},{"America/Resolute":["CA","+744144-0944945","Central Standard Time - Resolute, Nunavut","−06:00","−05:00",""]},{"America/Rio_Branco":["BR","-0958-06748","Acre","−05:00","",""]},{"America/Rosario":["","","","−03:00","−03:00","Link to America/Argentina/Cordoba"]},{"America/Santa_Isabel":["MX","+3018-11452","Mexican Pacific Time - Baja California away from US border","−08:00","−07:00",""]},{"America/Santarem":["BR","-0226-05452","W Para","−03:00","−03:00",""]},{"America/Santiago":["CL","-3327-07040","most locations","−04:00","−03:00",""]},{"America/Santo_Domingo":["DO","+1828-06954","","−04:00","−04:00",""]},{"America/Sao_Paulo":["BR","-2332-04637","S & SE Brazil (GO, DF, MG, ES, RJ, SP, PR, SC, RS)","−03:00","−02:00",""]},{"America/Scoresbysund":["GL","+7029-02158","Scoresbysund / Ittoqqortoormiit","−01:00","+00:00",""]},{"America/Shiprock":["US","+364708-1084111","Mountain Time - Navajo","−07:00","−06:00","Link to America/Denver"]},{"America/Sitka":["US","+571035-1351807","Alaska Time - southeast Alaska panhandle","−09:00","−08:00",""]},{"America/St_Barthelemy":["BL","+1753-06251","","−04:00","−04:00","Link to America/Guadeloupe"]},{"America/St_Johns":["CA","+4734-05243","Newfoundland Time, including SE Labrador","−03:30","−02:30",""]},{"America/St_Kitts":["KN","+1718-06243","","−04:00","−04:00",""]},{"America/St_Lucia":["LC","+1401-06100","","−04:00","−04:00",""]},{"America/St_Thomas":["VI","+1821-06456","","−04:00","−04:00",""]},{"America/St_Vincent":["VC","+1309-06114","","−04:00","−04:00",""]},{"America/Swift_Current":["CA","+5017-10750","Central Standard Time - Saskatchewan - midwest","−06:00","−06:00",""]},{"America/Tegucigalpa":["HN","+1406-08713","","−06:00","−06:00",""]},{"America/Thule":["GL","+7634-06847","Thule / Pituffik","−04:00","−03:00",""]},{"America/Thunder_Bay":["CA","+4823-08915","Eastern Time - Thunder Bay, Ontario","−05:00","−04:00",""]},{"America/Tijuana":["MX","+3232-11701","US Pacific Time - Baja California near US border","−08:00","−07:00",""]},{"America/Toronto":["CA","+4339-07923","Eastern Time - Ontario & Quebec - most locations","−05:00","−04:00",""]},{"America/Tortola":["VG","+1827-06437","","−04:00","−04:00",""]},{"America/Vancouver":["CA","+4916-12307","Pacific Time - west British Columbia","−08:00","−07:00",""]},{"America/Virgin":["","","","−04:00","−04:00","Link to America/St_Thomas"]},{"America/Whitehorse":["CA","+6043-13503","Pacific Time - south Yukon","−08:00","−07:00",""]},{"America/Winnipeg":["CA","+4953-09709","Central Time - Manitoba & west Ontario","−06:00","−05:00",""]},{"America/Yakutat":["US","+593249-1394338","Alaska Time - Alaska panhandle neck","−09:00","−08:00",""]},{"America/Yellowknife":["CA","+6227-11421","Mountain Time - central Northwest Territories","−07:00","−06:00",""]},{"Antarctica/Casey":["AQ","-6617+11031","Casey Station, Bailey Peninsula","+11:00","+08:00",""]},{"Antarctica/Davis":["AQ","-6835+07758","Davis Station, Vestfold Hills","+05:00","+07:00",""]},{"Antarctica/DumontDUrville":["AQ","-6640+14001","Dumont-d'Urville Station, Terre Adelie","+10:00","+10:00",""]},{"Antarctica/Macquarie":["AQ","-5430+15857","Macquarie Island","+11:00","+11:00",""]},{"Antarctica/Mawson":["AQ","-6736+06253","Mawson Station, Holme Bay","+05:00","+05:00",""]},{"Antarctica/McMurdo":["AQ","-7750+16636","McMurdo, South Pole, Scott (New Zealand time)","+12:00","+13:00","Link to Pacific/Auckland"]},{"Antarctica/Palmer":["AQ","-6448-06406","Palmer Station, Anvers Island","−04:00","−03:00",""]},{"Antarctica/Rothera":["AQ","-6734-06808","Rothera Station, Adelaide Island","−03:00","−03:00",""]},{"Antarctica/South_Pole":["AQ","-9000+00000","Amundsen-Scott Station, South Pole","+12:00","+13:00","Link to Pacific/Auckland"]},{"Antarctica/Syowa":["AQ","-690022+0393524","Syowa Station, E Ongul I","+03:00","+03:00",""]},{"Antarctica/Troll":["AQ","-720041+0023206","Troll Station, Queen Maud Land","+00:00","+02:00","DST offset approximated, as parsing actual rules require zic from tzcode 2014b or later."]},{"Antarctica/Vostok":["AQ","-7824+10654","Vostok Station, Lake Vostok","+06:00","+06:00",""]},{"Arctic/Longyearbyen":["SJ","+7800+01600","","+01:00","+02:00","Link to Europe/Oslo"]},{"Asia/Aden":["YE","+1245+04512","","+03:00","+03:00",""]},{"Asia/Almaty":["KZ","+4315+07657","most locations","+06:00","+06:00",""]},{"Asia/Amman":["JO","+3157+03556","","+02:00","+03:00",""]},{"Asia/Anadyr":["RU","+6445+17729","Moscow+09 - Bering Sea","+12:00","+12:00",""]},{"Asia/Aqtau":["KZ","+4431+05016","Atyrau (Atirau, Gur'yev), Mangghystau (Mankistau)","+05:00","+05:00",""]},{"Asia/Aqtobe":["KZ","+5017+05710","Aqtobe (Aktobe)","+05:00","+05:00",""]},{"Asia/Ashgabat":["TM","+3757+05823","","+05:00","+05:00",""]},{"Asia/Ashkhabad":["","","","+05:00","+05:00","Link to Asia/Ashgabat"]},{"Asia/Baghdad":["IQ","+3321+04425","","+03:00","+03:00",""]},{"Asia/Bahrain":["BH","+2623+05035","","+03:00","+03:00",""]},{"Asia/Baku":["AZ","+4023+04951","","+04:00","+05:00",""]},{"Asia/Bangkok":["TH","+1345+10031","","+07:00","+07:00",""]},{"Asia/Beirut":["LB","+3353+03530","","+02:00","+03:00",""]},{"Asia/Bishkek":["KG","+4254+07436","","+06:00","+06:00",""]},{"Asia/Brunei":["BN","+0456+11455","","+08:00","+08:00",""]},{"Asia/Calcutta":["","","","+05:30","+05:30","Link to Asia/Kolkata"]},{"Asia/Choibalsan":["MN","+4804+11430","Dornod, Sukhbaatar","+08:00","+08:00",""]},{"Asia/Chongqing":["CN","+2934+10635","central China - Sichuan, Yunnan, Guangxi, Shaanxi, Guizhou, etc.","+08:00","+08:00","Covering historic Kansu-Szechuan time zone."]},{"Asia/Chungking":["","","","+08:00","+08:00","Link to Asia/Chongqing"]},{"Asia/Colombo":["LK","+0656+07951","","+05:30","+05:30",""]},{"Asia/Dacca":["","","","+06:00","+06:00","Link to Asia/Dhaka"]},{"Asia/Damascus":["SY","+3330+03618","","+02:00","+03:00",""]},{"Asia/Dhaka":["BD","+2343+09025","","+06:00","+06:00",""]},{"Asia/Dili":["TL","-0833+12535","","+09:00","+09:00",""]},{"Asia/Dubai":["AE","+2518+05518","","+04:00","+04:00",""]},{"Asia/Dushanbe":["TJ","+3835+06848","","+05:00","+05:00",""]},{"Asia/Gaza":["PS","+3130+03428","Gaza Strip","+02:00","+03:00",""]},{"Asia/Harbin":["CN","+4545+12641","Heilongjiang (except Mohe), Jilin","+08:00","+08:00","Covering historic Changpai time zone."]},{"Asia/Hebron":["PS","+313200+0350542","West Bank","+02:00","+03:00",""]},{"Asia/Ho_Chi_Minh":["VN","+1045+10640","","+07:00","+07:00",""]},{"Asia/Hong_Kong":["HK","+2217+11409","","+08:00","+08:00",""]},{"Asia/Hovd":["MN","+4801+09139","Bayan-Olgiy, Govi-Altai, Hovd, Uvs, Zavkhan","+07:00","+07:00",""]},{"Asia/Irkutsk":["RU","+5216+10420","Moscow+05 - Lake Baikal","+08:00","+08:00",""]},{"Asia/Istanbul":["","","","+02:00","+03:00","Link to Europe/Istanbul"]},{"Asia/Jakarta":["ID","-0610+10648","Java & Sumatra","+07:00","+07:00",""]},{"Asia/Jayapura":["ID","-0232+14042","west New Guinea (Irian Jaya) & Malukus (Moluccas)","+09:00","+09:00",""]},{"Asia/Jerusalem":["IL","+3146+03514","","+02:00","+03:00",""]},{"Asia/Kabul":["AF","+3431+06912","","+04:30","+04:30",""]},{"Asia/Kamchatka":["RU","+5301+15839","Moscow+09 - Kamchatka","+12:00","+12:00",""]},{"Asia/Karachi":["PK","+2452+06703","","+05:00","+05:00",""]},{"Asia/Kashgar":["CN","+3929+07559","west Tibet & Xinjiang","+08:00","+08:00","Covering historic Kunlun time zone."]},{"Asia/Kathmandu":["NP","+2743+08519","","+05:45","+05:45",""]},{"Asia/Katmandu":["","","","+05:45","+05:45","Link to Asia/Kathmandu"]},{"Asia/Khandyga":["RU","+623923+1353314","Moscow+06 - Tomponsky, Ust-Maysky","+09:00","+09:00",""]},{"Asia/Kolkata":["IN","+2232+08822","","+05:30","+05:30","Note: Different zones in history, see Time in India."]},{"Asia/Krasnoyarsk":["RU","+5601+09250","Moscow+04 - Yenisei River","+07:00","+07:00",""]},{"Asia/Kuala_Lumpur":["MY","+0310+10142","peninsular Malaysia","+08:00","+08:00",""]},{"Asia/Kuching":["MY","+0133+11020","Sabah & Sarawak","+08:00","+08:00",""]},{"Asia/Kuwait":["KW","+2920+04759","","+03:00","+03:00",""]},{"Asia/Macao":["","","","+08:00","+08:00","Link to Asia/Macau"]},{"Asia/Macau":["MO","+2214+11335","","+08:00","+08:00",""]},{"Asia/Magadan":["RU","+5934+15048","Moscow+07 - Magadan","+10:00","+10:00",""]},{"Asia/Makassar":["ID","-0507+11924","east & south Borneo, Sulawesi (Celebes), Bali, Nusa Tengarra, west Timor","+08:00","+08:00",""]},{"Asia/Manila":["PH","+1435+12100","","+08:00","+08:00",""]},{"Asia/Muscat":["OM","+2336+05835","","+04:00","+04:00",""]},{"Asia/Nicosia":["CY","+3510+03322","","+02:00","+03:00",""]},{"Asia/Novokuznetsk":["RU","+5345+08707","Moscow+04 - Novokuznetsk","+07:00","+07:00",""]},{"Asia/Novosibirsk":["RU","+5502+08255","Moscow+03 - Novosibirsk","+06:00","+06:00",""]},{"Asia/Omsk":["RU","+5500+07324","Moscow+03 - west Siberia","+06:00","+06:00",""]},{"Asia/Oral":["KZ","+5113+05121","West Kazakhstan","+05:00","+05:00",""]},{"Asia/Phnom_Penh":["KH","+1133+10455","","+07:00","+07:00",""]},{"Asia/Pontianak":["ID","-0002+10920","west & central Borneo","+07:00","+07:00",""]},{"Asia/Pyongyang":["KP","+3901+12545","","+09:00","+09:00",""]},{"Asia/Qatar":["QA","+2517+05132","","+03:00","+03:00",""]},{"Asia/Qyzylorda":["KZ","+4448+06528","Qyzylorda (Kyzylorda, Kzyl-Orda)","+06:00","+06:00",""]},{"Asia/Rangoon":["MM","+1647+09610","","+06:30","+06:30",""]},{"Asia/Riyadh":["SA","+2438+04643","","+03:00","+03:00",""]},{"Asia/Saigon":["","","","+07:00","+07:00","Link to Asia/Ho_Chi_Minh"]},{"Asia/Sakhalin":["RU","+4658+14242","Moscow+08 - Sakhalin Island","+11:00","+11:00",""]},{"Asia/Samarkand":["UZ","+3940+06648","west Uzbekistan","+05:00","+05:00",""]},{"Asia/Seoul":["KR","+3733+12658","","+09:00","+09:00",""]},{"Asia/Shanghai":["CN","+3114+12128","east China - Beijing, Guangdong, Shanghai, etc.","+08:00","+08:00","Covering historic Chungyuan time zone."]},{"Asia/Singapore":["SG","+0117+10351","","+08:00","+08:00",""]},{"Asia/Taipei":["TW","+2503+12130","","+08:00","+08:00",""]},{"Asia/Tashkent":["UZ","+4120+06918","east Uzbekistan","+05:00","+05:00",""]},{"Asia/Tbilisi":["GE","+4143+04449","","+04:00","+04:00",""]},{"Asia/Tehran":["IR","+3540+05126","","+03:30","+04:30",""]},{"Asia/Tel_Aviv":["","","","+02:00","+03:00","Link to Asia/Jerusalem"]},{"Asia/Thimbu":["","","","+06:00","+06:00","Link to Asia/Thimphu"]},{"Asia/Thimphu":["BT","+2728+08939","","+06:00","+06:00",""]},{"Asia/Tokyo":["JP","+353916+1394441","","+09:00","+09:00",""]},{"Asia/Ujung_Pandang":["","","","+08:00","+08:00","Link to Asia/Makassar"]},{"Asia/Ulaanbaatar":["MN","+4755+10653","most locations","+08:00","+08:00",""]},{"Asia/Ulan_Bator":["","","","+08:00","+08:00","Link to Asia/Ulaanbaatar"]},{"Asia/Urumqi":["CN","+4348+08735","most of Tibet & Xinjiang","+08:00","+08:00","Covering historic Sinkiang-Tibet time zone."]},{"Asia/Ust-Nera":["RU","+643337+1431336","Moscow+07 - Oymyakonsky","+10:00","+10:00",""]},{"Asia/Vientiane":["LA","+1758+10236","","+07:00","+07:00",""]},{"Asia/Vladivostok":["RU","+4310+13156","Moscow+07 - Amur River","+10:00","+10:00",""]},{"Asia/Yakutsk":["RU","+6200+12940","Moscow+06 - Lena River","+09:00","+09:00",""]},{"Asia/Yekaterinburg":["RU","+5651+06036","Moscow+02 - Urals","+05:00","+05:00",""]},{"Asia/Yerevan":["AM","+4011+04430","","+04:00","+04:00",""]},{"Atlantic/Azores":["PT","+3744-02540","Azores","−01:00","+00:00",""]},{"Atlantic/Bermuda":["BM","+3217-06446","","−04:00","−03:00",""]},{"Atlantic/Canary":["ES","+2806-01524","Canary Islands","+00:00","+01:00",""]},{"Atlantic/Cape_Verde":["CV","+1455-02331","","−01:00","−01:00",""]},{"Atlantic/Faeroe":["","","","+00:00","+01:00","Link to Atlantic/Faroe"]},{"Atlantic/Faroe":["FO","+6201-00646","","+00:00","+01:00",""]},{"Atlantic/Jan_Mayen":["","","","+01:00","+02:00","Link to Europe/Oslo"]},{"Atlantic/Madeira":["PT","+3238-01654","Madeira Islands","+00:00","+01:00",""]},{"Atlantic/Reykjavik":["IS","+6409-02151","","+00:00","+00:00",""]},{"Atlantic/South_Georgia":["GS","-5416-03632","","−02:00","−02:00",""]},{"Atlantic/St_Helena":["SH","-1555-00542","","+00:00","+00:00",""]},{"Atlantic/Stanley":["FK","-5142-05751","","−03:00","−03:00",""]},{"Australia/ACT":["","","","+10:00","+11:00","Link to Australia/Sydney"]},{"Australia/Adelaide":["AU","-3455+13835","South Australia","+09:30","+10:30",""]},{"Australia/Brisbane":["AU","-2728+15302","Queensland - most locations","+10:00","+10:00",""]},{"Australia/Broken_Hill":["AU","-3157+14127","New South Wales - Yancowinna","+09:30","+10:30",""]},{"Australia/Canberra":["","","","+10:00","+11:00","Link to Australia/Sydney"]},{"Australia/Currie":["AU","-3956+14352","Tasmania - King Island","+10:00","+11:00",""]},{"Australia/Darwin":["AU","-1228+13050","Northern Territory","+09:30","+09:30",""]},{"Australia/Eucla":["AU","-3143+12852","Western Australia - Eucla area","+08:45","+08:45",""]},{"Australia/Hobart":["AU","-4253+14719","Tasmania - most locations","+10:00","+11:00",""]},{"Australia/LHI":["","","","+10:30","+11:00","Link to Australia/Lord_Howe"]},{"Australia/Lindeman":["AU","-2016+14900","Queensland - Holiday Islands","+10:00","+10:00",""]},{"Australia/Lord_Howe":["AU","-3133+15905","Lord Howe Island","+10:30","+11:00",""]},{"Australia/Melbourne":["AU","-3749+14458","Victoria","+10:00","+11:00",""]},{"Australia/North":["","","","+09:30","+09:30","Link to Australia/Darwin"]},{"Australia/NSW":["","","","+10:00","+11:00","Link to Australia/Sydney"]},{"Australia/Perth":["AU","-3157+11551","Western Australia - most locations","+08:00","+08:00",""]},{"Australia/Queensland":["","","","+10:00","+10:00","Link to Australia/Brisbane"]},{"Australia/South":["","","","+09:30","+10:30","Link to Australia/Adelaide"]},{"Australia/Sydney":["AU","-3352+15113","New South Wales - most locations","+10:00","+11:00",""]},{"Australia/Tasmania":["","","","+10:00","+11:00","Link to Australia/Hobart"]},{"Australia/Victoria":["","","","+10:00","+11:00","Link to Australia/Melbourne"]},{"Australia/West":["","","","+08:00","+08:00","Link to Australia/Perth"]},{"Australia/Yancowinna":["","","","+09:30","+10:30","Link to Australia/Broken_Hill"]},{"Brazil/Acre":["","","","−05:00","","Link to America/Rio_Branco"]},{"Brazil/DeNoronha":["","","","−02:00","−02:00","Link to America/Noronha"]},{"Brazil/East":["","","","−03:00","−02:00","Link to America/Sao_Paulo"]},{"Brazil/West":["","","","−04:00","−04:00","Link to America/Manaus"]},{"Canada/Atlantic":["","","","−04:00","−03:00","Link to America/Halifax"]},{"Canada/Central":["","","","−06:00","−05:00","Link to America/Winnipeg"]},{"Canada/Eastern":["","","","−05:00","−04:00","Link to America/Toronto"]},{"Canada/East-Saskatchewan":["","","","−06:00","−06:00","Link to America/Regina"]},{"Canada/Mountain":["","","","−07:00","−06:00","Link to America/Edmonton"]},{"Canada/Newfoundland":["","","","−03:30","−02:30","Link to America/St_Johns"]},{"Canada/Pacific":["","","","−08:00","−07:00","Link to America/Vancouver"]},{"Canada/Saskatchewan":["","","","−06:00","−06:00","Link to America/Regina"]},{"Canada/Yukon":["","","","−08:00","−07:00","Link to America/Whitehorse"]},{"Chile/Continental":["","","","−04:00","−03:00","Link to America/Santiago"]},{"Chile/EasterIsland":["","","","−06:00","−05:00","Link to Pacific/Easter"]},{"Cuba":["","","","−05:00","−04:00","Link to America/Havana"]},{"Egypt":["","","","+02:00","+02:00","Link to Africa/Cairo"]},{"Eire":["","","","+00:00","+01:00","Link to Europe/Dublin"]},{"Etc/GMT":["","","","+00:00","+00:00","Link to UTC"]},{"Etc/GMT+0":["","","","+00:00","+00:00","Link to UTC"]},{"Etc/UCT":["","","","+00:00","+00:00","Link to UTC"]},{"Etc/Universal":["","","","+00:00","+00:00","Link to UTC"]},{"Etc/UTC":["","","","+00:00","+00:00","Link to UTC"]},{"Etc/Zulu":["","","","+00:00","+00:00","Link to UTC"]},{"Europe/Amsterdam":["NL","+5222+00454","","+01:00","+02:00",""]},{"Europe/Andorra":["AD","+4230+00131","","+01:00","+02:00",""]},{"Europe/Athens":["GR","+3758+02343","","+02:00","+03:00",""]},{"Europe/Belfast":["","","","+00:00","+01:00","Link to Europe/London"]},{"Europe/Belgrade":["RS","+4450+02030","","+01:00","+02:00",""]},{"Europe/Berlin":["DE","+5230+01322","most locations","+01:00","+02:00","In 1945, the Trizone did not follow Berlin's switch to DST, see Time in Germany"]},{"Europe/Bratislava":["SK","+4809+01707","","+01:00","+02:00","Link to Europe/Prague"]},{"Europe/Brussels":["BE","+5050+00420","","+01:00","+02:00",""]},{"Europe/Bucharest":["RO","+4426+02606","","+02:00","+03:00",""]},{"Europe/Budapest":["HU","+4730+01905","","+01:00","+02:00",""]},{"Europe/Busingen":["DE","+4742+00841","Busingen","+01:00","+02:00","Link to Europe/Zurich"]},{"Europe/Chisinau":["MD","+4700+02850","","+02:00","+03:00",""]},{"Europe/Copenhagen":["DK","+5540+01235","","+01:00","+02:00",""]},{"Europe/Dublin":["IE","+5320-00615","","+00:00","+01:00",""]},{"Europe/Gibraltar":["GI","+3608-00521","","+01:00","+02:00",""]},{"Europe/Guernsey":["GG","+4927-00232","","+00:00","+01:00","Link to Europe/London"]},{"Europe/Helsinki":["FI","+6010+02458","","+02:00","+03:00",""]},{"Europe/Isle_of_Man":["IM","+5409-00428","","+00:00","+01:00","Link to Europe/London"]},{"Europe/Istanbul":["TR","+4101+02858","","+02:00","+03:00",""]},{"Europe/Jersey":["JE","+4912-00207","","+00:00","+01:00","Link to Europe/London"]},{"Europe/Kaliningrad":["RU","+5443+02030","Moscow-01 - Kaliningrad","+02:00","+02:00",""]},{"Europe/Kiev":["UA","+5026+03031","most locations","+02:00","+03:00",""]},{"Europe/Lisbon":["PT","+3843-00908","mainland","+00:00","+01:00",""]},{"Europe/Ljubljana":["SI","+4603+01431","","+01:00","+02:00","Link to Europe/Belgrade"]},{"Europe/London":["GB","+513030-0000731","","+00:00","+01:00",""]},{"Europe/Luxembourg":["LU","+4936+00609","","+01:00","+02:00",""]},{"Europe/Madrid":["ES","+4024-00341","mainland","+01:00","+02:00",""]},{"Europe/Malta":["MT","+3554+01431","","+01:00","+02:00",""]},{"Europe/Mariehamn":["AX","+6006+01957","","+02:00","+03:00","Link to Europe/Helsinki"]},{"Europe/Minsk":["BY","+5354+02734","","+03:00","+03:00",""]},{"Europe/Monaco":["MC","+4342+00723","","+01:00","+02:00",""]},{"Europe/Moscow":["RU","+5545+03735","Moscow+00 - west Russia","+03:00","+03:00",""]},{"Europe/Nicosia":["","","","+02:00","+03:00","Link to Asia/Nicosia"]},{"Europe/Oslo":["NO","+5955+01045","","+01:00","+02:00",""]},{"Europe/Paris":["FR","+4852+00220","","+01:00","+02:00",""]},{"Europe/Podgorica":["ME","+4226+01916","","+01:00","+02:00","Link to Europe/Belgrade"]},{"Europe/Prague":["CZ","+5005+01426","","+01:00","+02:00",""]},{"Europe/Riga":["LV","+5657+02406","","+02:00","+03:00",""]},{"Europe/Rome":["IT","+4154+01229","","+01:00","+02:00",""]},{"Europe/Samara":["RU","+5312+05009","Moscow+01 - Samara, Udmurtia","+04:00","+04:00",""]},{"Europe/San_Marino":["SM","+4355+01228","","+01:00","+02:00","Link to Europe/Rome"]},{"Europe/Sarajevo":["BA","+4352+01825","","+01:00","+02:00","Link to Europe/Belgrade"]},{"Europe/Simferopol":["RU","+4457+03406","Moscow+00 - Crimea","+03:00","+03:00",""]},{"Europe/Skopje":["MK","+4159+02126","","+01:00","+02:00","Link to Europe/Belgrade"]},{"Europe/Sofia":["BG","+4241+02319","","+02:00","+03:00",""]},{"Europe/Stockholm":["SE","+5920+01803","","+01:00","+02:00",""]},{"Europe/Tallinn":["EE","+5925+02445","","+02:00","+03:00",""]},{"Europe/Tirane":["AL","+4120+01950","","+01:00","+02:00",""]},{"Europe/Tiraspol":["","","","+02:00","+03:00","Link to Europe/Chisinau"]},{"Europe/Uzhgorod":["UA","+4837+02218","Ruthenia","+02:00","+03:00",""]},{"Europe/Vaduz":["LI","+4709+00931","","+01:00","+02:00",""]},{"Europe/Vatican":["VA","+415408+0122711","","+01:00","+02:00","Link to Europe/Rome"]},{"Europe/Vienna":["AT","+4813+01620","","+01:00","+02:00",""]},{"Europe/Vilnius":["LT","+5441+02519","","+02:00","+03:00",""]},{"Europe/Volgograd":["RU","+4844+04425","Moscow+00 - Caspian Sea","+03:00","+03:00",""]},{"Europe/Warsaw":["PL","+5215+02100","","+01:00","+02:00",""]},{"Europe/Zagreb":["HR","+4548+01558","","+01:00","+02:00","Link to Europe/Belgrade"]},{"Europe/Zaporozhye":["UA","+4750+03510","Zaporozh'ye, E Lugansk / Zaporizhia, E Luhansk","+02:00","+03:00",""]},{"Europe/Zurich":["CH","+4723+00832","","+01:00","+02:00",""]},{"GB":["","","","+00:00","+01:00","Link to Europe/London"]},{"GB-Eire":["","","","+00:00","+01:00","Link to Europe/London"]},{"GMT":["","","","+00:00","+00:00","Link to UTC"]},{"GMT+0":["","","","+00:00","+00:00","Link to UTC"]},{"GMT0":["","","","+00:00","+00:00","Link to UTC"]},{"GMT-0":["","","","+00:00","+00:00","Link to UTC"]},{"Greenwich":["","","","+00:00","+00:00","Link to UTC"]},{"Hongkong":["","","","+08:00","+08:00","Link to Asia/Hong_Kong"]},{"Iceland":["","","","+00:00","+00:00","Link to Atlantic/Reykjavik"]},{"Indian/Antananarivo":["MG","-1855+04731","","+03:00","+03:00",""]},{"Indian/Chagos":["IO","-0720+07225","","+06:00","+06:00",""]},{"Indian/Christmas":["CX","-1025+10543","","+07:00","+07:00",""]},{"Indian/Cocos":["CC","-1210+09655","","+06:30","+06:30",""]},{"Indian/Comoro":["KM","-1141+04316","","+03:00","+03:00",""]},{"Indian/Kerguelen":["TF","-492110+0701303","","+05:00","+05:00",""]},{"Indian/Mahe":["SC","-0440+05528","","+04:00","+04:00",""]},{"Indian/Maldives":["MV","+0410+07330","","+05:00","+05:00",""]},{"Indian/Mauritius":["MU","-2010+05730","","+04:00","+04:00",""]},{"Indian/Mayotte":["YT","-1247+04514","","+03:00","+03:00",""]},{"Indian/Reunion":["RE","-2052+05528","","+04:00","+04:00",""]},{"Iran":["","","","+03:30","+04:30","Link to Asia/Tehran"]},{"Israel":["","","","+02:00","+03:00","Link to Asia/Jerusalem"]},{"Jamaica":["","","","−05:00","−05:00","Link to America/Jamaica"]},{"Japan":["","","","+09:00","+09:00","Link to Asia/Tokyo"]},{"Kwajalein":["","","","+12:00","+12:00","Link to Pacific/Kwajalein"]},{"Libya":["","","","+02:00","+01:00","Link to Africa/Tripoli"]},{"Mexico/BajaNorte":["","","","−08:00","−07:00","Link to America/Tijuana"]},{"Mexico/BajaSur":["","","","−07:00","−06:00","Link to America/Mazatlan"]},{"Mexico/General":["","","","−06:00","−05:00","Link to America/Mexico_City"]},{"Navajo":["","","","−07:00","−06:00","Link to America/Denver"]},{"NZ":["","","","+12:00","+13:00","Link to Pacific/Auckland"]},{"NZ-CHAT":["","","","+12:45","+13:45","Link to Pacific/Chatham"]},{"Pacific/Apia":["WS","-1350-17144","","+13:00","+14:00",""]},{"Pacific/Auckland":["NZ","-3652+17446","most locations","+12:00","+13:00",""]},{"Pacific/Chatham":["NZ","-4357-17633","Chatham Islands","+12:45","+13:45",""]},{"Pacific/Chuuk":["FM","+0725+15147","Chuuk (Truk) and Yap","+10:00","+10:00",""]},{"Pacific/Easter":["CL","-2709-10926","Easter Island & Sala y Gomez","−06:00","−05:00",""]},{"Pacific/Efate":["VU","-1740+16825","","+11:00","+11:00",""]},{"Pacific/Enderbury":["KI","-0308-17105","Phoenix Islands","+13:00","+13:00",""]},{"Pacific/Fakaofo":["TK","-0922-17114","","+13:00","+13:00",""]},{"Pacific/Fiji":["FJ","-1808+17825","","+12:00","+13:00",""]},{"Pacific/Funafuti":["TV","-0831+17913","","+12:00","+12:00",""]},{"Pacific/Galapagos":["EC","-0054-08936","Galapagos Islands","−06:00","−06:00",""]},{"Pacific/Gambier":["PF","-2308-13457","Gambier Islands","−09:00","−09:00",""]},{"Pacific/Guadalcanal":["SB","-0932+16012","","+11:00","+11:00",""]},{"Pacific/Guam":["GU","+1328+14445","","+10:00","+10:00",""]},{"Pacific/Honolulu":["US","+211825-1575130","Hawaii","−10:00","−10:00",""]},{"Pacific/Johnston":["UM","+1645-16931","Johnston Atoll","−10:00","−10:00",""]},{"Pacific/Kiritimati":["KI","+0152-15720","Line Islands","+14:00","+14:00",""]},{"Pacific/Kosrae":["FM","+0519+16259","Kosrae","+11:00","+11:00",""]},{"Pacific/Kwajalein":["MH","+0905+16720","Kwajalein","+12:00","+12:00",""]},{"Pacific/Majuro":["MH","+0709+17112","most locations","+12:00","+12:00",""]},{"Pacific/Marquesas":["PF","-0900-13930","Marquesas Islands","−09:30","−09:30",""]},{"Pacific/Midway":["UM","+2813-17722","Midway Islands","−11:00","−11:00",""]},{"Pacific/Nauru":["NR","-0031+16655","","+12:00","+12:00",""]},{"Pacific/Niue":["NU","-1901-16955","","−11:00","−11:00",""]},{"Pacific/Norfolk":["NF","-2903+16758","","+11:30","+11:30",""]},{"Pacific/Noumea":["NC","-2216+16627","","+11:00","+11:00",""]},{"Pacific/Pago_Pago":["AS","-1416-17042","","−11:00","−11:00",""]},{"Pacific/Palau":["PW","+0720+13429","","+09:00","+09:00",""]},{"Pacific/Pitcairn":["PN","-2504-13005","","−08:00","−08:00",""]},{"Pacific/Pohnpei":["FM","+0658+15813","Pohnpei (Ponape)","+11:00","+11:00",""]},{"Pacific/Ponape":["","","","+11:00","+11:00","Link to Pacific/Pohnpei"]},{"Pacific/Port_Moresby":["PG","-0930+14710","","+10:00","+10:00",""]},{"Pacific/Rarotonga":["CK","-2114-15946","","−10:00","−10:00",""]},{"Pacific/Saipan":["MP","+1512+14545","","+10:00","+10:00",""]},{"Pacific/Samoa":["","","","−11:00","−11:00","Link to Pacific/Pago_Pago"]},{"Pacific/Tahiti":["PF","-1732-14934","Society Islands","−10:00","−10:00",""]},{"Pacific/Tarawa":["KI","+0125+17300","Gilbert Islands","+12:00","+12:00",""]},{"Pacific/Tongatapu":["TO","-2110-17510","","+13:00","+13:00",""]},{"Pacific/Truk":["","","","+10:00","+10:00","Link to Pacific/Chuuk"]},{"Pacific/Wake":["UM","+1917+16637","Wake Island","+12:00","+12:00",""]},{"Pacific/Wallis":["WF","-1318-17610","","+12:00","+12:00",""]},{"Pacific/Yap":["","","","+10:00","+10:00","Link to Pacific/Chuuk"]},{"Poland":["","","","+01:00","+02:00","Link to Europe/Warsaw"]},{"Portugal":["","","","+00:00","+01:00","Link to Europe/Lisbon"]},{"PRC":["","","","+08:00","+08:00","Link to Asia/Shanghai"]},{"ROC":["","","","+08:00","+08:00","Link to Asia/Taipei"]},{"ROK":["","","","+09:00","+09:00","Link to Asia/Seoul"]},{"Singapore":["","","","+08:00","+08:00","Link to Asia/Singapore"]},{"Turkey":["","","","+02:00","+03:00","Link to Europe/Istanbul"]},{"UCT":["","","","+00:00","+00:00","Link to UTC"]},{"Universal":["","","","+00:00","+00:00","Link to UTC"]},{"US/Alaska":["","","","−09:00","−08:00","Link to America/Anchorage"]},{"US/Aleutian":["","","","−10:00","−09:00","Link to America/Adak"]},{"US/Arizona":["","","","−07:00","−07:00","Link to America/Phoenix"]},{"US/Central":["","","","−06:00","−05:00","Link to America/Chicago"]},{"US/Eastern":["","","","−05:00","−04:00","Link to America/New_York"]},{"US/East-Indiana":["","","","−05:00","−04:00","Link to America/Indiana/Indianapolis"]},{"US/Hawaii":["","","","−10:00","−10:00","Link to Pacific/Honolulu"]},{"US/Indiana-Starke":["","","","−06:00","−05:00","Link to America/Indiana/Knox"]},{"US/Michigan":["","","","−05:00","−04:00","Link to America/Detroit"]},{"US/Mountain":["","","","−07:00","−06:00","Link to America/Denver"]},{"US/Pacific":["","","","−08:00","−07:00","Link to America/Los_Angeles"]},{"US/Samoa":["","","","−11:00","−11:00","Link to Pacific/Pago_Pago"]},{"UTC":["","","","+00:00","+00:00",""]},{"W-SU":["","","","+03:00","+03:00","Link to Europe/Moscow"]},{"Zulu":["","","","+00:00","+00:00","Link to UTC"]}]
    /**
     * coord=[medina:[Latitude,Longitude]]
     * coord=[medina:[Latitude,Longitude]]
     */
    _HijrahDate._.db.coord={'مكة':[21.4167,39.8167],'mecca':[21.4167,39.8167]}
    _HijrahDate._.db.cfgFieldsEquivalences=[['لغة','عرض','طول','مدينة','المنطقة الزمنية'],['lang','latitude','longitude','city','timezone']]
    Object.freeze(_HijrahDate._.db);

    var hdays = new Array(30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29);

    function hvalidate()
    {
        var dh, mh, yh, m1h, leaph;
        dh = document.Hijri.HDay.value;
        mh = document.Hijri.HMonth.value;
        yh = document.Hijri.HYear.value;

        if (document.Hijri.HYear.value == "")
        {
            alert("Hijri Year can not be empty");
            return false;
            document.Hijri.HYear.focus();
        }

        if (isnumeric(yh) == false)
        {
            alert("Hijri Year should be in numerics")
            document.Hijri.HYear.focus();
            return false;
        }


        m1h = yh % 30;

        //the 2nd, 5th, 7th, 10th, 13th, 16th, 18th, 21st, 24th, 26th, and 29th years are leap years.

        leaph = ((mh == 12) && (m1h == 2 || m1h == 5 || m1h == 7 || m1h == 10 || m1h == 13 || m1h == 16 || m1h == 18 || m1h == 21 || m1h == 24 || m1h == 26 || m1h == 29)) ? 1 : 0;
        if (dh > (hdays[mh - 1] + leaph))
        {
            alert(mh + "/" + dh + "/" + yh + " is not a valid Hijri date.");
            return false;
            document.Hijri.HDay.focus();
        }
 
        return true;
    }

    function intPart(floatNum) {
        if (floatNum < -0.0000001) {
            return Math.ceil(floatNum - 0.0000001)
        }
        return Math.floor(floatNum + 0.0000001)
    }
    delta = 1
    function GregToIsl(arg) {

        if (gvalidate() == false) {
            return false
        }

        d = parseInt(arg.CDay.value)
        m = parseInt(arg.CMonth.value)
        y = parseInt(arg.CYear.value)
        delta = 1

        if ((y > 1582) || ((y == 1582) && (m > 10)) || ((y == 1582) && (m == 10) && (d > 14)))
        {
//added delta=1 on jd to comply isna rulling 2007
            jd = intPart((1461 * (y + 4800 + intPart((m - 14) / 12))) / 4) + intPart((367 * (m - 2 - 12 * (intPart((m - 14) / 12)))) / 12) -
                    intPart((3 * (intPart((y + 4900 + intPart((m - 14) / 12)) / 100))) / 4) + d - 32075 + delta
        }
        else
        {
//added +1 on jd to comply isna rulling
            jd = 367 * y - intPart((7 * (y + 5001 + intPart((m - 9) / 7))) / 4) + intPart((275 * m) / 9) + d + 1729777 + delta
        }
        arg.JD.value = jd
//added -1 on jd1 to comply isna rulling
        jd1 = jd - delta
        arg.wd.value = weekDay(jd1 % 7)
        l = jd - 1948440 + 10632
        n = intPart((l - 1) / 10631)
        l = l - 10631 * n + 354
        j = (intPart((10985 - l) / 5316)) * (intPart((50 * l) / 17719)) + (intPart(l / 5670)) * (intPart((43 * l) / 15238))
        l = l - (intPart((30 - j) / 15)) * (intPart((17719 * j) / 50)) - (intPart(j / 16)) * (intPart((15238 * j) / 43)) + 29
        m = intPart((24 * l) / 709)
        d = l - intPart((709 * m) / 24)
        y = 30 * n + j - 30

        //arg.HMonth.value=m
        //arg.HYear.value=y
        //arg.HDay.value=d
        return {d: d, m: m, y: y}

    }
    function gvalidate() {
        return true;
    }
    function IslToGreg(arg) {

        /*
         
         if(hvalidate()==false){
         return false
         }
         '
         
         */

        d = parseInt(arg.HDay.value)
        m = parseInt(arg.HMonth.value)
        y = parseInt(arg.HYear.value)
        //added - delta=1 on jd to comply isna rulling
        jd = intPart((11 * y + 3) / 30) + 354 * y + 30 * m - intPart((m - 1) / 2) + d + 1948440 - 385 - delta
        arg.JD.value = jd
        arg.wd.value = weekDay(jd % 7)
        if (jd > 2299160)
        {
            l = jd + 68569
            n = intPart((4 * l) / 146097)
            l = l - intPart((146097 * n + 3) / 4)
            i = intPart((4000 * (l + 1)) / 1461001)
            l = l - intPart((1461 * i) / 4) + 31
            j = intPart((80 * l) / 2447)
            d = l - intPart((2447 * j) / 80)
            l = intPart(j / 11)
            m = j + 2 - 12 * l
            y = 100 * (n - 49) + i + l
        }
        else
        {
            j = jd + 1402
            k = intPart((j - 1) / 1461)
            l = j - 1461 * k
            n = intPart((l - 1) / 365) - intPart(l / 1461)
            i = l - 365 * n + 30
            j = intPart((80 * i) / 2447)
            d = i - intPart((2447 * j) / 80)
            i = intPart(j / 11)
            m = j + 2 - 12 * i
            y = 4 * k + n + i - 4716
        }

        //arg.CDay.value=d
        //arg.CMonth.value=m
        //arg.CYear.value=y

        return {d: d, m: m, y: y}

    }




    function weekDay(wdn) {
        if (wdn == 0) {
            return "Monday"
        }
        if (wdn == 1) {
            return "Tuesday"
        }
        if (wdn == 2) {
            return "Wednesday"
        }
        if (wdn == 3) {
            return "Thursday"
        }
        if (wdn == 4) {
            return "Friday"
        }
        if (wdn == 5) {
            return "Saturday"
        }
        if (wdn == 6) {
            return "Sunday"
        }
        return ""

    }

    function isnumeric(num)
    {
        var strlen = num.length
        var i
        for (i = 0; i < strlen; ++i)
        {
            //if (!((num.charAt(i) >= '0') && (num.charAt(i)<='9') || (num.charAt(i)=='.')))
            if (!((num.charAt(i) >= '0') && (num.charAt(i) <= '9') || (num.charAt(i) == '.') || (num.charAt(i) == '-')))
            {
                return false;
            }
        }
    }
    ;
    proxy = {};
    proxy.cfg={'لغة':'ar',lang:'ar',latitude:21.4167,longitude:39.8167,'مدينة':'مكة','طول':39.8167,'عرض':21.4167,city:'Mecca',timeoffset:180}
    proxy.fromIslam = function(d, m, y) {
       
        var obj = IslToGreg({HDay: {value: d}, HYear: {value: y}, HMonth: {value: m}, wd: {value: ''}, JD: {value: ''}})
      // console.log(obj.y+'/'+obj.m+'/'+ obj.d)
        return new Date(obj.y+'/'+obj.m+'/'+ obj.d);
        
    };
    proxy.fromSalibi = function(d) {
        var obj = GregToIsl({CDay: {value: d.getDate()}, CYear: {value: d.getFullYear()}, CMonth: {value: d.getMonth() + 1}, wd: {value: ''}, JD: {value: ''}})
        // console.log(obj);
         var toR=new _HijrahDate(obj.y, obj.m, obj.d);
         toR.proxy=d;
         return toR;
    };
    proxy.fromSalibiObj = function(d) {
        return GregToIsl({CDay: {value: d.getDate()}, CYear: {value: d.getFullYear()}, CMonth: {value: d.getMonth() + 1}, wd: {value: ''}, JD: {value: ''}})

    };
    proxy.constructor = {};
    proxy.constructor.string = function(tm) {
        if (isFinite(tm)) {
            //Year
            if (tm.length <= 2) {
                tm = _HijrahDate.fromYearShorter(parseInt(tm));
                
            }
            
             this.fullyear=parseInt(tm);
             this.month=1;
             this.date=1;
             this.secondes=0;
             this.milliseconds=0;
             
            
            this.proxy = proxy.fromIslam(this.date,  this.month, this.fullyear);
        } else {           
            // string date "1430/05/12", "1"
            
            try {
                tm=tm.replaceAll('/','-').replaceAll('_','-');
                 if(tm.indexOf(':')>0){
                    tm=tm.split(' ');
                    var dt=tm[0].split('-');
                    var time=tm[1].replaceAll('.',':').split(':');
                    this.date=parseInt(dt[2]);
                    this.month=parseInt(dt[1]);
                    this.fullyear=parseInt(dt[0]);
                    this.proxy = proxy.fromIslam(this.date, this.month, this.fullyear);
                    
                    if(parseInt(time[0])){
                      this.hours=parseInt(time[0])
                    this.proxy.setHours(this.hours);     
                    }
                   
                    
                    if(time.length===2){
                        this.minutes=parseInt(time[1]);
                        
                        this.proxy.setMinutes(this.minutes)
                    }
                    if(time.length===3){
                        this.secondes=parseInt(time[2]);
                        this.proxy.setSeconds(this.secondes)
                    }
                    if(time.length===4){
                        this.milliseconds=parseInt(time[3]);
                        this.proxy.setMilliseconds(this.milliseconds)
                    }
                }else{
                   tm=tm.split('-');
                   this.date=parseInt(tm[2]);
                    this.month=parseInt(tm[1]);
                    this.fullyear=parseInt(tm[0]);
                     this.proxy = proxy.fromIslam(this.date, this.month, this.fullyear);
                     
                }
            }catch(err){
                console.error(err);
            }           
        }
        proxy.constructor.comon.call(this);
    }
    proxy.constructor.many = function(y,m,d,h,mi,sec,msec) {
      console.log(this.cfg)
                this.fullyear=parseInt(y);
                if(!m){this.month=1}else{this.month=parseInt(m)};
                if(!d){this.date=1}else{this.date=parseInt(d)};
                if(!this.proxy){
                 this.proxy=proxy.fromIslam(this.date,this.month,this.fullyear)    
                }
                
                if(!h && h!==0){
                    var bydeytYam=proxy.bideytElyam(this.proxy,this.cfg.timeoffset);
                    
                     this.hours=parseInt(bydeytYam.split(':')[0]);
                    
                     this.minutes=parseInt(bydeytYam.split(':')[1]);
                      mi=this.minutes;
                  }else{this.hours=parseInt(h)};
                if(!mi && mi!==0){this.minutes=1}else{this.minutes=parseInt(mi)};
                if(!sec){this.secondes=0}else{this.secondes=parseInt(sec)};
                if(!msec ){this.milliseconds=0}else{this.milliseconds=parseInt(msec)};
               this.proxy.setHours(this.hours)
               this.proxy.setMinutes(this.minutes);
               this.proxy.setSeconds(this.secondes);
               this.proxy.setMilliseconds(this.milliseconds);
               this.time=this.proxy.getTime()- _HijrahDate.timestamp();
               
               proxy.constructor.comon.call(this);
                
    };
    
    proxy.constructor.comon = function() {
        
         
         if(this.cfg.city){
             this.setCity(this.cfg.city);
         }
         if(this.proxy){
             
          this.UTCHours = this.proxy.getUTCHours() + 3;
          this.UTCMinutes = this.proxy.getUTCMinutes();
          this.UTCSecondes = this.proxy.getUTCSeconds();
          var awkat=proxy.awkatSalat(this.proxy,this.cfg);
          for(var salat in awkat){
                 this[salat]=awkat[salat];
          }
          if(typeof this.hours ==='undefined' && typeof this.minutes ==='undefined'){
             var bydeytYam=proxy.bideytElyam(this.proxy,this.cfg);
             this.hours=parseInt(bydeytYam.split(':')[0]);
             this.minutes=parseInt(bydeytYam.split(':')[1]);
         }
        }
         if(this.fullyear){this.year = this.fullyear - 1400};
         if(!this.secondes){this.secondes==0}
         if(!this.milliseconds){this.milliseconds=0}
         
    };
   
    proxy.constructor.void = function() {
        this.time = _HijrahDate.now();
        this.proxy = new Date();
        this.all = proxy.fromSalibiObj(this.proxy);
        this.fullyear = this.all.y
        
        this.month = this.all.m;
        this.date = this.all.d;
        this.hours = this.proxy.getHours();
        this.minutes = this.proxy.getMinutes();
        this.secondes = this.proxy.getSeconds();

         proxy.constructor.comon.call(this);
    };
    
    proxy.constructor.int = function(int) {
        this.time = int;
        this.proxy = new Date(this.time + _HijrahDate.timestamp());
        this.all = proxy.fromSalibiObj(this.proxy);
        this.fullyear = this.all.y
        this.year = this.fullyear - 1400;
        this.month = this.all.m;
        this.date = this.all.d;
        this.hours = this.proxy.getHours();
        this.minutes = this.proxy.getMinutes();
        this.secondes = this.proxy.getSeconds();

        
         proxy.constructor.comon.call(this);
    };
    
    /**
     * في الإسلام 
     * اليوم يبدأ  من الليل 
     * و الليل يبدأ بالمغرب 
     * 
     * و ليس كما عند الذين يسمون منتصف الليل بداية اليوم في نفس الوقت ؟؟؟؟!!!!
     * @returns {undefined}
     * 
     */
    proxy.awkatSalat=function(salibi,cfg){
        if(!salibi){salibi=new Date();cfg.timeoffset=salibi.getTimezoneOffset();}
         awkatSalat.setMethod('Makkah');
         var timeoffset=cfg.timeoffset || salibi.getTimezoneOffset();
         var gmtHours = timeoffset/60 ;
         console.log(timeoffset)
          return  awkatSalat.getTimes(salibi, [cfg.latitude,cfg.longitude], gmtHours,"24h");
    }
    proxy['bideytElyam']=function(salibi,cfg){
      return proxy.awkatSalat(salibi,cfg).maghrib;
    };
    
    
    _HijrahDate.fromYearShorter = function(xx) {
        cuY = parseInt(proxy.fromSalibiObj(new Date()).y), centry = parseInt(cuY / 100)
        if (xx > (cuY % 100)) {
            return (100 * (centry - 1) + xx)
        } else {
            return ((100 * centry) + xx)
        }
    };
    /**
     * 
     * @param {String} hhmm أو سلسلة حروف نص
     * @returns {Number} عدد صبيعي
     */
    proxy.hhmm2mmInt=function(hhmm){
        return parseInt(hhmm.split(':')[0])*60+parseInt(hhmm.split(':')[1]);
    }
    /**
     * 
     * @param {String} hhmm نص
     * @param {Number} mm عدد صجيج
     * @returns {Number}دقيقة عدد صجيج
     */
    proxy.hhmmAddmm=function(hhmm,mm){
        return  proxy.hhmm2mmInt(hhmm)+mm;
    };
    proxy.tz={};
    proxy.tz.available=function(tz){
        return proxy.tz.findAll().indexOf(tz)!==-1;
    }
    proxy.tz.findAll=function(){
      return  _HijrahDate._.db.tz.map(function(e){return Object.keys(e)[0]}); 
    }
    /*
     * {tz:[ISO3166,coord,comment,utcOffset,utcDSToffset,notes]}
     */
    proxy.tz.byName=function(tz){
        if(proxy.tz.available(tz)){
            return _HijrahDate._.db.tz[proxy.tz.findAll().indexOf(tz)]
        }       
    };
    proxy.tz.minutesOffset=function(tz){
      var e= proxy.tz.byName(tz);
      if(e){e=e[tz]}
      if(e){
        return proxy.hhmm2mmInt(e[3]);  
      };
    };
    
    proxy.tz.parseCoord=function(coord){
       
    };
    /**
     * ie: tmp.tz.load('js/cities15000.txt','\t',{tz:function(i){return this[17]}})
     * @param {type} file
     * @param {type} delimitor
     * @param {type} converters
     * @returns {undefined}
     */
    proxy.tz.load=function(file,delimitor,converters){
        if(!delimitor){delimitor='\t'}
          var xhReq = new XMLHttpRequest(),d=null;
          xhReq.open("GET", file, false);
          xhReq.send(null);
          d=xhReq.responseText;
          if(d){
             d.split('\n').clean().forEach(function(line,idx){
                var cy=new City(line);
                if(typeof converters ==='object'){
                    Object.keys(converters).forEach(function(prop,propidx){
                        if(typeof converters[prop] ==='function'){
                            cy[prop]=converters[prop].call(line.split(delimitor),idx)
                        }
                    }) ;  
                }
                _HijrahDate._.db.cities.push(cy);
             }); 
          }
          
    };
    
    
    _HijrahDate.timestamp = function() {
        return proxy.fromIslam(1, 1, 1400).getTime();
    }
    _HijrahDate.now = function() {
        return new Date().getTime() - _HijrahDate.timestamp();
    };
    _HijrahDate.unitTest=function(){
      //  console.log(new Date()+toString()+':'+proxy.fromIslam(9,2,1436))
        //return proxy.awkatSalat();
    };
    
    _HijrahDate.unitTest();
    HijrahDate = _HijrahDate;
    tmp=proxy;
    
    
    City.findAll=function(){
        return _HijrahDate._.db.cities;
    };
    City.findAllBy=function(field,value){
       return City.findAll().filter(function(e){return e[field] === value})
    };
    City.findBy=function(field,value){
       var all=City.findAllBy(field,value);
       if(!all.empty()){
           return all[0];
       }
       return null;
    };
    
    if(typeof ORMQuery !=='undefined'){
     ORMQuery.addDB(_HijrahDate._.db.cities)   ;
      _HijrahDate.prototype.setCity=function(medina){
        var city=City.findBy('name',medina);
        if(!city){
            city=City.createCriteria().get(function(){
                this.like('namei18n',medina.toLowerCase())
            });
        };
        if(city){
          this.cfg.timezone=proxy.tz.byName(city.tz);
          this.cfg.timeoffset=proxy.tz.minutesOffset(city.tz)
          this.cfg.city=medina;
          this.cfg.latitude=city.latitude
          this.cfg.longitude=city.longitude
          this.cfg['مدينة']=medina;
        };
      };
      _HijrahDate.setCity=function(medina){
        var city=City.findBy('name',medina);
        if(!city){
            city=City.createCriteria().get(function(){
                this.like('namei18n',medina.toLowerCase())
            });
        };
        if(city){
          proxy.cfg.timezone=proxy.tz.byName(city.tz);
          proxy.cfg.timeoffset=proxy.tz.minutesOffset(city.tz)
          proxy.cfg.city=medina;
          proxy.cfg.latitude=city.latitude
          proxy.cfg.longitude=city.longitude
          proxy.cfg['مدينة']=medina;
        };
      };
    };
     
     proxy.tz.load('js/moodon.txt','\t',{id:function(){return parseInt(this[0])},name:function(){return this[1]},namei18n:function(){return this[1]+','+this[2]+','+this[3]},tz:function(){return this[17]},latitude:function(){return parseFloat(this[4])},longitude:function(){return parseFloat(this[5])},country:function(){return this[8].toLowerCase()}})
    idx=_HijrahDate._.db.cities.length++; 
    //proxy.tz.load('js/worldcitiespop.txt',':',{id:function(dx){return ++idx},name:function(dex){return this[2]},namei18n:function(){return this[1]+','+this[2]},latitude:function(){return parseFloat(this[5])},longitude:function(){return parseFloat(this[6])},country:function(){return this[0]}})
})(HijrahDate, {},City);
