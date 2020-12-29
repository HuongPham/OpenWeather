# Demonstration Scripts
This repository contains demo scripts for web application automation test using Cypress and test desgin documentation


## Run automation test
To run test for webapp, following these steps:
    * Run these commands to install:
        ``` cd automation_tests ```
        ``` yarn install ```
    * Run one of this commands to execute test on a specific browser type
        ``` yarn cypress run --browser chrome```
        ``` yarn cypress run --browser firefox```
    * Run this command to generate cucumber test report:
        ``` yarn generate-report ```

### Test report folder
    * Report file in folder `automation_tests/report/cucumber_report.html`
    * Video file in folder `automation_tests/report/videos`
    
  *NOTE*: At the moment, there is only one report folder for all browser type testing, so need to generate report and save it separately after each run of one browser type.


### CI/CD integration 
  Be able to run test on one of the CI Provider by following [this guide](https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI)


### Cloud intergration
  Be able to setup and run test on Browser Stack by following config in [this link](https://www.browserstack.com/docs/automate/cypress)


### Run test in parallel
  Each `.feature` file will be run on a machine, and will run parallel if we setup multiple machines on CI. For futher information, please check [here](https://docs.cypress.io/guides/guides/parallelization.html#Overview)

  To run test parallel on different environments(os/browser), we can group test run on CI by these commands:

    `yarn cypress run --record --group Windows/Chrome-87 --browser chrome`
    `yarn cypress run --record --group Mac/Firefox --browser firefox`










