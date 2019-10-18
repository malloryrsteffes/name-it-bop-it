$(document).ready(function() {
  // On click events for each randomizer button

  // PET BUTTON ===================================================
  $("#petRandomizerButton").on("click", function() {
    $.ajax("/api/pet", {
      method: "GET"
    }).then(function(data) {
      console.log(data);
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
      console.log(data);
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
      console.log(data);
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomBoat").html(el);
    });
  });

  // BOY BUTTON ==================================================
  $("#boyRandomizerButton").on("click", function() {
    console.log("clicked!");
    $.ajax("/api/randomizes/boy", {
      method: "GET"
    }).then(function(data) {
      console.log(data);
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomBoy").html(el);
    });
  });

  // BOY FIRST LETTER BUTTON ==================================================
  $("button").on("click", function() {
    console.log("clicked!");

    var letterChosen = $(this).attr("data-letter");

    console.log(letterChosen);

    $.ajax({
      url: "/api/boy/" + letterChosen,
      method: "GET"
    }).then(function(data) {
      console.log(data);
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomBoy").html(el);
    });
  });

  // GIRL BUTTON ==================================================
  $("#girlRandomizerButton").on("click", function() {
    console.log("clicked!");
    $.ajax("/api/randomizes/girl", {
      method: "GET"
    }).then(function(data) {
      console.log(data);
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomGirl").html(el);
    });
  });

  // GIRL FIRST LETTER BUTTON ==================================================


  $("button").on("click", function() {
    console.log("clicked!");

    var letterChosen = $(this).attr("data-letter");

    console.log(letterChosen);

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
