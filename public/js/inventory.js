$(document).on("click", ".delete-button", function (event) {
    var buttonID = $(this).attr("button_id")

    // Send the DELETE request.
    $.ajax("/api/delete/inventory/" + buttonID, {
        type: "DELETE"
    }).then(
        function (response) {
            console.log(response);
            location.reload();
        }
    );
});