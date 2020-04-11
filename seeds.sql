USE inventory_db;

INSERT INTO Users
    (email,password,user_name,createdAt,updatedAt)
VALUES('gin@luthercorp.com', 'password', 'Martin Funches', '2020-04-08 04:43:40', '2020-04-08 04:43:40' );


INSERT INTO inventory
    (item_name,item_format,number_items,category,createdAt,updatedAt,UserId)
VALUES('Hormel Chili', 'can', '10','Grocery', '2020-04-08 04:43:40', '2020-04-08 04:43:40', 1);

INSERT INTO inventory
    (item_name,item_format,number_items,category,createdAt,updatedAt,UserId)
VALUES('Cup of Noodles', 'cup', '20','Grocery', '2020-04-08 04:43:40', '2020-04-08 04:43:40', 1);

INSERT INTO inventory
    (item_name,item_format,number_items,category,createdAt,updatedAt,UserId)
VALUES('Chicken of the Sea', 'can', '30','Grocery', '2020-04-08 04:43:40', '2020-04-08 04:43:40', 1)
;

INSERT INTO ShoppingList
    (item_name,number_items, createdAt,updatedAt, UserId)
VALUES
    ('Starkist', 2, '2020-04-08 04:43:40', '2020-04-08 04:43:40', 1);

INSERT INTO ShoppingList
    (item_name,number_items, createdAt,updatedAt, UserId)
VALUES
    ('Clorox Wipes', 1, '2020-04-08 04:43:40', '2020-04-08 04:43:40', 1);

 
    