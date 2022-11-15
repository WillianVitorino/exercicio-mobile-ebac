require('dotenv').config()

const { generalConf } = require('./general.conf')

let capabilities = process.env.PLATFORM === 'android' ? {
    capabilities: [{
        app : `${process.env.ANDROID_APP_ID}`,
        device : 'Samsung Galaxy S20',
        os_version : '10.0',  
        project : 'Curso Ebac - Mobile Android',
        build : '1.0',
        name: 'test_login_loja_ebac'
    }]
} : {
    capabilities: [{
        app: `${process.env.IOS_APP_ID}`,
        project: "Curso Ebac - Mobile IOS",
        build: 'EBAC Test iOS',
        name: 'ebac_test',
        device: 'iPhone 12 Pro',
        os_version: "14",
        'browserstack.debug': true
    }]
}

let bsConf = {
    ...generalConf,
    ...capabilities,
    user: process.env.BS_USER,
    key: process.env.BS_KEY,
    services: ['browserstack']
}

module.exports = { bsConf }