$(document).ready(function() {
  $("form#list").submit(function(event) {
    event.preventDefault();

    // var firstItem = $("input#itemOne").val();
    // var secondItem = $("input#itemTwo").val();
    // var thirdItem = $("input#itemThree").val();
    // var fourthItem = $("input#itemFour").val();
    // var fifthItem = $("input#itemFive").val();

    var items = ["itemOne", "itemTwo", "itemThree", "itemFour", "itemFive"];

    // var groceryItems = [firstItem, secondItem, thirdItem, fourthItem, fifthItem];

    // var firstThreeItems = [];

    // firstThreeItems.push(groceryItems[0]);
    // firstThreeItems.push(groceryItems[1]);
    // firstThreeItems.push(groceryItems[2]);
    //
    // $("#first").text(firstThreeItems[0]);
    // $("#second").text(firstThreeItems[1]);
    // $("#third").text(firstThreeItems[2]);

    items.forEach(function(item) {
      var userInput = $("input#" + item).val();
      $("#groceryList").append("<li>" + userInput + "</li>");
    });

  });
});
