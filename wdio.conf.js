const {join} = require ('path')
const allure = require('allure-commandline')

exports.config = {
    //hostname: 'localhost',
    //port: 4723,
    //path: '/wd/hub',
    services: ['browserstack'],
    user: 'willianvitorino_oDF6up',
    key: 'm6jEHq3sAFRzPowbZ5kT',
    specs: [
        './test/specs/*.spec.js',

    ],
    mochaOpts: {
        timeout: 60000
    },
    framework: 'mocha',
    capabilities: [{
        'app' : 'bs://4d1d08142262e6c7d9f573e369ddd9a1b3e1a49e',
        'device' : 'Samsung Galaxy S20',
        'os_version' : '10.0',
        'project' : 'Meu primeiro projeto',
        'build' : '1',
        'name': 'first_test'
    }],
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }]],
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        if (error) {
          await browser.takeScreenshot();
        }
      }
}