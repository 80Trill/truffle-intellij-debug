var instance = artifacts.require("../contracts/TruffleIntellijDebug.sol");
module.exports = function(deployer) {
  deployer.deploy(instance);
};
