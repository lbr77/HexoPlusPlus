function ajaxObject(){var e;try{e=new XMLHttpRequest}catch(t){try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){return sweetAlert("糟糕","你的浏览器不能上传文件","error"),!1}}}return e}!function(){setTimeout((function(e){if("test"!==e){var t=window.setTimeout;window.setTimeout=function(e,n){var o=Array.prototype.slice.call(arguments,2);return t(e instanceof Function?function(){e.apply(null,o)}:e,n)}}}),0,"test");var e=setInterval((function(t){if(clearInterval(e),"test"!==t){var n=window.setInterval;window.setInterval=function(e,t){var o=Array.prototype.slice.call(arguments,2);return n(e instanceof Function?function(){e.apply(null,o)}:e,t)}}}),0,"test")}();var t=0;function start(){if(0==t)document.querySelectorAll(".cont_letras > p")[0].style.left="200px",document.querySelectorAll(".cont_letras > p")[1].style.left="-320px",document.querySelectorAll(".cont_letras > p")[2].style.left="200px",setTimeout((function(){document.querySelector(".cont_join").className="cont_join cont_join_form_act"}),1e3),t++,document.getElementById("butttt").innerHTML="提交配置";else{document.getElementById("butttt").innerHTML="配置上传中";let n=""==document.getElementById("hpp_domain").value?window.location.host:document.getElementById("hpp_domain").value,o=""==document.getElementById("hpp_userimage").value?"https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1612610340000.jpg":document.getElementById("hpp_userimage").value,p=""==document.getElementById("hpp_title").value?"HexoPlusPlus小飞机":document.getElementById("hpp_title").value,u=""==document.getElementById("hpp_usericon").value?"https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/icon.png":document.getElementById("hpp_usericon").value,l=""==document.getElementById("hpp_cors").value?"*":document.getElementById("hpp_cors").value,a=""==document.getElementById("hpp_autodate").value?"False":document.getElementById("hpp_autodate").value,c=""==document.getElementById("hpp_OwO").value?"https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/assets/list.json":document.getElementById("hpp_OwO").value,m=""==document.getElementById("hpp_back").value?"https://cdn.jsdelivr.net/gh/ChenYFan-Tester/DailyGet@gh-pages/bingpic/bing.jpg":document.getElementById("hpp_back").value,d=""==document.getElementById("hpp_lazy_img").value?"https://cdn.jsdelivr.net/gh/ChenYFan/blog@master/themes/fluid/source/img/loading.gif":document.getElementById("hpp_lazy_img").value,i=""==document.getElementById("hpp_highlight_style").value?"github":document.getElementById("hpp_highlight_style").value,h=""==document.getElementById("hpp_color").value?"azure":document.getElementById("hpp_color").value,_=""==document.getElementById("hpp_bg_color").value?"black":document.getElementById("hpp_bg_color").value,g=""==document.getElementById("hpp_theme_mode").value?"light":document.getElementById("hpp_theme_mode").value,r=""==document.getElementById("hpp_page_limit").value?"10":document.getElementById("hpp_page_limit").value;const s={hpp_domain:n,hpp_userimage:o,hpp_title:p,hpp_usericon:u,hpp_cors:l,hpp_githubdoctoken:document.getElementById("hpp_githubdoctoken").value,hpp_githubimagetoken:document.getElementById("hpp_githubimagetoken").value,hpp_githubdocusername:document.getElementById("hpp_githubdocusername").value,hpp_githubdocrepo:document.getElementById("hpp_githubdocrepo").value,hpp_githubdocroot:document.getElementById("hpp_githubdocroot").value,hpp_githubdocbranch:document.getElementById("hpp_githubdocbranch").value,hpp_githubimageusername:document.getElementById("hpp_githubimageusername").value,hpp_githubimagerepo:document.getElementById("hpp_githubimagerepo").value,hpp_githubimagepath:document.getElementById("hpp_githubimagepath").value,hpp_githubimagebranch:document.getElementById("hpp_githubimagebranch").value,hpp_autodate:a,hpp_account_identifier:document.getElementById("hpp_account_identifier").value,hpp_script_name:document.getElementById("hpp_script_name").value,hpp_CF_Auth_Key:document.getElementById("hpp_CF_Auth_Key").value,hpp_Auth_Email:document.getElementById("hpp_Auth_Email").value,hpp_twikoo_envId:document.getElementById("hpp_twikoo_envId").value,hpp_OwO:c,hpp_back:m,hpp_lazy_img:d,hpp_highlight_style:i,hpp_color:h,hpp_bg_color:_,hpp_theme_mode:g,hpp_page_limit:r};var e=ajaxObject();e.open("post","/hpp/admin/api/upconfig",!0),e.setRequestHeader("Content-Type","application/json;charset=UTF-8"),e.onreadystatechange=function(){4==e.readyState&&(200==e.status?(setTimeout((function(){document.querySelector(".cont_join").className="cont_join cont_join_form_act cont_join_finish"}),500),t++,document.querySelector(".cont_form_join").style.bottom="-420px",setTimeout(window.location.reload(),5e3)):document.getElementById("butttt").innerHTML="配置上传失败，请重试")},e.send(JSON.stringify(s))}}