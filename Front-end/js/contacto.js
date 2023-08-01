
$('.slider1').hide();
$('.slider2').hide();
$('#errorMessage').hide();
$('#monster img').hide();


var usernameInput = document.querySelectorAll('#rightInput');
var showButton = document.getElementsByClassName('showButton')[0];

$(document).ready(function(){
  $("input").focus(function colorChange () {
  $(this).css("background-color", "#fdf0e2");

  });

  $("input").blur(function () {
  $(this).css("background-color", "#ffffff");
  });
});

$('#submit').click(function () {
usernameslideDown();
passwordslideDown();
errorMessage();
correctPassword();
});

function errorMessage (){
  if ((usernameInput[0].value !== "") && (usernameInput[1].value !=="")){
    $('#errorMessage').slideDown(1000).delay(4000).slideUp(200);
  };
};

function usernameslideDown (){
if (usernameInput[0].value ==''){
  $('.slider1').slideDown(500).delay(3000).slideUp(200);
  };
};

function passwordslideDown (){
if (usernameInput[1].value ==''){
  $('.slider2').slideDown(500).delay(3000).slideUp(200);
  };
};

function correctPassword (){
  if ((usernameInput[0].value === "ErikaL") && (usernameInput[1].value ==="LovesBaltimore")){
    $('#errorMessage').hide();
    $('#monster img').fadeIn(100).delay(2000).fadeOut(100);
  };
};