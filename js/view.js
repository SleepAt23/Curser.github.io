var fps = 1000 / 30; // 1/30秒
var playTimer = "";

window.addEventListener("load", function() {

  imgob = $("#img")[0];
  videoObj = $("#video")[0];
  videoObj1 = $("#video1")[0];
  videoObj2 = $("#video2")[0];
  videoObj3 = $("#video3")[0];
  videoObj4 = $("#video4")[0];

  canvasObj1 = $("#leftup")[0];
  canvasObj2 = $("#rightup")[0];
  canvasObj3 = $("#leftdown")[0];
  canvasObj4 = $("#rightdown")[0];

  canvasObj1.getContext("2d").drawImage(imgob, 0, 0, 768, 398, 0, 0, 300, 150);
  canvasObj2.getContext("2d").drawImage(imgob, 768, 0, 768, 398, 0, 0, 300, 150);
  canvasObj3.getContext("2d").drawImage(imgob, 0, 398, 768, 398, 0, 0, 300, 150);
  canvasObj4.getContext("2d").drawImage(imgob, 768, 398, 768, 398, 0, 0, 300, 150);

});


var playFull = false;
$("#change").click(function() {

  playFull = !playFull;
  clearInterval(playTimer);

  if (playFull) {
    all();
      $("#change").html("切换");
  } else {
    split();
  }

});

function all() {

  playTimer = setInterval(function() {

    canvasObj1.getContext("2d").drawImage(videoObj, 0, 0, 640, 360, 0, 0, 300, 150);
    canvasObj2.getContext("2d").drawImage(videoObj, 640, 0, 640, 360, 0, 0, 300, 150);
    canvasObj3.getContext("2d").drawImage(videoObj, 0, 360, 640, 360, 0, 0, 300, 150);
    canvasObj4.getContext("2d").drawImage(videoObj, 640, 360, 640, 360, 0, 0, 300, 150);

  }, fps);
}

function split() {

  playTimer = setInterval(function() {

    canvasObj1.getContext("2d").drawImage(videoObj1, 0, 0, 1280, 720, 0, 0, 300, 150);
    canvasObj2.getContext("2d").drawImage(videoObj2, 0, 0, 1280, 720, 0, 0, 300, 150);
    canvasObj3.getContext("2d").drawImage(videoObj3, 0, 0, 1280, 720, 0, 0, 300, 150);
    canvasObj4.getContext("2d").drawImage(videoObj4, 0, 0, 1280, 720, 0, 0, 300, 150);
  }, fps);
}

function clear() {
  canvasObj1.getContext("2d").clearRect(0, 0, 300, 150);
  canvasObj2.getContext("2d").clearRect(0, 0, 300, 150);
  canvasObj3.getContext("2d").clearRect(0, 0, 300, 150);
  canvasObj4.getContext("2d").clearRect(0, 0, 300, 150);
}
