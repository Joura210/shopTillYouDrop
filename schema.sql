Drop database if exists bamazon_db;

create database bamazon_db;

use bamazon_db;

create table products(
    product_id int not null auto_increment,
    product varchar(50) not null,
    department varchar(50),
    price decimal (6,2) not null,
    stock integer(8),
    primary key(product_id)
);

insert into products(product, department, price, stock)
values ( "TV", "Electronics", 200, 10),
("Computer", "Electronics", 500, 10),
("Record Player", "Electronics", 50, 20),
("Mistborn", "Literature", 15, 20),
("Warbreaker", "Literature", 10, 20),
("War and Peace", "Literature", 15, 20),
("Love Seat", "Furniture", 300, 10),
("Leather Recliner", "Furniture", 450, 5),
("Patio Set", "Furniture,", 900, 5),
("Hammock", "Furniture", 60, 10);