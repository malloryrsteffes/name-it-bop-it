// On click events for each randomizer button

// PET BUTTON ===================================================
$("#petRandomizerButton").on("click", function() {
  $.ajax("/api/pet", {
    method: "GET"
  }).then(function(data) {
    console.log(data);
    $("#randomPet").text(data);
  });
});
// DUCKY BUTTON ===================================================
$("#duckyRandomizerButton").on("click", function() {
  $.ajax("/api/ducky", {
    method: "GET"
  }).then(function(data) {
    console.log(data);
    $("#randomDucky").text(data);
  });
});

// BOAT BUTTON ===================================================
$("#boatRandomizerButton").on("click", function() {
  $.ajax("/api/boat", {
    method: "GET"
  }).then(function(data) {
    console.log(data);
    $("#randomBoat").text(data);
  });
});

// BOY BUTTON ==================================================
$("#boyRandomizerButton").on("click", function() {
  console.log("clicked!");
  $.ajax("/api/randomizes/boy", {
    method: "GET"
  }).then(function(data) {
    console.log(data);
    $("#randomBoy").text(data);
  });
});

// GIRL BUTTON ==================================================
$("#girlRandomizerButton").on("click", function() {
  console.log("clicked!");
  $.ajax("/api/randomizes/girl", {
    method: "GET"
  }).then(function(data) {
    console.log(data);
    $("#randomGirl").text(data);
  });
});
