-- Active: 1747481715592@@127.0.0.1@5432@b5_psql_cs@public
CREATE DATABASE b5_psql_cs;

CREATE TABLE publishers (

id SERIAL primary key,
name TEXT NOT NULL



);

CREATE TABLE books(
 id SERIAL PRIMARY KEY,
 title TEXT NOT NULL,
 author_name TEXT,
 published_year INT,
 price NUMERIC(6,2),
 in_stock BOOLEAN,
 publisher_id INT,
 FOREIGN KEY (publisher_id) REFERENCES publishers(id)



);