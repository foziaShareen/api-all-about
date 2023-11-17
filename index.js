// The Local API file code
var api = (function () {
    var prop1 = 'prop1';
    var prop2 = 2;
    var prop3 = true;
    var prop4 = Date.now();
    var prop5 = ['yes', 'no', 'maybe'];

    var init = function () {
        // Implementation for init
    };
    var aa = function () {
        console.log('aa');
        ba();
    };
    var ba = function () {
        console.log('ba');
    };
    var ca = function () {
        console.log('ca');
        da();
    };
    var da = function () {
        console.log('da');
    };
    var ea = function () {
        console.log('ea');
        fa();
    };
    var fa = function () {
        console.log('fa');
    };
    var ga = function () {
        console.log('ga');
    };
    var ha = function () {
        console.log('ha');
    };
    var ia = function () {
        console.log('ia');
    };
    var ja = function () {
        console.log('ja');
    };
    var ka = function () {
        console.log('ka');
    };

    return {
        prop1: prop1,
        prop2: prop2,
        prop4: prop4,
        aa: aa,
        ca: ca,
        ja: ja,
        ka: ka
    };
})();

// My own script in some other JS file
api.aa();
api.ca();
api.ja();
api.ka();
console.log(api.prop1);
console.log(api.prop2);
console.log(api.prop4);
// note 
// var api = (function () {
//     // ... (rest of the code)
// })();
// The parentheses before the line 
//  My own script in some other JS file are there to immediately invoke the function expression and assign its result to the variable api.