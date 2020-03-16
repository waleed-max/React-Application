module.exports = {
    'My first test case'(browser) {

        browser.url('http://localhost:3000/Repositories/')
        .waitForElementVisible('.search-box-input')
        .waitForElementVisible('body')
        .waitForElementVisible('.navbar')
        .assert.containsText(".navbar", "Overview")
        .assert.containsText(".search-box-input", "")
        .assert.containsText('.MuiCardContent-root', 'Spoon-Knife')
        //.setValue('input[type=search]', 'nightwatch')
    }
  }

 