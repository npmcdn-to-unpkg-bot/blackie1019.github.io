var isfetched=false;var search_path=config.search_path;if(search_path.length==0){search_path="search.xml"}var path=config.root+search_path;function proceedsearch(){$("body").append('<div class="popoverlay">').css("overflow","hidden");$(".popup").toggle()}var searchFunc=function(e,t,a){"use strict";$.ajax({url:e,dataType:"xml",async:true,success:function(e){isfetched=true;$(".popup").detach().appendTo(".header-inner");var r=$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();var i=document.getElementById(t);var s=document.getElementById(a);i.addEventListener("input",function(){var e=0;var t='<ul class="search-result-list">';var a=this.value.trim().toLowerCase().split(/[\s\-]+/);s.innerHTML="";if(this.value.trim().length>1){r.forEach(function(r){var i=true;var s=[];var c=r.title.trim().toLowerCase();var n=r.content.trim().replace(/<[^>]+>/g,"").toLowerCase();var o=r.url;var l=-1;var p=-1;var f=-1;if(c!=""&&n!=""){a.forEach(function(e,t){l=c.indexOf(e);p=n.indexOf(e);if(l<0&&p<0){i=false}else{if(p<0){p=0}if(t==0){f=p}}})}if(i){e+=1;t+="<li><a href='"+o+"' class='search-result-title'>"+c+"</a>";var h=r.content.trim().replace(/<[^>]+>/g,"");if(f>=0){var u=f-20;var v=f+80;if(u<0){u=0}if(u==0){v=50}if(v>h.length){v=h.length}var d=h.substring(u,v);a.forEach(function(e){var t=new RegExp(e,"gi");d=d.replace(t,'<b class="search-keyword">'+e+"</b>")});t+='<p class="search-result">'+d+"...</p>"}t+="</li>"}})}t+="</ul>";if(e==0){t='<div id="no-result"><i class="fa fa-frown-o fa-5x" /></div>'}if(a==""){t='<div id="no-result"><i class="fa fa-search fa-5x" /></div>'}s.innerHTML=t});proceedsearch()}})};$(".popup-trigger").mousedown(function(e){e.stopPropagation();if(isfetched==false){searchFunc(path,"local-search-input","local-search-result")}else{proceedsearch()}});$(".popup-btn-close").click(function(e){$(".popup").hide();$(".popoverlay").remove();$("body").css("overflow","")});$(".popup").click(function(e){e.stopPropagation()});