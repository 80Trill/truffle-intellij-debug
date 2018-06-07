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
        let ownerActual = await instance.owner();

        assert.equal(owner, ownerActual, "The owners address was not stored properly");
        assert.equal(listOfValues[0], a, 'The value in listOfValues is not stored properly');
        assert.equal(listOfValues[1], b, 'The value in listOfValues is not stored properly');
        assert.equal(listOfValues[2], c, 'The value in listOfValues is not stored properly');
    });
});
