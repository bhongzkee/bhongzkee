"use strict";
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require("protractor-beautiful-reporter");
var jasmineReporters = require('jasmine-reporters');
var DescribeFailureReporter = require('protractor-stop-describe-on-failure');

exports.config = {

    framework: 'jasmine',
    jasmineNodeOpts:
    {
        showColors: true,
        displaySpecDuration: true,
        print: () => { },
        defaultTimeoutInterval: 240000,
        verbose: true,
        includeStackTrace: false,
    },
    allScriptsTimeout: 10000,
    directConnect: true,
    // chromeDriver: './chromedriver',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://google.com',
    capabilities: {
        shardTestFiles: true,
        maxInstances: 1,
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--headless',
                '--disable-gpu',
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--log-level=3',
                '--disable-browser-side-navigation',
                '--enable-automation',
                '--disable-infobars',
                '--window-size=1920,1080',
                '--disable-web-security',
                '--always-authorize-plugins',
                "--use-fake-ui-media-stream",
                "--use-fake-device-for-media-stream"
            ],
            w3c: false,
        }
    },

    onPrepare: function () {
        // browser.manage().window().setSize(1600, 1000);
        // browser.manage().window().setSize(1920, 1080);
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true; // for non-angular websites


        afterAll(function(){
            browser.close();
        })    

        // jasmine.getEnv().addReporter(DescribeFailureReporter(jasmine.getEnv()));
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: "reports/ui",
            jsonsSubfolder: 'jsons',
            screenshotsSubfolder: 'images',
            excludeSkippedSpecs: false,
            takeScreenShotsOnlyForFailedSpecs: true,
            docTitle: "UI -Test Report",
            docName: "report.html",
            preserveDirectory: false
        }).getJasmine2Reporter())

        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: false,
            consolidate: true,
            savePath: 'reports/ui',
            filePrefix: 'ui',
            suppressDisabled: true
        }));

        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'specs',
            colors: {
                enabled: true
            },
            prefixes: {
                successful: 'PASSED - ',
                failed: 'FAILED - '
            }
        }));

    },

    params: {
        login: {
            email: 'default',
            password: 'default'
        },
        report: "test_report",

    },

    suites: {
        ALL: [
            'specs/sampleUiTest.js',
        ],
        
        sampleUiTest: 'specs/sampleUiTest.js',
        sampleApiTest: 'specs/sampleApiTest.js',
    }

}


