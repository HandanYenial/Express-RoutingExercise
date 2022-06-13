const { exportAllDeclaration } = require("@babel/types");
const { isTypedArray } = require("util/types");
const { describe } = require("yargs");
const{ mean, median, mode } = require("./helpers");

describe("finding mean" , function(){
    expect(mean([1,1,2,3,3,3,4,4,5,6]).toEqual(3.2))
});


describe("finding the median of an even set" , function(){
        expect(median([1,1,2,3,3,3,4,4,5,6]).toEqual(3))
    });

describe("finding the median of an odd set", function(){
        expect(median([1,1,2,3,4]).toEqual(2))
    });

describe("finding mode" , function(){
    expect(mode([1,1,2,3]).toEqual(1))
})
