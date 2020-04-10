USE inventory_db;

<<<<<<< Updated upstream
INSERT INTO Users (email,password,createdAt,updatedAt) VALUES('myself@gmail.com','password','2020-04-08 04:43:40','2020-04-08 04:43:40');


INSERT INTO inventory (item_name,item_format,number_items,user_id,createdAt,updatedAt)
VALUES('Hormel Chili','can','10',1,'2020-04-08 04:43:40','2020-04-08 04:43:40');   

INSERT INTO inventory (item_name,item_format,number_items,user_id,createdAt,updatedAt)
VALUES('Cup of Noodles','cup','20',1,'2020-04-08 04:43:40','2020-04-08 04:43:40'); 

INSERT INTO inventory (item_name,item_format,number_items,user_id,createdAt,updatedAt)
VALUES('Chicken of the Sea','can','30',1,'2020-04-08 04:43:40','2020-04-08 04:43:40')     
=======
INSERT INTO Users
    (email,password,user_name,createdAt,updatedAt)
VALUES('gin@luthercorp.com', 'password','Martin Funches', '2020-04-08 04:43:40', '2020-04-08 04:43:40' );


INSERT INTO inventory
    (item_name,item_format,number_items,createdAt,updatedAt,UserId)
VALUES('Hormel Chili', 'can', '10', '2020-04-08 04:43:40', '2020-04-08 04:43:40',1);

INSERT INTO inventory
    (item_name,item_format,number_items,createdAt,updatedAt,UserId)
VALUES('Cup of Noodles', 'cup', '20', '2020-04-08 04:43:40', '2020-04-08 04:43:40',1);

INSERT INTO inventory
    (item_name,item_format,number_items,createdAt,updatedAt,UserId)
VALUES('Chicken of the Sea', 'can', '30', '2020-04-08 04:43:40', '2020-04-08 04:43:40',1) ;

INSERT INTO shopping_list
(item_name,number_items, createdAt,updatedAt, UserId) 
VALUES ('Starkist',2, '2020-04-08 04:43:40', '2020-04-08 04:43:40',1);

INSERT INTO shopping_list
(item_name,number_items, createdAt,updatedAt, UserId) 
VALUES ('Clorox Wipes',1, '2020-04-08 04:43:40', '2020-04-08 04:43:40',1);
   
>>>>>>> Stashed changes
 
    