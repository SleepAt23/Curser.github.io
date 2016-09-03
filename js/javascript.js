$(function() {
$(".title").css("margin","25px 0px 25px 0px");
$(".wel").css("font-size","18px");
$(".menu").css({"position":"fixed","backgroundColor":"white","padding":"0 0 0 0 ","height":"100%","z-index":"999"});
$(".in-color").css("color","white");
$(".top").css("padding","20px 0 0 20px");
$(".tie1").css("backgroundColor","red");
$(".tie2").css("backgroundColor","green");
$(".tie3").css("backgroundColor","orange");
$(".tie4").css({"backgroundColor":"pink"});
$(".i2").css({"font-size":"50px","margin":"20px 5px 15px 5px"});
$(".num").css({"font-size":"25px","padding-top":"5px"});
$(".small").css({"width":"50px","margin":"0px 10px 0px 10px"});
//$(".map").css("padding","0px 0 0 0px");
$("body").css({"backgroundColor":"#eee","padding-top":"50px"});
$(".i1").css("margin","15px 0px 0px 18px");
$("nav").css("margin","0px 0px 0px 0px");
$(".bk,.more").css({"border":"0px","border-radius":"0px"});
$(".tiezhi").css({"width":"80px","heigth":"50px","backgroundColor":"red","color":"white"});
$(".feed").css("font-size","15px");
$(".container").css("padding","0 0 0 0");
$(".gene,.recent").css("margin","40px 0 0 0");
$(".intro").css("margin","40px 0 0 0");
$(".logo").css({"float":"right","padding-top":"5px","color":"white"});
$(".event").css({"color":"white"});
$(".clos").css({"color":"white","backgroundColor":"black"});
$(".more").css({"width":"150px","backgroundColor":"black","color":"white"});
//$(".user").css("backgroundColor","white");
$(".xx").css({"font-size":"25px","float":"right"});
$(".name").css("font-size","25px");
$(".user").css('box-shadow',"0px 9px 15px gray");

  $(".menu").hide();
  $(".menu").fadeIn(1000);

$(".event").click(function () {
    $(".menu").fadeIn(500);
    $(".next").fadeOut(500);
    $(".visible-lg").removeClass("visible-lg");
});
$(".clos").click(function () {
    $(".next").fadeIn(500);
    $(".menu").fadeOut(500);
    $(".menu").addClass("visible-lg");
});
$(".li1,.li2,.li3").click(function () {
    $(this).remove();

});

$(".more").mouseover(function(){
$(this).css('box-shadow',"0px 9px 15px gray");
});
$(".more").mouseout(function(){
$(this).css('box-shadow',"0px 0px 0px white");
});
  });
