(function(a,b){var f={version:'1.0.0'};f.isString=function(s){return"[object String]"==Object.prototype.toString.call(s)};f.dom=f.dom||{backCompat:"BackCompat",documentElement:"documentElement"};f.dom.g=function(elem){if(c.isString(elem)){return document.getElementById(elem)}else{if(elem&&elem.nodeName&&(elem.nodeType==1||elem.nodeType==9)){return elem}}return null};f.dom.addEvent=function(h,g,i){var j=function(){i.call(h,g)};g=g.replace(/^on/i,"").toLowerCase();f.isString(h)&&(h=f.dom.g(h));h.addEventListener?h.addEventListener(g,j,!1):h.attachEvent&&h.attachEvent("on"+g,j)};f.request=function(url){var h=new Image(1,1);h.src=url;f.dom.addEvent(h,"load",function(){h=null})};f.genSeed=function(){return Math.ceil(Math.random()*10000000)};a.WaaAds=f})(window);