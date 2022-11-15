const {join} = require ('path')
const allure = require('allure-commandline')

exports.config = {
    path: '/wd/hub',
    services: ['browserstack'],
    user: 'willianvitorino_PsvnRt',
    key: 'ebsRFpVXmxi2UbYbPwzE',
    specs: [
        './test/specs/*.spec.js',

    ],
    suites: {
        products:[
        './test/specs/products.spec.js'
        ]
    },
    framework: 'mocha',
    capabilities: [{
        'app' : 'bs://aef3e976f1acd96c7bb022f0381f98cc79d90e7d',
        'device' : 'iPhone 12 Pro',
        'os_version' : '16',
        'project' : 'Teste Device IOS',
        'build' : 'EBAC Test',
        'name': 'ebac_tests'
    }],
    waitForTimeout: 20000,
}