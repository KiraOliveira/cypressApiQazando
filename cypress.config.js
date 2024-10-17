const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    "baseUrl": 'https://automationpratice.com.br/',
  },
  "video": true,
  "viewportWidth": 1366,
  "viewportHeight": 768,
  "defaultCommandTimeout": 10000
});
