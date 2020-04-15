
$(document).ready(function () {
    // Getting references to our form and input
    var addShoppingForm = $("form.add-shopping");
    var itemNameInput = $("input#item-name-input")
    var itemFormatInput = $("input#item-format-input")
    var itemNumberImput = $("input#item-number-input")
    var itemCategoryInput = $("input#item-category-input")
    var itemUserId = 1

    $(document).on("click", ".delete-button", function (event) {
        var buttonID = $(this).attr("button_id")

        // Send the DELETE request.
        $.ajax("/api/delete/shopping/" + buttonID, {
            type: "DELETE"
        }).then(
            function (response) {
                console.log(response);
                location.reload();
            }
        );
    });



    // When the signup button is clicked, we validate the email and password are not blank
    addShoppingForm.on("submit", function (event) {
        event.preventDefault();
        var itemData = {
            item_name: itemNameInput.val().trim(),
            item_format: itemFormatInput.val().trim(),
            number_items: itemNumberImput.val().trim(),
            category: itemCategoryInput.val().trim()
        };

        if (!itemData.item_name || !itemData.item_format || !itemData.number_items || !itemData.category) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        addShoppingItem(itemData.item_name, itemData.item_format, itemData.number_items, itemData.category);
        itemNameInput.val("");
        itemNumberImput.val("0");
        itemCategoryInput.val("");

    });

    function addShoppingItem(item_name, item_format, number_items, category) {

        console.log('got here1:', item_name, item_format, number_items, category)
        $.post("/api/create/shopping", {
            item_name: item_name,
            item_format: item_format,
            number_items: number_items,
            category: category
        })
            .then(function (data) {
                console.log('gothere2', data)
                window.location.replace("/shopping");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    $(document).on("click", ".update-button", function (event) {
        var buttonID = $(this).attr("button_id")
        var updateValue = $(`.item-number-update[data-id=${buttonID}]`).val()
        console.log(updateValue)
        // Send the DELETE request.
        $.ajax("/api/update/shopping/" + buttonID, {
            type: "PUT",
            data: { number_items: updateValue }
        }).then(
            function (response) {
                console.log(response);
                location.reload();
            }
        );
    });



    // // When the signup button is clicked, we validate the email and password are not blank
    // $(document).on("click", ".update-button", function (event) {
    //     event.preventDefault();

    //     var buttonID = $(this).attr("button_id")

    //     var itemData = {
    //         item_name: $(`.item-number-update[data-id=${buttonID}]`).val(),
    //         item_format: itemFormatInput.val().trim(),
    //         number_items: itemNumberImput.val().trim(),
    //         category: itemCategoryInput.val().trim()
    //     };

    //     if (!itemData.item_name || !itemData.item_format || !itemData.number_items || !itemData.category) {
    //         return;
    //     }
    //     // If we have an email and password, run the signUpUser function
    //     addInventoryItem(itemData.item_name, itemData.item_format, itemData.number_items, itemData.category);


    //     // Send the DELETE request.
    //     $.ajax("/api/delete/shopping/" + buttonID, {
    //         type: "DELETE"
    //     }).then(
    //         function (response) {
    //             console.log(response);
    //             location.reload();
    //         }
    //     );

    // });


    // function addInventoryItem(item_name, item_format, number_items, category) {

    //     console.log('got here1:', item_name, item_format, number_items, category)
    //     $.post("/api/create/inventory", {
    //         item_name: item_name,
    //         item_format: item_format,
    //         number_items: number_items,
    //         category: category
    //     })
    //         .then(function (data) {
    //             console.log('gothere2', data)
    //             window.location.replace("/inventory");
    //             // If there's an error, handle it by throwing up a bootstrap alert
    //         })
    //         .catch(handleLoginErr);
    // }


    // function handleLoginErr(err) {
    //     console.log(err)
    //     // $("#alert .msg").text(err.responseJSON);
    //     // $("#alert").fadeIn(500);
    // }

});