const {join} = require ('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/*.spec.js',

    ],
    framework: 'mocha',
    capabilities: [{
            "platformName": "Android",
            "appium:platformVersion": "11.0",
            "appium:deviceName": "ebac-mobile",
            "appium:automationName": "UiAutomator2",
            "appium:app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
            "appium:appWaitActivity": "com.wdiodemoapp.MainActivity"
    }]
}