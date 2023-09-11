var start = document.querySelector(".start");
var puase = document.querySelector(".puase");
var reset = document.querySelector(".reset");
var p = document.querySelector("p");

var time = null;
var h = 0;
var m = 0;
var s = 0;
var flag = true;
start.addEventListener("click", function (e) {
  if (flag == true) {
    time = setInterval(function () {
      s++;
      if (s == 60) {
        m++;
        s = 0;
      }
      if (m == 60) {
        h++;
        m = 0;
      }
      if (h == 60) {
        h = 0;
        m = 0;
        s = 0;
      }

      p.innerText = `${h < 10 ? "0" + h : h} : ${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s
        }`;
    }, 1000);
    flag = false
  }

});

puase.addEventListener("click", function () {
  clearInterval(time);
  flag = true
});
reset.addEventListener("click", function () {
  clearInterval(time);
  h = 0;
  m = 0;
  s = 0;
  flag = true
  p.innerText = "00:00:00";
});
