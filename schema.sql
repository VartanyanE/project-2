-- Drops the inventory_db if it exists currently --
DROP DATABASE IF EXISTS inventory_db;

-- Creates the "inventory_db" database --
CREATE DATABASE inventory_db;

-- Switches to inventory_db database
USE inventory_db;

CREATE TABLE `Users`
(
id INT NOT NULL AUTO_INCREMENT,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
 createdAt DATETIME NOT NULL,
 updatedAt DATETIME NOT NULL,
 user_name VARCHAR(255) NOT NULL,
 PRIMARY KEY
(id)
);

-- Creates the inventory table
CREATE TABLE `inventory`
(
    id INT NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(255) NOT NULL,
    item_format VARCHAR(255) NOT NULL,
    number_items INTEGER,
    category VARCHAR(255) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    UserId INTEGER NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY
(user_id) REFERENCES Users(id)
);

CREATE TABLE `ShoppingList`
(
id INT NOT NULL AUTO_INCREMENT,
item_name VARCHAR(255) NOT NULL,
number_items INTEGER NOT NULL,
createdAt DATETIME,
updatedAt DATETIME,
UserId INTEGER NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES Users
(id)
)

