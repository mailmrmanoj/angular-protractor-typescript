export let config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        './e2e/**/*.spec.js'
    ],
    baseUrl: 'http://localhost:3000/'
}