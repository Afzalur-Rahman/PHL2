CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL
);

CREATE TABLE "post" (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER REFERENCES "user"(id)
);


INSERT INTO "user" (username) VALUES 
     ('akash'),
     ('batash'),
     ('shagor'),
     ('nodi');

SELECT * FROM "user";     

INSERT INTO post (title,user_id) VALUES('test',8);


create 