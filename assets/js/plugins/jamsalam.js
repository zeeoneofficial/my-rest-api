let text_el=document.querySelector('div#browser_info')
let hSalam=document.querySelector('div#browser_sholat')
setInterval(()=>{var d=new Date();const jam=d.getHours().toString().padStart(2,0)
const menit=d.getMinutes().toString().padStart(2,0)
const detik=d.getSeconds().toString().padStart(2,0)
if(hSalam<4){hSalam.innerHTML="Selamat Malam"}else if(hSalam<11){hSalam.innerHTML="Selamat Pagi"}else if(hSalam<16){hSalam.innerHTML="Selamat Siang"}else if(hSalam<20){hSalam.innerHTML="Selamat Sore"}
else{hSalam.innerHTML="Zeeone Ofc";}
text_el.innerHTML=jam+":"+menit+":"+detik},250)