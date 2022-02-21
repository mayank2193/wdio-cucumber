# wdio-cucumber

### Environment Setup

1. Global Dependencies
    * Install [Node](https://nodejs.org/en/download/)
    ```
    $ npm install
    ```
2. Project Dependencies
    * checkout the repository
    * Check that packages are available
    ```
    $ cd wdio-cucumber
    ```
    **LambdaTest Authentication Credentials:** Make sure you have your LambdaTest credentials with you to run test automation scripts with Jest on LambdaTest Selenium Grid. You can obtain these credentials from the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/) or through [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile).

Set LambdaTest Username and Access Key in environment variables.

* For Linux/macOS:
`export LT_USERNAME="YOUR_USERNAME"
export LT_ACCESS_KEY="YOUR ACCESS KEY"`

* For Windows:
`set LT_USERNAME="YOUR_USERNAME"
set LT_ACCESS_KEY="YOUR ACCESS KEY"`
    
### Running Tests

```
To run single test on Lambdatest
    $ npm run single
    
To run On-Prem ChromeDriver
    $ npm run onprem    

```    
