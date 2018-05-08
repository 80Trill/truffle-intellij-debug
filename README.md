# Using Intellij Debugger for Truffle Testsuites

Currently when it comes to debugging smart contracts in Solidity, developers must use a plethora of tools to test and debug their code. Unfortunately this is less than desirable, as it can cause unneccesary friction and inefficienncy in ones workflow. By utilizing some of the configurations inside of Intellij, we have found a way to debug Truffle Javascript test suites inside of the IDE. This will allow you to utilize the built in command line, instead of repeatedly switching back and fourth between the two. As you can see inside of this example project, this will prove to be invaluable when it comes to preliminary testing of any smart contract.




## Getting Started

The following instructions will allow you to run a small test suite for demonstration purposes. There is certainly room for improving on the setup, but for now this will open the floor for improving the development process for Solidity Smart Contracts.



### Prerequisites

This requires an up-to-date installation of the Intellij IDE, the Intellij-Solidity plugin, and NPM.   

```
https://www.jetbrains.com/idea/
https://plugins.jetbrains.com/plugin/9475-intellij-solidity
```



### The Files

Navigate to the project root and install the dependencies via NPM.

```
npm install
```

There is a directory located which contains the scripts used to run the debugger. As well as a modified "truffle-config.js"

```
"truffle-intellij-debug/scripts/setup.sh"
"truffle-intellij-debug/scripts/test.sh"

"truffle-intellij-debug/truffle-config.js"
```


### Applying the Settings

Inside of edit configurations, you will need to create a new run/debug configuration.

![alt text](/Screenshots/EditConfig.png?raw=true)
![alt text](/Screenshots/EditRunConfig.png?raw=true)
```
Ensure that Command -> run, and Scripts -> test
```

![alt text](/Screenshots/RunExternalTool.png?raw=true)

```
Ensure that external tool "start testrpc" has Program -> Setup.sh, and Working Directory -> Scripts 
(The relative paths where they are saved on your computer)
```

## Running the Debugger

Now you should be able to **run** the project scripts and the following should be displayed in the console. 

![alt text](/Screenshots/TestResult.png?raw=true)
![alt text](/Screenshots/DebuggerConsole.png?raw=true)





### Example

Inside of the "test/TestIntellijDebug.js" file, you can see the following breakpoints and examine how it works. 

![alt text](/Screenshots/DebugResult.png?raw=true)





### Limitations

For the foreseeable future, the debugger only allows you to monitor variables inside of the Javascript test files. It cannot display the variables being stored in the .Sol files. 

### Acknowledgements

Much of this example is based off of the OpenZeppelin Framework.

## Authors

Riley@80trill.com


https://80trill.com/
