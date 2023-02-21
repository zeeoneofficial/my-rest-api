const lower = /[aiueo]/g
const upper = /[AIUEO]/g

const Vokal = (str,huruf) => new Promise((resolve, reject) => {
	var huruf_kecil = huruf.toLowerCase();
	var huruf_gede = huruf.toUpperCase();
    const result_text = str.replace(lower, huruf_kecil).replace(upper, huruf_gede)
        resolve({
        	text: str,
            result_text
       })
})

module.exports = Vokal