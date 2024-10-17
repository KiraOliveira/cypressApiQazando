const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    "baseUrl": 'https://automationpratice.com.br/',
  },
  projectId: "8scdkp",
  "video": true,
  "viewportWidth": 1366,
  "viewportHeight": 768,
  "defaultCommandTimeout": 10000
});
