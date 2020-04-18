$(document).ready(function () {
    // Getting references to our form and input
    var addIventoryForm = $("form.add-inventory");
    var itemNameInput = $("input#item-name-input")
    var itemFormatInput = $("input#item-format-input")
    var itemNumberImput = $("input#item-number-input")
    var itemCategoryInput = $("input#item-category-input")


    //Used for onclick to add a new inventory item to database table based on a previously created item.
    $(document).on("click", ".add-button", function (event) {
        var buttonID = $(this).attr("button_id")
        var updateName = $(`.item-name-update[data-id=${buttonID}]`).val()
        var updateFormat = $(`.item-format-update[data-id=${buttonID}]`).val()
        var updateValue = $(`.item-number-update[data-id=${buttonID}]`).val()
        var updateCategory = $(`.item-category-update[data-id=${buttonID}]`).val()

        addInventoryItem(updateName, updateFormat, updateValue, updateCategory);
    });

    //Used to delete an inventory item from the inventory table.
    $(document).on("click", ".delete-button", function (event) {
        var buttonID = $(this).attr("button_id")

        $.ajax("/api/delete/inventory/" + buttonID, {
            type: "DELETE"
        }).then(
            function (response) {
                location.reload();
            }
        );
    });


    // Function that adds an inventory item to inventory table.
    addIventoryForm.on("submit", function (event) {
        event.preventDefault();
        var itemData = {
            item_name: itemNameInput.val().trim(),
            item_format: itemFormatInput.val().trim(),
            number_items: itemNumberImput.val().trim(),
            category: itemCategoryInput.val().trim()
        };
        // If any of the fields are blank, then stop.
        if (!itemData.item_name || !itemData.item_format || !itemData.number_items || !itemData.category) {
            return;
        }

        addInventoryItem(itemData.item_name, itemData.item_format, itemData.number_items, itemData.category);
        itemNameInput.val("");
        itemNumberImput.val("0");
        itemCategoryInput.val("");

    });

    //Used to cre3ate a completely new item stored to the database.
    function addInventoryItem(item_name, item_format, number_items, category) {
        $.post("/api/create/inventory", {
            item_name: item_name,
            item_format: item_format,
            number_items: number_items,
            category: category
        })
            .then(function (data) {
                window.location.replace("/inventory");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    //Used to update a previously created item.
    $(document).on("click", ".update-button", function (event) {
        var buttonID = $(this).attr("button_id")
        var updateName = $(`.item-name-update[data-id=${buttonID}]`).val()
        var updateFormat = $(`.item-format-update[data-id=${buttonID}]`).val()
        var updateValue = $(`.item-number-update[data-id=${buttonID}]`).val()
        var updateCategory = $(`.item-category-update[data-id=${buttonID}]`).val()

        $.ajax("/api/update/inventory/" + buttonID, {
            type: "PUT",
            data: {
                item_name: updateName,
                item_format: updateFormat,
                number_items: updateValue,
                category: updateCategory
            }
        }).then(
            function (response) {
                $(".modal").modal("toggle")
            }
        );
    });


    // Used to move an item from inventory to shopping when button is clicked.
    $(document).on("click", ".move-button", function (event) {
        event.preventDefault();

        var buttonID = $(this).attr("button_id")
        var itemData = {
            item_name: $(`.item-name-update[data-id=${buttonID}]`).val(),
            item_format: $(`.item-format-update[data-id=${buttonID}]`).val(),
            number_items: $(`.item-number-update[data-id=${buttonID}]`).val(),
            category: $(`.item-category-update[data-id=${buttonID}]`).val(),
        };

        $.ajax("/api/delete/inventory/" + buttonID, {
            type: "DELETE"
        }).then(
            function (response) {
            }
        );
        if (!itemData.item_name || !itemData.item_format || !itemData.number_items || !itemData.category) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        addMoveToShoppingItem(itemData.item_name, itemData.item_format, itemData.number_items, itemData.category);
    });

    //Actual function that moves the item from inventory to shopping.
    function addMoveToShoppingItem(item_name, item_format, number_items, category) {


        $.post("/api/create/shopping", {
            item_name: item_name,
            item_format: item_format,
            number_items: number_items,
            category: category
        })
            .then(function (data) {
                location.reload();
            })
            .catch(handleLoginErr);
    }
    function handleLoginErr(err) {
        console.log(err)
    }
});