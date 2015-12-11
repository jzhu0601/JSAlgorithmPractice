describe("Audition JavaScript Tests", function () {

    it("SpecRunner runs", function () {
        expect(JavaScriptAudition.itRuns()).toBeTruthy();
    });

    describe("Test Number and Roman numeral conversion", function () {

        it("Test Border", function () {
            expect(numberToRoman(0)).toEqual("The number is invalid");
            expect(numberToRoman(3001)).toEqual("The number is invalid");
        }); //end test border

        it("Test numberToRomanOnes", function () {
            expect(numberToRoman(1)).toEqual("I");
            expect(numberToRoman(2)).toEqual("II");
            expect(numberToRoman(3)).toEqual("III");
            expect(numberToRoman(4)).toEqual("IV");
            expect(numberToRoman(5)).toEqual("V");
            expect(numberToRoman(6)).toEqual("VI");
            expect(numberToRoman(7)).toEqual("VII");
            expect(numberToRoman(8)).toEqual("VIII");
            expect(numberToRoman(9)).toEqual("IX");
        }); //end test ones

        it("Test numberToRomanTens", function () {
            expect(numberToRoman(10)).toEqual("X");
            expect(numberToRoman(11)).toEqual("XI");
            expect(numberToRoman(12)).toEqual("XII");
            expect(numberToRoman(15)).toEqual("XV");
            expect(numberToRoman(22)).toEqual("XXII");
            expect(numberToRoman(32)).toEqual("XXXII");
            expect(numberToRoman(44)).toEqual("XLIV");
            expect(numberToRoman(29)).toEqual("XXIX");
        }); //end test tens

        it("Test numberToRomanHundreds", function () {
            expect(numberToRoman(100)).toEqual("C");
            expect(numberToRoman(219)).toEqual("CCXIX");
            expect(numberToRoman(348)).toEqual("CCCXLVIII");
            expect(numberToRoman(172)).toEqual("CLXXII");
            expect(numberToRoman(893)).toEqual("DCCCXCIII");
            expect(numberToRoman(962)).toEqual("CMLXII");
            expect(numberToRoman(321)).toEqual("CCCXXI");
            expect(numberToRoman(563)).toEqual("DLXIII");
        }); //end test hundreds

        it("Test numberToRomanThousands", function () {
            expect(numberToRoman(1000)).toEqual("M");
            expect(numberToRoman(1123)).toEqual("MCXXIII");
            expect(numberToRoman(3000)).toEqual("MMM");
            expect(numberToRoman(1238)).toEqual("MCCXXXVIII");
            expect(numberToRoman(2983)).toEqual("MMCMLXXXIII");
            expect(numberToRoman(2787)).toEqual("MMDCCLXXXVII");
            expect(numberToRoman(1980)).toEqual("MCMLXXX");
            expect(numberToRoman(2345)).toEqual("MMCCCXLV");
        }); //end test thousands

        it("Test RomanToNumOnes", function(){
            expect(romanToNumber("I")).toEqual(1);
            expect(romanToNumber("II")).toEqual(2);
            expect(romanToNumber("III")).toEqual(3);
            expect(romanToNumber("IV")).toEqual(4);
            expect(romanToNumber("V")).toEqual(5);
            expect(romanToNumber("VI")).toEqual(6);
            expect(romanToNumber("VII")).toEqual(7);
            expect(romanToNumber("VIII")).toEqual(8);
            expect(romanToNumber("IX")).toEqual(9);
        });

        it("Test RomanToNumTens", function(){
            expect(romanToNumber("X")).toEqual(10);
            expect(romanToNumber("XI")).toEqual(11);
            expect(romanToNumber("XII")).toEqual(12);
            expect(romanToNumber("XXVIII")).toEqual(28);
            expect(romanToNumber("XLIV")).toEqual(44);
            expect(romanToNumber("XLVI")).toEqual(46);
            expect(romanToNumber("XCVIII")).toEqual(98);
            expect(romanToNumber("XXIII")).toEqual(23);
        });

        it("Test RomanToNumHundreds", function(){
            expect(romanToNumber("C")).toEqual(100);
            expect(romanToNumber("CMXCIX")).toEqual(999);
            expect(romanToNumber("CDXXXII")).toEqual(432);
            expect(romanToNumber("DLXVII")).toEqual(567);
            expect(romanToNumber("DCCCLXXVI")).toEqual(876);
            expect(romanToNumber("CXXIII")).toEqual(123);
            expect(romanToNumber("DCLXX")).toEqual(670);
            expect(romanToNumber("DCCLXXXIX")).toEqual(789);
        });

        it("Test RomanToNumThousands", function(){
            expect(romanToNumber("M")).toEqual(1000);
            expect(romanToNumber("MMM")).toEqual(3000);
            expect(romanToNumber("MMCCXXXII")).toEqual(2232);
            expect(romanToNumber("MMCCCXXVIII")).toEqual(2328);
            expect(romanToNumber("MCCLXXXIX")).toEqual(1289);
            expect(romanToNumber("MCMXC")).toEqual(1990);
            expect(romanToNumber("MCMLXXVIII")).toEqual(1978);
            expect(romanToNumber("MMCCCIX")).toEqual(2309);
        });

    }); //end add your test

});
