USE inventory_db;

INSERT INTO Users (email,password,createdAt,updatedAt) VALUES('myself@gmail.com','password','2020-04-08 04:43:40','2020-04-08 04:43:40');


INSERT INTO inventory (item_name,item_format,number_items,user_id,createdAt,updatedAt)
VALUES('Hormel Chili','can','10',1,'2020-04-08 04:43:40','2020-04-08 04:43:40');   

INSERT INTO inventory (item_name,item_format,number_items,user_id,createdAt,updatedAt)
VALUES('Cup of Noodles','cup','20',1,'2020-04-08 04:43:40','2020-04-08 04:43:40'); 

INSERT INTO inventory (item_name,item_format,number_items,user_id,createdAt,updatedAt)
VALUES('Chicken of the Sea','can','30',1,'2020-04-08 04:43:40','2020-04-08 04:43:40')     
 
    