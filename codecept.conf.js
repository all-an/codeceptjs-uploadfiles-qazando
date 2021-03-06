const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
const { setWindowSize } = require('@codeceptjs/configure');

setWindowSize(1920, 1080);

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://automationpractice.com/index.php',
      show: true,
      browser: 'firefox'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-uploadfiles-qazando'
}