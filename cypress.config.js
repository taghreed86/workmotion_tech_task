import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import path from "path";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    baseUrl: "https://beta.workmotion.com",
    supportFile: false,
    setupNodeEvents: async (on, config) => {
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: [
          path.resolve("cypress/support/step_definitions/**/*.js"), 
        ],
      });

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
