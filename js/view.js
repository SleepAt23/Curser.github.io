$(function() {

  window.addEventListener("load", function(){
  var fps = 1000/50; // 1/30秒
  var videoObj = document.getElementById("video");

  var canvasObj1 = document.getElementById("leftup");
  var canvasObj2 = document.getElementById("rightup");
  var canvasObj3 = document.getElementById("leftdown");
  var canvasObj4 = document.getElementById("rightdown");

  setInterval(function(){

  canvasObj1.getContext("2d").drawImage(videoObj,0,0,640,360,0,0,300,150);
  canvasObj2.getContext("2d").drawImage(videoObj,640,0,640,360,0,0,300,150);
  canvasObj3.getContext("2d").drawImage(videoObj,0,360,640,360,0,0,300,150);
  canvasObj4.getContext("2d").drawImage(videoObj,640,360,640,360,0,0,300,150);

  }, fps);
  }, true);
  });
