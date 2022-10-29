const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://apple.com",
    "hideXHR": true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
