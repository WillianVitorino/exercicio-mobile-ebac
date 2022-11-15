require('dotenv').config()

let specsConf = process.env.PLATFORM == 'android' ? {
    specs: [
        './test/specs/registerProduct.spec.js'
]
} : {
    specs: [
        './test/specs/products.spec.js',
    ]
}

module.exports = { specsConf }