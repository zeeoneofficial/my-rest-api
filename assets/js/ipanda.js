window.setTimeout("getip()",1000);function getip(){var xhr=new XMLHttpRequest();var url='https://arnz-api.herokuapp.com/cekip';xhr.onloadend=function(){data=JSON.parse(this.responseText);document.getElementById("ipanda").textContent=data.response
document.getElementById("userhit").textContent=data.userhit};xhr.open("GET",url,true);xhr.send();}
