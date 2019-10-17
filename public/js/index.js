// On click events for each randomizer button

// PET BUTTON ===================================================
$("#petRandomizerButton").on("click", function() {
  var search = $(this).val();
  console.log(search);
});

// CAR BUTTON ===================================================
$("#carRandomizerButton").on("click", function() {
  var search = $(this).val();
  console.log(search);
});

// BOAT BUTTON ===================================================
$("#boatRandomizerButton").on("click", function() {
  var search = $(this).val();
  console.log(search);
});

// BOY BUTTON ==================================================
$("#boyRandomizerButton").on("click", function() {
  console.log("clicked!");
  $.ajax("/api/randomizes/boy", {
    type: "GET"
  }).then(function(data) {
    console.log(data);
  });
});

// GIRL BUTTON ==================================================
$("#girlRandomizerButton").on("click", function() {
  console.log("clicked!");
  $.ajax("/api/randomizes/girl", {
    type: "GET"
  }).then(function(data) {
    console.log(data);
  });
});
