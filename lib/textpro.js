const co = require('cheerio');
const request = require('request');
const create = async (linkk,text1,text2) => {
return request.post({
 url: `${linkk}`,
 headers: {
  'Content-Type': 'application/x-www-form-urlencoded'
 },
 body: `text_1=${text1}&text_2=${text2}&login=OK`
}, (e,r,b) => {
  let $ = co.load(b);
  $(".thumbnail").find("img").each(function() {
   let h = $(this).attr("src");
    var result = "https://photooxy.com"+h;
   console.log("https://photooxy.com"+h);
  });
});
}

module.exports = { create }