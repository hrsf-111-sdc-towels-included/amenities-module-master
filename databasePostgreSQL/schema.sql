-- DROP DATABASE IF EXISTS b4b_ameniti
-- CREATE DATABASE b4b_amenities;


\c b4b_amenities;

CREATE TABLE amenities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL,
  appeal integer NOT NULL,
  category VARCHAR(20),
  common BOOLEAN NOT NULL,
  description VARCHAR(100),
  img_url VARCHAR(500) NOT NULL
);

CREATE TABLE homes (
  id SERIAL PRIMARY KEY
);


CREATE TABLE amen_join_home (
  id SERIAL PRIMARY KEY,
  home_id INTEGER REFERENCES homes (id),
  amen_id INTEGER REFERENCES amenities (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u <USER> -p < schema.sql
*/

-- amenities
INSERT INTO amenities (name,appeal,category,common,description,img_url) VALUES ('Wifi',9,'Basic',TRUE,'Continuous access in the listing','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/wifi.png');
INSERT INTO amenities (name,appeal,category,common,description,img_url) VALUES ('Breakfast',3,'Basic',FALSE,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/breakfast.png');
INSERT INTO amenities (name,appeal,category,common,description,img_url) VALUES ('Washer',5,'Basic',FALSE,'In the building, free or for a fee','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/washer.png');
INSERT INTO amenities (name,appeal,category,common,description,img_url) VALUES ('Dryer',5,'Basic',FALSE,'In the building, free or for a fee','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/dryer.png');
INSERT INTO amenities (name,appeal,category,common,description,img_url) VALUES ('Pet friendly',8,'Facilities',FALSE,'Guest responsible for all pet related damages','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/pets.png');
INSERT INTO amenities (name,appeal,category,common,description,img_url) VALUES ('Fireplace',7,'Facilities',FALSE,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/fireplace.png');
INSERT INTO amenities (name,appeal,category,common,description,img_url) VALUES ('Free parking',7,'Facilities',TRUE,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/parking.png');
INSERT INTO amenities (name,appeal,category,common,description,img_url) VALUES ('Kitchen',6,'Facilities',TRUE,'Space where guests can cook their own meals','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/kitchen.png');
INSERT INTO amenities (name,appeal,category,common,description,img_url) VALUES ('Cable TV',5,'Basic',TRUE,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/tv.png');
INSERT INTO amenities (name,appeal,category,common,description,img_url) VALUES ('Air conditioning',4,'Basic',TRUE,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/ac.png');
INSERT INTO amenities (name,appeal,category,common,description,img_url) VALUES ('Pickle jar',9,'Hip',TRUE,'Mason jar filled w/ dill','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/jar.png');
INSERT INTO amenities (name,appeal,category,common,description,img_url) VALUES ('French press',9,'Hip',TRUE,'Fair Trade coffee only','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/frenchpress.png');
INSERT INTO amenities (name,appeal,category,common,description,img_url) VALUES ('VHS player',3,'Hip',FALSE,'Be kind rewind','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/vhs.png');
INSERT INTO amenities (name,appeal,category,common,description,img_url) VALUES ('Fixie rack',3,'Hip',FALSE,'Who needs gears?','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/bikerack.png');
INSERT INTO amenities (name,appeal,category,common,description,img_url) VALUES ('Carbon monoxide detector',0,'Facilities',TRUE,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/coDetector.png');

-- join table
-- INSERT INTO amen_join_home (amen_id,home_id) VALUES (1);
\copy homes(id) FROM '/Users/aimen/Desktop/Hackreactor/SDC/amenities-module-master/databasePostgreSQL/data/homes.csv' ( FORMAT CSV , HEADER);
\copy amen_join_home(home_id, amen_id) FROM '/Users/aimen/Desktop/Hackreactor/SDC/amenities-module-master/databasePostgreSQL/data/amenitySets.csv' ( FORMAT CSV , DELIMITER(','), HEADER);

-- COPY amen_join_home FROM '/Users/aimen/Desktop/Hackreactor/SDC/amenities-module-master/databasePostgreSQL/data/amenitySet.csv' ( FORMAT CSV , DELIMITER(','), HEADER);
