var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

h.value = 10;
//store a reference to the startTimer variable
var startTimer = null;

startInterval();
//initialize the variable
function startInterval() {
    startTimer = setInterval(function () {
        timer();
    }, 2000);
}

function timer() {
    if (h.value == 0 && m.value == 0 && s.value == 0) {
        h.value = 10;
        startInterval();
    } else if (s.value != 0) {
        s.value--;
    } else if (m.value != 0 && s.value == 0) {
        s.value = 59;
        m.value--;
    } else if (h.value != 0 && m.value == 0) {
        m.value = 60;
        h.value--;
    }
    return;
}



var tut = null;
setInterval(function () {

    $.getJSON("https://api.coindesk.com/v1/bpi/currentprice.json", function (veri) {

        var a = veri.bpi.USD.rate;
        $("#box").append(a);

        var b = veri.bpi.GBP.rate;
        $("#box2").append(b);

        var c = veri.bpi.EUR.rate;
        $("#box3").append(c);
    });
    $("#box").html(null);
    $("#box2").html(null);
    $("#box3").html(null);
    
}, 1000);



