// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // DEVOURED or EAT ME! button
  $(".change-devoured").on("click", function (event) {
    let id = $(this).data("id");
    console.log(id);
    // Return value for data-devoured
    let newBurger = $(this).data("devoured");
    console.log("Current burger state: ", newBurger);

    // Change to opposite devoured state
    let newBurgerState = {
      devoured: !newBurger
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function () {
        console.log("Changed devoured to", newBurgerState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // Delete button
  $(".delete-burger").on("click", function (event) {
    let id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("Deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
