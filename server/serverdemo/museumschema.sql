CREATE TABLE puppets(
    id NOT NULL AUTO_INCREMENT,
    category VARCHAR(255), 
    puppet_year YEAR,
    region VARCHAR(255),
    description MEDIUMTEXT,
    PRIMARY KEY(id)
);

CREATE TABLE puppet_image(
    id,
    image_id,
    image_link,
    PRIMARY KEY(id)
);

CREATE TABLE puppet_video(
    id,
    video_id,
    video_link,
    PRIMARY KEY(id)
);

CREATE TABLE events(
    id,
    date,
    time,
    category,
    poster
);

CREATE TABLE related_events(
    id,
    related_event_id
);

CREATE TABLE event_photos(
    id,
    image_id,
    image
);

CREATE TABLE event_trailer(
    id,
    trailer_id
    trailer
);

CREATE TABLE maps(
    floor_id,
    image
);