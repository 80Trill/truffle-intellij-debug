pragma solidity ^0.4.19;


contract TruffleIntellijDebug {

    uint256[]  public ListOfValues;

    function TruffleIntellijDebug() public{

    }


    function addValue(uint256 valueToAdd) public{

        ListOfValues.push(valueToAdd);
    }


    function getListOfValues()public constant returns (uint256[]){

        return ListOfValues;
    }

}