var backToTopButton=document.getElementById("bckTop");function toggleBackToTopButton(){document.body.scrollTop>window.innerHeight/4||document.documentElement.scrollTop>window.innerHeight/4?backToTopButton.classList.remove("d-none"):backToTopButton.classList.add("d-none")}window.onscroll=function(){toggleBackToTopButton()},backToTopButton.onclick=function(){window.scrollTo({behavior:"smooth",left:0,top:0})};var local="",timer1;function LoadImageinViewPort1(){var e=null!=window.pageYOffset?window.pageYOffset:window.document.documentElement.scrollTop;if("undefined"==typeof jQuery){var t=document.getElementsByTagName("img"),n="";for(i=0;i<t.length;i++)n="",parseInt(offsettop(t[i]).top)<=parseInt(e)+parseInt(Windowheight())+600&&parseInt(offsettop(t[i]).top)+parseInt(Windowheight())+600>parseInt(e)&&(null!=t[i].getAttribute("dataimg")&&""!=t[i].getAttribute("dataimg")?n=t[i].getAttribute("dataimg"):null!=t[i].parentNode.getAttribute("dataimg")&&""!=t[i].parentNode.getAttribute("dataimg")&&(n=t[i].parentNode.getAttribute("dataimg")),""!=n&&(t[i].src=n))}else jQuery("img[dataimg]").each((function(){parseInt(jQuery(this).offset().top)<parseInt(e)+parseInt(jQuery(window).height())+600&&parseInt(jQuery(this).offset().top)+parseInt(jQuery(this).height())+600>parseInt(e)&&""!=this.getAttribute("dataimg")&&(this.src=this.getAttribute("dataimg"))})),jQuery("a[dataimg] img").each((function(){parseInt(jQuery(this).offset().top)<parseInt(e)+parseInt(jQuery(window).height())+600&&parseInt(jQuery(this).offset().top)+parseInt(jQuery(this).height())+600>parseInt(e)&&jQuery(this).attr("src",jQuery(this).parent("a[dataimg]").attr("dataimg"))}));window.addEventListener?window.addEventListener("scroll",bindFunctionOnScroll1,!1):window.attachEvent?window.attachEvent("onscroll",bindFunctionOnScroll1):window.onscroll=bindFunctionOnScroll1}function bindFunctionOnScroll1(){clearTimeout(timer1),timer1=setTimeout(LoadImageinViewPort1,50)}function autosuggest(){var origin_url=window.location.origin,match_res=origin_url.match(/dev-/);if(null!=match_res)var post_url=$(this).data("url");else var post_url=origin_url;$.ajaxSetup({cache:!0}),$.ajax({type:"POST",url:post_url,data:{ssdata:"ssd"}}).done((function(msg){window.ss=eval(msg)}));var head=document.getElementsByTagName("head")[0];$("#ss").focus((function(){$("input#ss").bind("keyup",(function(e){var sas=window.ss,autosuggest=new Array,cont_ele=document.getElementById("SearchSuggest");for(reslt="<ul>",temp=0;autosuggest.length<15&&temp<sas.length;temp++)if(product_n=unescape(sas[temp]),patt=eval("/"+$(this).val()+"/ig"),""!=$(this).val()&&patt.test(product_n)){var esdf=unescape(sas[temp]);esdf=esdf.replace(/'/g,"\\'"),reslt+='<li class="as_D ui-menu-item cp" role="menuitem"><a onclick="searchtext(\''+esdf+'\')" class="ui-corner-all"><b class="ds1 w17">'+unescape(sas[temp])+"</b></a></li>",autosuggest.push(unescape(sas[temp]))}reslt+="</ul>",cont_ele.innerHTML=reslt,autosuggest.length>0?cont_ele.style.display="block":cont_ele.style.display="none"}));var sas=window.ss,autosuggest=new Array,cont_ele=document.getElementById("SearchSuggest");for(reslt="<ul>",temp=0;autosuggest.length<15&&temp<sas.length;temp++){product_n=unescape(sas[temp]),patt=eval("/"+$(this).val()+"/ig");var esdf=unescape(sas[temp]);esdf=esdf.replace(/'/g,"\\'"),reslt+='<li class="as_D ui-menu-item cp" role="menuitem"><a onclick="searchtext(\''+esdf+'\')" class="ui-corner-all"><b class="ds1 w17">'+unescape(sas[temp])+"</b></a></li>",autosuggest.push(unescape(sas[temp]))}reslt+="</ul>",cont_ele.innerHTML=reslt,autosuggest.length>0?cont_ele.style.display="block":cont_ele.style.display="none"}))}function impfun(){if(window.drphover=!1,$((function(){$(".ht_hold").on("hover mousemove",(function(e){window.drphover||$.getScript(central_path+"d0055/dropdown_2_min.js").done((function(){$("#dd_prf").attr("onmouseover","ddHtCheck('profile')"),$("#dd_prd").attr("onmouseover","ddHtCheck('product')"),window.drphover=!0}))}))})),"enquiry"!=pagenameqw&&$.getScript(cent_path+"product_video_2_min.js"),"homepage"!=pagenameqw&&"enquiry"!=pagenameqw&&"catindex"!=pagenameqw){var e=document.createElement("link");e.href=central_path+"d0055/swiper.min.css",e.type="text/css",e.rel="stylesheet",$("head").append(e),$.getScript(central_path+"d0055/swiper2.min.js").done((function(){$(window).width()<=1024?slidpVw=3:slidpVw=4;new Swiper(".swiper_horizontal",{slidesPerView:slidpVw,nextButton:".swiper-next",prevButton:".swiper-prev",spaceBetween:0})}))}"franchisee"==pagenameqw&&$.getScript(cent_path+"franchisee_min.js")}function opentext(){document.querySelector(".tool_ind").classList.remove("dn")}function closetext(){document.getElementById("SearchSuggest").style.display="none"}if("category"!=pagenameqw&&(CAT_NAME=""),setTimeout((function(){LoadImageinViewPort1()}),20),"homepage"!=pagenameqw&&"search"!=pagenameqw&&"category"!=pagenameqw){var scrollPos=0;document.addEventListener("scroll",(function(){document.body.getBoundingClientRect().top,scrollPos=document.body.getBoundingClientRect().top}))}function searchtext(e){document.getElementById("ss").value=e,setTimeout(searchCheck,180)}if(document.addEventListener("mousedown",(function(){try{("ui-corner-all"==event.target.parentElement.className||event.target.parentElement.parentElement.classList.contains("ui-menu-item"))&&event.preventDefault()}catch(e){}})),"aboutus"==pagenameqw||"quality"==pagenameqw||"infrastructure"==pagenameqw||"customprofile"==pagenameqw||"awards"==pagenameqw||"testimonial"==pagenameqw||"news"==pagenameqw){function hsCls(e,t){try{return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}catch(e){return null}}var abtdescription="";if(document.getElementById("abtdesc")&&(abtdescription=document.getElementById("abtdesc").innerHTML),abtdescription.length>470){var ContSplitInd=abtdescription.substring(0,470).lastIndexOf(" ");document.getElementById("abtdesc").innerHTML=document.getElementById("abtdesc").innerHTML.substring(0,ContSplitInd)+'<span class="clr18">...</span><span class="viewDetail clr18 cp bo1" onclick="return adddetail();">&nbsp; Read More</span>'}function adddetail(){document.getElementById("abtdesc").innerHTML=abtdescription}window.document.onkeydown=function(e){e||(e=event),27==e.keyCode&&lightbox_close()}}function getComputedTranslateY(e){if(window.getComputedStyle){var t=getComputedStyle(e),n=t.transform||t.webkitTransform||t.mozTransform||t.msTransform,a=n.match(/^translate\((.+)\)$/);return a?parseFloat(a[1].split(", ")[13]):(a=n.match(/^matrix\((.+)\)$/))?parseFloat(a[1].split(", ")[5]):0}}function slide(e,t){var n=document.getElementById(e),a=n.getElementsByTagName("li").length,i=84;"thumbnail-containerpop"==e&&(i=71),a>6&&(window.lilength=parseInt(a-6)*i);var s=getComputedTranslateY(n);"down"==t?-window.lilength<parseInt(s)&&(s=parseInt(s-i)):0!=parseInt(s)&&(s=parseInt(s+i)),document.getElementById(e).style.transform="translate(0px, "+s+"px)"}function slide1(e,t){if(e.match(/thumbnail-container[0-9]/)){var n=document.getElementById(e).getElementsByTagName("ul")[0],a=-90*(n.getElementsByTagName("li").length-4),i=window.getComputedStyle(n),s=new WebKitCSSMatrix(i.webkitTransform).m41;"left"==t?0!=s&&(s+=90,n.style.transform="translate("+s+"px,0px)"):s!=a&&(s-=90,n.style.transform="translate("+s+"px,0px)")}}if("category"==pagenameqw||"search"==pagenameqw||"catindex"==pagenameqw){var wrpcont06=document.getElementsByClassName("pdp_hgt387"),height06="420";for(i=0;i<wrpcont06.length;i++)if(isOverflowed(wrpcont06[i],height06)){var readtext='<span class="pdp_rm clr5 cp position-absolute" id="d'+wrpcont06[i].id+'" onclick="return viewdetail(\''+wrpcont06[i].id+"'); _gaq.push(['b._trackEvent','Body','Viewdetail/productpage','pos-"+i+"']);recEvent('Body','Viewdetail/productpage','pos-"+i+"');\">read more...</span>",child=document.getElementById(wrpcont06[i].id);child.insertAdjacentHTML("beforeend",readtext)}}function on_video_mouseover(e){$("#pvdo"+e).show(),$("#zoom"+e).hide()}function viewdetail(e){document.getElementById(e);document.getElementById("d"+e).style.display="none",document.getElementById(e).classList.remove("pdp_hgt387")}if($(".smlimg").on("hover",(function(){$(".smlimg").removeClass("bdr20"),$(this).addClass("bdr20")})),"testimonial"==pagenameqw){function getRatingAjax(e,t,n){$.ajax({type:"POST",url:"/cgi/d73_vmore_rating.php",data:{input_supplier_id:gluser_id,sort_type:sort_type,tmpl_path:PC_CLNT_TMPL_PATH,tmpl_style_Id:PC_CLNT_STYLE_ID,limit:e,strt:t},success:function(e){1==n?$("#commentHTML").html(e):$("#commentHTML").append(e),$(".loader").hide()}}).done((function(){total_cnt-(t-1)>20?$(".view_more").removeClass("d-none "):$(".view_more").addClass("d-none ")}))}function getRatings(){getRatingAjax(parseInt($(".rvw_sec").last().attr("id"))+20,parseInt($(".rvw_sec").last().attr("id"))+1,0)}$(".FM_sortng").change((function(){sort_type=$("#sortValue").val();$(".loader").show(),getRatingAjax(20,1,1)}))}if("aboutus"==pagenameqw||"quality"==pagenameqw||"infrastructure"==pagenameqw||"customprofile"==pagenameqw||"awards"==pagenameqw||"testimonial"==pagenameqw||"news"==pagenameqw||"job"==pagenameqw){var driftImages=$(".drift-demo-trigger");function setZoomContainer(e,t,n,a){var i=0,s=a;if($("#"+t).parent().parent().hasClass("location-images")){var r=document.querySelector("#img_id"+e);$("#xzoom"+e).css("left",255),n(s)}else{(r=document.querySelector("#img_id"+e)).onload=function(){i=r.clientWidth,$("#xzoom"+e).css("right",i+25),n(s)}}}function showCont(e){$(driftImages[e]).mouseover((function(){$(document.querySelector("#"+$(driftImages[e]).parent().parent().siblings(".xzoom")[0].id)).removeClass("disn"),$(document.querySelector("#"+$(driftImages[e]).parent().parent().siblings(".xzoom")[0].id)).addClass("disb")})),$(driftImages[e]).mouseout((function(){$(document.querySelector("#"+$(driftImages[e]).parent().parent().siblings(".xzoom")[0].id)).removeClass("disb"),$(document.querySelector("#"+$(driftImages[e]).parent().parent().siblings(".xzoom")[0].id)).addClass("disn")}))}cnt_array=Array(driftImages.length).fill(0)}var flag=0;if(null!=typeof testimonial&&null!=testimonial&&null!=typeof rtng_dsplay_flag&&null!=rtng_dsplay_flag&&null!=typeof suplyr_rtng_flag&&null!=suplyr_rtng_flag&&null!=typeof sort_type&&null!=sort_type&&(flag=1),"category"==pagenameqw||"sitemap"==pagenameqw){function showmore(category,id,server,c_el){if("string"==typeof id||id instanceof String){var myArray=id.split("_"),num=myArray[1],new_num=parseInt(num)+1,str_idx=40+40*(num-1),end_idx=str_idx+39;$.ajax({type:"GET",url:"/cgi/d73_showmore_1.php",data:{start:str_idx,end:end_idx,cat_idx:category,server:server,id:num,action:"showmore",domain_alias:domain_alias},success:function(result){gtEle("paginate").innerHTML+=result;var getEnqData=eval(document.getElementById("enqDataref").innerHTML);if(dataref1=dataref1.concat(getEnqData),$("#enqDataref").remove(),end_idx>=t_prod_count)gtEle(id).style.display="none";else{var new_id="showmore_"+new_num;gtEle(id).setAttribute("id",new_id)}}}).done((function(){var e=document.getElementsByClassName("he06");for(i=40;i<e.length;i++)if(isOverflowed(e[i],"420",i)){var t='<span class="viewDetail cp fnt5 read_more" id="d'+e[i].id+'" onclick="return viewdetail(\''+e[i].id+"'); _gaq.push(['b._trackEvent','Body','Viewdetail/productpage','pos-"+i+"']);recEvent('Body','Viewdetail/productpage','pos-"+i+"');\">...Read More</span>";document.getElementById(e[i].id).insertAdjacentHTML("beforeend",t)}}))}else{var l_id=category.toString();category="list_".concat(l_id);var el=c_el.firstElementChild.firstElementChild.id,myArray=el.split("_"),num=myArray[1],new_num=parseInt(num)+1,str_idx=40+20*(num-1),end_idx=str_idx+19,t_p_cnt=c_el.nextElementSibling.textContent,v_more=c_el.firstElementChild.firstElementChild;$.ajax({type:"GET",url:"/cgi/d73_showmore_1.php",data:{cat_idx:id,server:server,action:"site_view",domain_alias:domain_alias,start:str_idx,end:end_idx},success:function(e){if(gtEle(category).innerHTML+=e,end_idx>=t_p_cnt)v_more.style.display="none";else{var t="showmore_"+new_num;v_more.setAttribute("id",t)}}}).done((function(){var e=document.getElementsByClassName("he06");for(i=40;i<e.length;i++)if(isOverflowed(e[i],"420",i)){var t='<span class="viewDetail cp fnt5 read_more" id="d'+e[i].id+'" onclick="return viewdetail(\''+e[i].id+"'); _gaq.push(['b._trackEvent','Body','Viewdetail/productpage','pos-"+i+"']);recEvent('Body','Viewdetail/productpage','pos-"+i+"');\">...Read More</span>";document.getElementById(e[i].id).insertAdjacentHTML("beforeend",t)}}))}}function gtEle(e,t){return"class"==t?document.getElementsByClassName(e):document.getElementById(e)}}function showprd(e){for(var t=$(".prd"),n=0,a=0;a<t.length;a++){if(e.parentElement.nextElementSibling.id==t[a].id&&!t[a].classList.contains("d-none")){show_curr(e),n=1;break}if(!t[a].classList.contains("d-none")){$(".prd")[a].parentElement.classList.remove("actv"),$(".prd")[a].classList.add("d-none"),null!=$(".prd")[a].nextElementSibling&&$(".prd")[a].nextElementSibling.classList.add("d-none"),$(".prd")[a].previousElementSibling.childNodes[1].childNodes[0].classList.add("d-none"),$(".prd")[a].previousElementSibling.childNodes[1].childNodes[1].classList.remove("d-none"),show_curr(e),n=1;break}}0==n&&show_curr(e)}function show_curr(e){$(e.childNodes[0]).hasClass("d-none")?(e.parentElement.parentElement.classList.add("actv"),e.parentElement.nextElementSibling.classList.remove("d-none"),e.childNodes[0].classList.remove("d-none"),e.childNodes[1].classList.add("d-none"),e.parentElement.parentElement.lastChild.classList.remove("d-none")):(e.parentElement.parentElement.classList.remove("actv"),e.parentElement.nextElementSibling.classList.add("d-none"),e.childNodes[1].classList.remove("d-none"),e.childNodes[0].classList.add("d-none"),e.parentElement.parentElement.lastChild.classList.add("d-none"))}function slide1(e,t){if(e.match(/thumbnail-container[0-9]/)){var n=document.getElementById(e).getElementsByTagName("ul")[0],a=-95*(n.getElementsByTagName("li").length-4),i=window.getComputedStyle(n),s=new WebKitCSSMatrix(i.webkitTransform).m41;"left"==t?0!=s&&(s+=95,n.style.transform="translate("+s+"px,0px)"):s!=a&&(s-=95,n.style.transform="translate("+s+"px,0px)")}}function changeImages1(){if(document.images){document[changeImages1.arguments[0]].src=changeImages1.arguments[1],document[changeImages1.arguments[0]].setAttribute("data-bimg",changeImages1.arguments[1]),document[changeImages1.arguments[0]].setAttribute("dataimg",changeImages1.arguments[1])}c_el=changeImages1.arguments[2],el=changeImages1.arguments[0],c_el.parentElement.classList.contains("pdp_vdo")?document.getElementsByClassName(el)[0].childNodes[0].classList.remove("d-none"):document.getElementsByClassName(el)[0].childNodes[0].classList.add("d-none")}$(".t_nl").mouseover((function(){for(var e=this.parentElement.childNodes.length,t=this.parentElement.childNodes,n=0;n<e;n++)t[n].classList.contains("actv_thmb")&&t[n].classList.remove("actv_thmb");this.classList.add("actv_thmb")}));var formloaded=0;"category"!=pagenameqw&&(CAT_NAME=""),0==formloaded&&($.ajaxSetup({cache:!0}),$.getScript("https://tdw.imimg.com/template-tdw/cent_dynamic/dyn_isq/im-imvc-rw-cf.js").done((function(){$.getScript(central_path+"cent_dynamic/dyn_isq/dyn_image_enq_form_4_min.js").done((function(){loadFormcss(),"homepage"!=pagenameqw&&"category"!=pagenameqw&&"search"!=pagenameqw&&"catindex"!=pagenameqw||setTimeout((function(){show_form_onpage()}),100),null!=typeof rtng_dsplay_flag&&1==rtng_dsplay_flag&&(suplyr_rtng_flag,1)&&suplyr_rtng_flag>0&&"testimonial"!=pagenameqw&&"enquiry"!=pagenameqw&&"thankyou"!=pagenameqw&&"notfound"!=pagenameqw&&1==flag&&$.ajax({type:"POST",url:"/cgi/d73_rating_footer.php",data:{glusrId:gluser_id,pagename1:pagenameqw,testmonialLink:testimonial,tmpl_path:PC_CLNT_TMPL_PATH,stylid:PC_CLNT_STYLE_ID,sort_type:sort_type},success:function(e){$("#rating_ajx").html(e)}}),$.getScript(central_path+"cntryintlTelInput_new4.js").done((function(){$.getScript(central_path+"cent_dynamic/dyn_isq/Sms_valiadation_dyn_isq_min.js"),"franchisee"!=pagenameqw?($("#mobile-number_footer").intlTelInputs({}),$.getScript(central_path+"d0073/dev/footer-form_2.js")):($("#mobile-number_fran").intlTelInputs({}),$.getScript(central_path+"d0073/dev/footer-form_2.js"),$.getScript(central_path+"d0067/dev/franchisee.js")),$(".mobile-number").intlTelInputs({}),"job"==pagenameqw&&($.getScript(central_path+"d0073/dev/job.js"),$(".mobile-number_job").intlTelInputs({})),""==srchNoResultPage&&""===document.getElementById("searchnotfound").innerHTML&&$.ajax({type:"POST",url:"/cgi/dyn_isq/multi_img_dyn_isq_2.php",data:{glid:gluser_id,stlyid:PC_CLNT_STYLE_ID,tmpl_path:PC_CLNT_TMPL_PATH,cat_name:CAT_NAME,central_path:central_path,pagetypeName:pagenameqw,compName:CompanyName},success:function(e){$("#searchnotfound").html(e)}}).done((function(){$.getScript(central_path+"cent_dynamic/dyn_isq/dyn_isq_form10_min.js"),$.getScript(central_path+"cent_dynamic/suggest_new_product_dyn_1_min.js"),$("#mobile-number_zoom_dataform").intlTelInputs({}),$("#mobile-number1_zoom_dataform").intlTelInputs({}),get_ip()})),formloaded=1})),$.getScript(cent_path+"optform/function_10_min.js").done((function(){""!=pns_no&&tollfree()}))}))})));var backclass='.sprt{background-image:url("https://tdw.imimg.com/template-tdw/d0073/images/sprite2.png")}';backclass+=".intl-tel-input .flag_ctry{background-image:url(https://tdw.imimg.com/template-tdw/cntry_flags.png)} ";var styleele=document.createElement("style");if(styleele.type="text/css",document.getElementsByTagName("head")[0].appendChild(styleele),styleele.styleSheet?styleele.styleSheet.cssText=backclass:styleele.innerHTML=backclass,"aboutus"==pagenameqw||"quality"==pagenameqw||"infrastructure"==pagenameqw||"customprofile"==pagenameqw||"awards"==pagenameqw||"testimonial"==pagenameqw||"news"==pagenameqw||"job"==pagenameqw){var driftImages=$(".drift-demo-trigger");function setZoomContainer(e,t,n,a){var i=0,s=a;if($("#"+t).parent().parent().hasClass("location-images")){document.querySelector("#img_id"+e);$("#xzoom"+e).css("right",280),$("#xzoom"+e).css("width",300),$("#xzoom"+e).css("height",300),n(s)}else{i=document.querySelector("#img_id"+e).parentElement.clientWidth,$("#xzoom"+e).css("right",i+30),n(s)}}function showCont(e){$(driftImages[e]).mouseover((function(){$(document.querySelector("#"+$(driftImages[e]).siblings(".xzoom")[0].id)).removeClass("disn"),$(document.querySelector("#"+$(driftImages[e]).siblings(".xzoom")[0].id)).addClass("disb")})),$(driftImages[e]).mouseout((function(){$(document.querySelector("#"+$(driftImages[e]).siblings(".xzoom")[0].id)).removeClass("disb"),$(document.querySelector("#"+$(driftImages[e]).siblings(".xzoom")[0].id)).addClass("disn")}))}cnt_array=Array(driftImages.length).fill(0),$.getScript("https://utils.imimg.com/imsrchui/js/zoomdir.js").done((function(){for(let n=0;n<driftImages.length;n++){var e=$(driftImages[n]).attr("id"),t=e.substr(6,2);setZoomContainer(t,e,showCont,n),$("#img_id"+t).mouseover((function(e){var t=$(e.target).attr("id").substr(6,2);0==cnt_array[t]&&(_gaq.push(["b._trackEvent","Body",`ZoomDrift/${pagenameqw}`,`${PC_CLNT_TMPL_PATH}`]),recEvent("Body",`ZoomDrift/${pagenameqw}`,`${PC_CLNT_TMPL_PATH}`),cnt_array[t]++)})),new Drift(driftImages[n],{paneContainer:document.querySelector("#"+$(driftImages[n]).siblings(".xzoom")[0].id),inlinePane:600,zoomFactor:3,inlineOffsetY:-85,containInline:!0,hoverBoundingBox:!0})}}))}if("aboutus"==pagenameqw||"quality"==pagenameqw||"infrastructure"==pagenameqw||"customprofile"==pagenameqw||"awards"==pagenameqw||"testimonial"==pagenameqw||"news"==pagenameqw||"job"==pagenameqw){var styles="";styles+='.xzoom{position:absolute;height:430px;width:500px;border:1px solid #d1d0d0;background-color:#fff;z-index:1}.disn{display:none}.disb{display:block}@keyframes drift-fadeZoomIn{0%{transform:scale(1.5);opacity:0}100%{transform:scale(1);opacity:1}}@keyframes drift-fadeZoomOut{0%{transform:scale(1);opacity:1}15%{transform:scale(1.1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes drift-loader-rotate{0%{transform:translate(-50%,-50%) rotate(0)}50%{transform:translate(-50%,-50%) rotate(-180deg)}100%{transform:translate(-50%,-50%) rotate(-360deg)}}@keyframes drift-loader-before{0%,100%,50%{transform:scale(1)}10%,40%{transform:scale(1.2) translateX(6px)}25%{transform:scale(1.3) translateX(8px)}60%,90%{transform:scale(.8) translateX(6px)}75%{transform:scale(.7) translateX(8px)}}@keyframes drift-loader-after{0%,100%,50%{transform:scale(1)}10%,40%{transform:scale(1.2) translateX(-6px)}25%{transform:scale(1.3) translateX(-8px)}60%,90%{transform:scale(.8) translateX(-6px)}75%{transform:scale(.7) translateX(-8px)}}@-webkit-keyframes drift-fadeZoomIn{0%{-webkit-transform:scale(1.5);opacity:0}100%{-webkit-transform:scale(1);opacity:1}}@-webkit-keyframes drift-fadeZoomOut{0%{-webkit-transform:scale(1);opacity:1}15%{-webkit-transform:scale(1.1);opacity:1}100%{-webkit-transform:scale(.5);opacity:0}}@-webkit-keyframes drift-loader-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(-180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(-360deg)}}@-webkit-keyframes drift-loader-before{0%,100%,50%{-webkit-transform:scale(1)}10%,40%{-webkit-transform:scale(1.2) translateX(6px)}25%{-webkit-transform:scale(1.3) translateX(8px)}60%,90%{-webkit-transform:scale(.8) translateX(6px)}75%{-webkit-transform:scale(.7) translateX(8px)}}@-webkit-keyframes drift-loader-after{0%,100%,50%{-webkit-transform:scale(1)}10%,40%{-webkit-transform:scale(1.2) translateX(-6px)}25%{-webkit-transform:scale(1.3) translateX(-8px)}60%,90%{-webkit-transform:scale(.8) translateX(-6px)}75%{-webkit-transform:scale(.7) translateX(-8px)}}.drift-zoom-pane{background:rgba(255,255,255,.5);transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0)}.drift-zoom-pane.drift-opening{animation:180ms ease-out drift-fadeZoomIn;-webkit-animation:180ms ease-out drift-fadeZoomIn}.drift-zoom-pane.drift-closing{animation:210ms ease-in drift-fadeZoomOut;-webkit-animation:210ms ease-in drift-fadeZoomOut}.drift-zoom-pane.drift-inline{position:absolute;width:150px;height:150px;border-radius:75px;box-shadow:0 6px 18px rgba(0,0,0,.3)}.drift-loading .drift-zoom-pane-loader{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);width:66px;height:20px;animation:1.8s linear infinite drift-loader-rotate;-webkit-animation:1.8s linear infinite drift-loader-rotate}.drift-zoom-pane-loader:after,.drift-zoom-pane-loader:before{content:"";display:block;width:20px;height:20px;position:absolute;top:50%;margin-top:-10px;border-radius:20px;background:rgba(255,255,255,.9)}.drift-zoom-pane-loader:before{left:0;animation:1.8s linear infinite drift-loader-before;-webkit-animation:1.8s linear infinite drift-loader-before}.drift-zoom-pane-loader:after{right:0;animation:1.8s linear -.9s infinite drift-loader-after;-webkit-animation:1.8s linear -.9s infinite drift-loader-after}.drift-bounding-box{background-image:url(https://tdw.imimg.com/template-tdw/zoomhoverback.gif)}.zoom-cont{position:relative;display:inline-block;margin-left:40px}.fig{margin:0;cursor:pointer}';var styleSheet=document.createElement("style");styleSheet.type="text/css",styleSheet.innerText=styles,document.head.appendChild(styleSheet)}