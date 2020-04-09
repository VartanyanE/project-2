-- Drops the inventory_db if it exists currently --
DROP DATABASE IF EXISTS inventory_db;

-- Creates the "inventory_db" database --
CREATE DATABASE inventory_db;

-- Switches to inventory_db database
USE inventory_db;

-- Creates the inventory table
CREATE TABLE `inventory`
(
    id INT NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(255) NOT NULL,
    item_format VARCHAR(255) NOT NULL,
    number_items INTEGER,
    user_id INTEGER,
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY(id),
    FOREIGN KEY
        (user_id) REFERENCES Users (id)
);
