const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
};

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(num){
        return (num * int)
    };

};

function fareDoubler(num){
        return (num * 2)
    };


function fareTripler(num){
    return (num * 3)
};

function selectDifferentDrivers(arrayOfDrivers, fxn){
    return fxn(arrayOfDrivers)
};

