$(document).ready(function() {
  // On click events for each randomizer button

  // PET BUTTON ===================================================
  $("#petRandomizerButton").on("click", function() {
    $.ajax("/api/pet", {
      method: "GET"
    }).then(function(data) {
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomPet").html(el);
    });
  });
  // DUCKY BUTTON ===================================================
  $("#duckyRandomizerButton").on("click", function() {
    $.ajax("/api/ducky", {
      method: "GET"
    }).then(function(data) {
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomDucky").html(el);
    });
  });

  // BOAT BUTTON ===================================================
  $("#boatRandomizerButton").on("click", function() {
    $.ajax("/api/boat", {
      method: "GET"
    }).then(function(data) {
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomBoat").html(el);
    });
  });

  // BOY BUTTON ==================================================
  $("#boyRandomizerButton").on("click", function() {
    $.ajax("/api/randomizes/boy", {
      method: "GET"
    }).then(function(data) {
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomBoy").html(el);
    });
  });

  // BOY FIRST LETTER BUTTON ==================================================
  $("button").on("click", function() {

    var letterChosen = $(this).attr("data-letter");

    $.ajax({
      url: "/api/boy/" + letterChosen,
      method: "GET"
    }).then(function(data) {
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomBoy").html(el);
    });
  });

  // GIRL BUTTON ==================================================
  $("#girlRandomizerButton").on("click", function() {
    $.ajax("/api/randomizes/girl", {
      method: "GET"
    }).then(function(data) {
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomGirl").html(el);
    });
  });

  // GIRL FIRST LETTER BUTTON ==================================================


  $("button").on("click", function() {

    var letterChosen = $(this).attr("data-letter");

    $.ajax({
      url: "/api/girl/" + letterChosen,
      method: "GET"
    }).then(function(data) {
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomGirl").html(el);
    });
  });
});

// DUCKY MODAL
$(".create-form").on("click", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newDucky = {
    name: $("#newDucky").val().trim(),
  };

  console.log("New Ducky:" + newDucky);


  // Send the POST request.
  $.ajax("/add/ducky", {
    type: "POST",
    data: newDucky
  }).then(
    function() {
      console.log("created ducky burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
