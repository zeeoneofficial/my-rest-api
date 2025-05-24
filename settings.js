const fs = require('fs')

global.creator = 'DREAM STALKER'// yourname
global.MONGO_DB_URI =  "mongodb+srv://andikapratama:47EG1RzPPd1RLh8b@cluster0.pyppely.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" //database mongodb 
global.ACTIVATION_TOKEN_SECRET = "shafe//2025" //isi apa aja bebas
global.your_email = "" //email
global.email_password = "" //application password email
global.limitCount = 100
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
