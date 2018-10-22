$(document).ready(function() {
  alert("Hello");
  $("form#list").submit(function(event) {
    event.preventDefault();

    var firstItem = $("input#itemOne").val();
    var secondItem = $("input#itemTwo").val();
    var thirdItem = $("input#itemThree").val();
    var fourthItem = $("input#itemFour").val();
    var fifthItem = $("input#itemFive").val();

  });
});
