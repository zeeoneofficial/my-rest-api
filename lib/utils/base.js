const base64  = require('base-64')
const base32  = require('base32')

const Base = (type, text) => new Promise((resolve, reject) => {
    switch (type) {
        case 'b64enc':
            const data1 = base64.encode(text)
            resolve({
            type: 'base64',
            string: text,
            encode: data1
            })
            break
        case 'b64dec':
            const data2 = base64.decode(text)
            resolve({
            type: 'base64',
            enc: text,
            string: data2
            })
            break
        case 'b32enc':
            const data3 = base32.encode(text)
            resolve({
            type: 'base32',
            string: text,
            encode: data3
            })
            break
        case 'b32dec':
            const data4 = base32.decode(text)
            resolve({
            type: 'base32',
            enc: text,
            string: data4
            })
            break
        default:
            break
    }
})

module.exports = Base