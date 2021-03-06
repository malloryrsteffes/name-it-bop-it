$(document).ready(function () {
  // On click event delegations for each randomizer button

  // PET BUTTON ===================================================

  $("#petRandomizerButton").on("click", function () {
    $.ajax("/api/pet", {
      method: "GET"
    }).then(function (data) {
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomPet").html(el);
    });
  });

  // DUCKY BUTTON ===================================================

  $("#duckyRandomizerButton").on("click", function () {
    $.ajax("/api/ducky", {
      method: "GET"
    }).then(function (data) {
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomDucky").html(el);
    });
  });

  // BOAT BUTTON ===================================================

  $("#boatRandomizerButton").on("click", function () {
    $.ajax("/api/boat", {
      method: "GET"
    }).then(function (data) {
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomBoat").html(el);
    });
  });

  // BOY BUTTON ==================================================

  $("#boyRandomizerButton").on("click", function () {
    $.ajax("/api/randomizes/boy", {
      method: "GET"
    }).then(function (data) {
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomBoy").html(el);
    });
  });

  // BOY FIRST LETTER BUTTON ==================================================

  $(".letter-button2").on("click", function () {

    var letterChosen = $(this).attr("data-letter");

    $.ajax({
      url: "/api/boy/" + letterChosen,
      method: "GET"
    }).then(function (data) {
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomBoy").html(el);
    });
  });

  // GIRL BUTTON ==================================================

  $("#girlRandomizerButton").on("click", function () {
    $.ajax("/api/randomizes/girl", {
      method: "GET"
    }).then(function (data) {
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomGirl").html(el);
    });
  });

  // GIRL FIRST LETTER BUTTON ==================================================

  $(".letter-button").on("click", function () {

    var letterChosen = $(this).attr("data-letter");

    $.ajax({
      url: "/api/girl/" + letterChosen,
      method: "GET"
    }).then(function (data) {
      let el = $("<h1>")
      el.text(data);
      el.addClass("animated bounce");
      $("#randomGirl").html(el);
    });
  });

  // DUCKY MODAL ==================================================

  $(".create-form-ducky").on("click", function (event) {

    // Prevent default ducky name from being created
    event.preventDefault();
    $("#duckyModal").modal("toggle");
    var newDucky = {
      name: $("#newDucky").val().trim()
    };

    console.log(newDucky.name);


    // Send the POST request
    $.ajax("/add/ducky", {
      type: "POST",
      data: newDucky
    }).then(
      function (data) {

        // Data comes back from post as data.name
        console.log("created ducky called " + data.name);
        $("#newDucky").val("");

      }
    );
  });

  // PET MODAL ==================================================

  $(".create-form-pet").on("click", function (event) {

    // Prevent default pet name from being created
    event.preventDefault();
    $("#petModal").modal('toggle');

    var newPet = {
      name: $("#newPet").val().trim()
    };

    console.log(newPet.name);


    // Send the POST request.
    $.ajax("/add/pet", {
      type: "POST",
      data: newPet
    }).then(
      function (data) {

        // Data comes back from post as data.name
        console.log("created pet called " + data.name);
        $("#newPet").val("");

      }
    );
  });

  // BOAT MODAL ==================================================

  $(".create-form-boat").on("click", function (event) {

    // Prevent default boat name from being created
    event.preventDefault();
    $('#boatModal').modal('toggle');

    var newBoat = {
      name: $("#newBoat").val().trim()
    };

    console.log(newBoat.name);


    // Send the POST request.
    $.ajax("/add/boat", {
      type: "POST",
      data: newBoat
    }).then(
      function (data) {

        // Data comes back from post as data.name
        console.log("created boat called " + data.name);
        $("#newBoat").val("");

      }
    );
  });

  // BOY MODAL ==================================================

  $(".create-form-boy").on("click", function (event) {

    // Prevent default boy name from being created
    event.preventDefault();
    $("#boyModal").modal("toggle");

    var newBoy = {
      name: $("#newBoy").val().trim(),
      gender: "MALE"
    };

    console.log(newBoy.name);


    // Send the POST request.
    $.ajax("/add/boy", {
      type: "POST",
      data: newBoy
    }).then(
      function (data) {

        // Data comes back from post as data.name
        console.log("created boy name " + data.name);
        $("#newBoy").val("");

      }
    );
  });

  // GIRL MODAL ==================================================

  $(".create-form-girl").on("click", function (event) {

    // Prevent default boy name from being created
    event.preventDefault();
    $("#girlModal").modal("toggle");

    var newGirl = {
      name: $("#newGirl").val().trim(),
      gender: "FEMALE"
    };

    console.log(newGirl.name);


    // Send the POST request
    $.ajax("/add/girl", {
      type: "POST",
      data: newGirl
    }).then(
      function (data) {

        // Data comes back from post as data.name
        console.log("created girl name " + data.name);
        $("#newGirl").val("");

      }
    );
  });

  // MESSAGE BUTTON ==================================================

  
  $("#message-submit").on("click", function (event) {

    // Prevent default comment from being created
    event.preventDefault();

    
    var newChat = {
      author: $("#author").val().trim(),
      body: $("#chat-box").val().trim(),
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log(newChat);

    // Send the POST request
    $.post("/api/message", newChat)
      
      .then(function () {

        var row = $("<div>");
        row.addClass("chat");

        row.append("<p>" + newChat.author + " commented: </p>");
        row.append("<p>" + newChat.body + "</p>");
        row.append("<p>At " + moment(newChat.createdAt).format("h:mma on dddd, MMM Do YY") + "</p>");

        $("#chat-area").prepend(row);

      });

    // Empty each input box by replacing the value with an empty string
    $("#author").val("");
    $("#chat-box").val("");
  });

  // When the page loads, grab all the messages
  $.get("/api/message", function (data) {

    if (data.length !== 0) {

      for (var i = 0; i < data.length; i++) {

        // Creates a new message
        var row = $("<div>");
        row.addClass("chat");

        row.append("<br>")
        row.append("<p>" + data[i].author + " commented.. </p>");
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>At " + moment(data[i].createdAt).format("h:mma on dddd, MMM Do YY") + "</p>");

        // Display newly created messages at the top of the message board
        $("#chat-area").prepend(row);

      }

    }

  });

});