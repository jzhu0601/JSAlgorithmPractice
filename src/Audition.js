"use strict";

var JavaScriptAudition = {
    itRuns: function () {
        return true;
    }
};

//Stores all the ones of roman numerals
var onesRoman = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

//Stores all the tens of roman numerals
var tensRoman = ["", 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];

//Stores all the hundreds of roman numerals
var hundredsRoman = ["", 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];

//Stores thousands of roman numerals, up to 3000
var thousandsRoman = ["", "M", "MM", "MMM"];

/*
 This function is used to convert numbers to roman numerals
 @Param user input of numbers to be converted
 */
var numberToRoman = function (number) {
    var numberString = number.toString();
    if (number <= 0 || number > 3000) {
        //throw new IllegalInputException("Input number cannot less than 1, or greater than 3000.");
        return "The number is invalid";
    } else if (number > 0 && number < 10) {
        return onesRoman[number];
    } else if (number >= 10 && number < 100) {
        return tensRoman[numberString.charAt(0)] + onesRoman[numberString.charAt(1)];
    } else if (number >= 100 && number < 1000) {
        return hundredsRoman[numberString.charAt(0)] + tensRoman[numberString.charAt(1)] + onesRoman[numberString.charAt(2)];
    } else {
        return thousandsRoman[numberString.charAt(0)] + hundredsRoman[numberString.charAt(1)] + tensRoman[numberString.charAt(2)] + onesRoman[numberString.charAt(3)];
    }
}; //end numberToRoman

/*
 This function is used to convert roman numerals to numbers
 @Param user input of roman numerals to be converted
 */
var romanToNumber = function (roman) {
    var value = 0;
    var prevVal = 0;
    for (var i = roman.length - 1; i >= 0; i--) {
        var temp = roman.charAt(i);
        var tempVal = 0;
        switch (temp) {
            case "M":
                tempVal = 1000;
                break;
            case "D":
                tempVal = 500;
                break;
            case "C":
                tempVal = 100;
                break;
            case "L":
                tempVal = 50;
                break;
            case "X":
                tempVal = 10;
                break;
            case "V":
                tempVal = 5;
                break;
            case "I":
                tempVal = 1;
                break;
        }
        if (tempVal < prevVal)
            value -= tempVal;
        else
            value += tempVal;
        prevVal = tempVal;
    }
    return value;
}; // end romanToNumber


function factors(x) {
    // if (x/y is a integer, then it is factor)
    // to compare ( if x/y === Math.floor(x/y))
    var result = [];
    if (isNaN(x)) {
        if (x < 0)
            return -1;
        else {
            for (var i = 1; i <= x; i++) {
                if (x / i === Math.round(x / i)) {
                    result.push(x / i);
                }
                return result;
            }
        }
    }
    return -1;
}

function nbrValidTickets(tickets) {
    var counter = 0;
    for (var i = 0; i < tickets.length; i++) {
        if (tickets[i].length != 6) {
            tickets.splice(i, 1);
        }
        if (!(typeof tickets[i].charAt(0) === "string") || !(typeof tickets[i].charAt(1) === "number")) {
            tickets.splice(i, 1);
        }
    } // end for loop

    for (var j = 0; j < tickets.length; j++) {
        if (/^[a-zA-Z]+$/.test(tickets[j].substring(2))) {
            tickets.splice(j, 1);
        }
    }
    return tickets.length;
}

function powers(list) {
    // Program me! [1,2]
    // [], [1],[2], [1,2]
    return Math.pow(2, list.length);
}

function getDivisorsCnt(n) {
    var counter = 0;
    for (var i = 1; i <= n; i++) {
        if (n / i === Math.round(n / i)) {
            counter++;
        }
    }
    return counter;

}

function GetSum(a, b) {
    var sum = 0;
    if (a === b)
        return a;
    else if (a === 0) {
        for (var i = 0; i < b; i++) {
            sum += i;
        }
        return sum;
    } else if (b === 0) {
        for (var i = a; i < 0; i++) {
            sum += i;
        }
        return sum;
    } else return 0;
}

function iLoveThree(array) {
    var threes = [];
    var x;
    for (x in array) {
        if (x % 3 == 0) {
            threes.push(x)
        }
    }
    return threes
}


var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

num = num.filter(function (e) {
    return e % 2 === 0;
});

function triangular(n) {
    if (n === 1)
        return 1;
    else if (n <= 0)
        return 0;
    else if (n === 2)
        return 3;
    else {
        var sum = 0;
        while (n >= 0) {
            n--;
            return sum += triangular(n);
        }
    }
}

String.prototype.splice = function (idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};


function toCurrency(price) {
    var strPrice = price.toString();

    if (price < 999) {
        return strPrice;
    } else {
        for (var i = 0; i < strPrice.length; i++) {
            if ((i + 1) % 3 === 0) {
                strPrice = [strPrice.slice(0, i + 1), ",", strPrice.slice(i)].join('');
            }
        }
        return strPrice;
    }
}

function stringy(size) {
    var one = "1";
    var zero = "0";
    var sum = '1';
    if (size.length === 1) {
        return one;
    } else {
        for (var i = 0; i < size.length; i++) {
            if (i % 2 != 0) {
                sum += one;
            } else
                sum += zero;
        }
        return sum;
    }
}

var findNonRepeatingNum = function (input) {
    var map = {};
    for (var i = 0; i < input.length; i++) {
        var currentChar = input.charAt(i);
        var count = map[currentChar];
        if (count === undefined) {
            count = 1;
            map[currentChar] = count;
        } else {
            count++;
            map[currentChar] = count;
        }
    }

}

var isPrimeNumber = function (input) {
    //divisible by itself and 1
    for (var i = 2; i < input; i++) {
        if(input%i===0){
            return false;
        }
    }
    return true;
}

