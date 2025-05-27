CREATE TABLE rangers(
ranger_id SERIAL PRIMARY KEY,
name VARCHAR(255) ,
region VARCHAR(255)
);

CREATE TABLE species(

species_id SERIAL PRIMARY KEY,
common_name varchar(255),
scientific_name varchar(255),
discovery_date DATE,
conservation_status VARCHAR(255)
);

CREATE TABLE sightings(

sighting_id SERIAL PRIMARY KEY,
ranger_id INT REFERENCES rangers(ranger_id),
species_id INT REFERENCES species(species_id),
sighting_time TIMESTAMP,
location VARCHAR(255),
notes TEXT

);


INSERT INTO rangers(name,region) VALUES
('Alice Green','Northern Hills'),
('Bob White','River Delta'),
('Carol King','Mountain Range');


INSERT INTO species(common_name,scientific_name,discovery_date,conservation_status) VALUES
('Snow Leopard', 'Panthera unica', '1775-01-01', 'Endangered'),
('Bengal Tiger', 'Panthera tigris tigris', '1758-01-01', 'Endangered'),
('Red Panda', 'Ailurus fulgens', '1825-01-01', 'Vulnerable'),
('Asiatic Elephant', 'Elephas maximus indicus', '1758-01-01', 'Endangered');

INSERT INTO sightings(ranger_id,species_id,location,sighting_time,notes) VALUES

( 1          , 1         , 'Peak Ridge'        , '2024-05-10 07:45:00' ,'Camera trap image captured' ),
( 2          , 2         , 'Bankwood Area'     , '2024-05-12 16:20:00' , 'Juvenile seen '             ),
( 3          , 3         ,'Bamboo Grove East' , '2024-05-15 09:10:00' , 'Feeding observed '          ),
( 1          , 2         , 'Snowfall Pass'     , '2024-05-18 18:30:00' , NULL  );


--1--
INSERT INTO rangers(name,region) VALUES
('Derek Fox','Coastal Plains');

--2--
SELECT COUNT(species_id) AS unique_species_count FROM species; 

--3--
SELECT * FROM sightings WHERE
location ILIKE '%pass%';

--4--
SELECT ran.name, COUNT(st.sighting_id) AS total_sightings FROM rangers ran
LEFT JOIN sightings st ON ran.ranger_id = st.ranger_id GROUP BY ran.name ORDER BY ran.name;

--5--
SELECT common_name FROM species sp LEFT JOIN sightings st ON sp.species_id= st.species_id
WHERE st.species_id IS NULL;

--6--
SELECT sp.common_name,st.sighting_time,ran.name 
FROM sightings st JOIN species sp ON sp.species_id = st.species_id 
JOIN rangers ran ON ran.ranger_id = st.ranger_id
ORDER BY st.sighting_time DESC 
LIMIT 2;

--7--
UPDATE species SET conservation_status = 'Historic' 
WHERE discovery_date < '1800-01-01';

--8--

SELECT sighting_id,
   CASE 
   WHEN EXTRACT (HOUR FROM sighting_time) <12 THEN 'Morning'
   WHEN EXTRACT (HOUR FROM sighting_time) BETWEEN 12 AND 17 THEN 'Afternoon'
   WHEN EXTRACT (HOUR FROM sighting_time) >17 THEN 'Evening'
   END AS time_of_day FROM sightings ORDER BY sighting_id;





--9--
DELETE FROM rangers WHERE ranger_id NOT IN(
SELECT DISTINCT ranger_id FROM sightings

);