var debug = artifacts.require("./TruffleIntellijDebug.sol");

contract('TestIntellijDebug', function(accounts) {

    it("This is a test", async function() {
        let instance = await debug.new();

        let owner = accounts[0];

        let a = 1;
        let b = 2;
        let c = 3;

        await instance.addValue(a);
        await instance.addValue(b);
        await instance.addValue(c);

        let listOfValues = await instance.getListOfValues.call();

        assert(owner);
        assert.equal(listOfValues[0].c[0], a, 'The value in listOfValues is not stored properly');
        assert.equal(listOfValues[1].c[0], b, 'The value in listOfValues is not stored properly');
        assert.equal(listOfValues[2].c[0], c, 'The value in listOfValues is not stored properly');
    });
});