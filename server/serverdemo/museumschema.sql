-- USE testing1;
CREATE SEQUENCE puppets_seq;

CREATE TABLE puppets (
	puppetId INT CHECK (puppetId > 0) DEFAULT NEXTVAL ('puppets_seq') NOT NULL PRIMARY KEY,
	category VARCHAR(255),
	puppetYear INTEGER,
	region VARCHAR(255),
	description TEXT
);

CREATE SEQUENCE puppetImage_seq;

CREATE TABLE puppetImage (
	imageId INT CHECK (imageId > 0) DEFAULT NEXTVAL ('puppetImage_seq') NOT NULL PRIMARY KEY,
    imageLink VARCHAR(255),
    puppetId INT CHECK (puppetId > 0),
    FOREIGN KEY (puppetId) REFERENCES puppets(puppetId)
);

CREATE SEQUENCE puppetVideo_seq;

CREATE TABLE puppetVideo (
    videoId INT CHECK (videoId > 0) DEFAULT NEXTVAL ('puppetVideo_seq') NOT NULL PRIMARY KEY,
    videoLink VARCHAR(255),
    puppetId INT CHECK (puppetId > 0),
    FOREIGN KEY (puppetId) REFERENCES puppets(puppetId)
);
-- -- -- -- -- -- -- -- -- -- --
CREATE SEQUENCE events_seq;

CREATE TABLE events (
    eventId INT CHECK (eventId > 0) DEFAULT NEXTVAL ('events_seq') NOT NULL PRIMARY KEY,
    eventDescription TEXT,
    eventDate DATE,
    eventTime TIME(0),
    eventCategory VARCHAR(255), -- regular special 
    poster VARCHAR(255) -- link
);

CREATE TABLE relatedEvents(
    eventId INT CHECK (eventId > 0),
    FOREIGN KEY (eventId) REFERENCES events(eventId),
    relatedEventId INT CHECK (relatedEventId > 0),-- inherits from events
    PRIMARY KEY (eventId, relatedEventId)
);

CREATE SEQUENCE eventImages_seq;

CREATE TABLE eventImages (
	imageId INT CHECK (imageId > 0) DEFAULT NEXTVAL ('eventImages_seq') NOT NULL PRIMARY KEY,-- don't need this
    eventId INT CHECK (eventId > 0),
    FOREIGN KEY (eventId) REFERENCES events(eventId),
    imageLink VARCHAR(255)
);

CREATE SEQUENCE eventTrailer_seq;

CREATE TABLE eventTrailer (
    trailerId INT CHECK (trailerId > 0) DEFAULT NEXTVAL ('eventTrailer_seq') NOT NULL PRIMARY KEY, --don't need this
    eventId INT CHECK (eventId > 0),
    FOREIGN KEY (eventId) REFERENCES events(eventId),
    trailerLink VARCHAR(255)
);
-- -- -- -- --
CREATE TABLE maps (
    floorId INT CHECK (floorId > 0),
    imageLink VARCHAR(255),
    PRIMARY KEY(floorId, imageLink)
);