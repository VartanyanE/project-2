// Creating our Inventory model
module.exports = function (sequelize, DataTypes) {
    var ShoppingList = sequelize.define("ShoppingList", {
        // The item name is the name of the product on shelf.
        item_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Stores how the item is stored; can, box, etc.
        item_format: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Stores how many items are in inventory.
        number_items: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // Stores the category.
        category: {
            type: DataTypes.STRING,
            allowNull: false
        }
        // ,        // Stores how many items are in inventory.
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // }
    },
        {
            freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
        });

    ShoppingList.associate = function (models) {
        // An Inventory item can't be created without an User due to the foreign key constraint
        ShoppingList.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return ShoppingList;
};
