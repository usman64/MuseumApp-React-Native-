-- PUPPET
-- new puppet
INSERT INTO puppets(puppetName, category, puppetYear, region, description) VALUES ('Stickman','string', '1975', 'India', 'this puppet was made in india in 1995');
INSERT INTO puppets(puppetName, category, puppetYear, region, description) VALUES ('Bablu', 'glove','2010', 'China', 'this state of the art puppet was made in China by the world renowned puppeteer ching chong');
INSERT INTO puppets(puppetName, category, puppetYear, region, description) VALUES ('superman', 'stick','2010', 'Pakistan', 'made in 2010 this puppet has a special place in the history of Pakistan');
INSERT INTO puppets(puppetName, category, puppetYear, region, description) VALUES ('batman', 'stick','2015', 'Pakistan', 'this puppet is hand made, using only wood and clay');

-- insert puppet image
INSERT INTO puppetImage(imageLink, puppetId) VALUES ('https://drive.google.com/uc?id=1w8hS5bCYZWqHwnVRhJTRDzN173z4jGGP', '1');
INSERT INTO puppetImage(imageLink, puppetId) VALUES ('https://drive.google.com/uc?id=1Nv3TlIHk9jUcxVTZJkWaChHUVP9goXHX', '1');
INSERT INTO puppetImage(imageLink, puppetId) VALUES ('https://drive.google.com/uc?id=1bHVPiN7IH96t4sFQ8gUW_xVW2W7vI7dK', '2');
INSERT INTO puppetImage(imageLink, puppetId) VALUES ('https://drive.google.com/uc?id=1bX_CRq3qraOV1jYfhnORmWH26neKYlcL', '2');
INSERT INTO puppetImage(imageLink, puppetId) VALUES ('https://drive.google.com/uc?id=1Rdlxol-hX0-uK-6cuUC-KqT0ozWKEHBz', '3');
INSERT INTO puppetImage(imageLink, puppetId) VALUES ('https://drive.google.com/uc?id=1Kal70DO3CAyUJAHDICoFzRTVH2DctvfX', '3');

-- insert puppet video 
INSERT INTO puppetVideo(videoLink, puppetId) VALUES ('https://drive.google.com/uc?id=10hic6DsThOm-R-T6CLAZh5hALT3JV587', '3');
INSERT INTO puppetVideo(videoLink, puppetId) VALUES ('https://drive.google.com/uc?id=1nsrrAWrbr5zq7VHXcuzHcSBsSMNHcQDm', '2');
INSERT INTO puppetVideo(videoLink, puppetId) VALUES ('https://drive.google.com/uc?id=15wJ3NnHT5WXiV8tRJAoJJGDM9ddqYQFz', '4');
INSERT INTO puppetVideo(videoLink, puppetId) VALUES ('https://drive.google.com/uc?id=1eiAYpnMGTeE4WtqXWI2hNlvvEAb2bNEm', '1');


-- EVENTS 
-- new events insert
INSERT INTO events(eventDescription,eventDate,eventTime,eventCategory,poster) VALUES('this is mock data to test the application','2017-12-15','15:30:00', 'regular','https://drive.google.com/uc?id=1lYGHN6IYI-GTdvCpp7c8J63HiDkU6ms5');
INSERT INTO events(eventDescription,eventDate,eventTime,eventCategory,poster) VALUES('please complete tests before deployment','2018-12-15','10:10:00', 'special','https://drive.google.com/uc?id=1OsNEZ-cDD5ygcFM_2UTHziTMMz_gVpbh');
INSERT INTO events(eventDescription,eventDate,eventTime,eventCategory,poster) VALUES('this case is for the sufi Festival','2017-01-07','10:10:00', 'regular','https://drive.google.com/uc?id=1gLA39gxHyWw4rRRiem1R0WVmvMlCGPLF');
INSERT INTO events(eventDescription,eventDate,eventTime,eventCategory,poster) VALUES('mock data mock data mock data','2018-08-27','18:20:00', 'special','https://drive.google.com/uc?id=1reZVUDgpRa0n5U_7LnJ9bEjZkZFKUuN9');

-- relate an event
INSERT INTO relatedEvents(eventId, relatedEventId) VALUES('1','3');
INSERT INTO relatedEvents(eventId, relatedEventId) VALUES('2','4');

-- -- new event and new related event

-- new event image
INSERT INTO eventImages (eventId, imageLink) VALUES ('2','https://drive.google.com/uc?id=1lYGHN6IYI-GTdvCpp7c8J63HiDkU6ms5');
INSERT INTO eventImages (eventId, imageLink) VALUES ('1','https://drive.google.com/uc?id=1lYGHN6IYI-GTdvCpp7c8J63HiDkU6ms5');
INSERT INTO eventImages (eventId, imageLink) VALUES ('3','https://drive.google.com/uc?id=1S3nVoHNRx7gIX8s7gvhoAVi6_Pwv0Q3_');
INSERT INTO eventImages (eventId, imageLink) VALUES ('4','https://drive.google.com/uc?id=1reZVUDgpRa0n5U_7LnJ9bEjZkZFKUuN9');

-- new event trailer
INSERT INTO  eventTrailer (eventId, trailerLink) VALUES ('1','https://drive.google.com/uc?id=1iW8HCK-GXeJxEX6Ov__wiR9uUdT6Gj7M');
INSERT INTO  eventTrailer (eventId, trailerLink) VALUES ('2','https://drive.google.com/uc?id=1k-jBDyke3V8Tq8gEBTnx3jAjZT5QlAaL');
INSERT INTO  eventTrailer (eventId, trailerLink) VALUES ('3','https://drive.google.com/uc?id=1xlZBrrCoXxj4ggtyEnhRzjr2VoQKB3cl');
INSERT INTO  eventTrailer (eventId, trailerLink) VALUES ('4','https://drive.google.com/uc?id=15PS353AvPxHDpHP5ZWaco94tpCZOtKLk');


-- new floor map insert 
INSERT INTO maps(floorId, imageLink) VALUES('1','https://drive.google.com/uc?id=1cLc4F1fafm83jclbdU2iPNgHnOkklAIa');
INSERT INTO maps(floorId, imageLink) VALUES('2','https://drive.google.com/uc?id=13Y_u9uyeWmRqCd-DRclm5FZGCPmCe3hZ');


-- event images
/*
https://drive.google.com/uc?id=1lYGHN6IYI-GTdvCpp7c8J63HiDkU6ms5
https://drive.google.com/uc?id=1OsNEZ-cDD5ygcFM_2UTHziTMMz_gVpbh
https://drive.google.com/uc?id=1gLA39gxHyWw4rRRiem1R0WVmvMlCGPLF
https://drive.google.com/uc?id=1S3nVoHNRx7gIX8s7gvhoAVi6_Pwv0Q3_
https://drive.google.com/uc?id=1reZVUDgpRa0n5U_7LnJ9bEjZkZFKUuN9

-- unused images
https://drive.google.com/uc?id=1uDqrXP7HaUyZ3vCTW79w9CZ85f-1t5HY
https://drive.google.com/uc?id=1TESD71Io5yA-4nwn8FQXvLLSjkphjvOg

-- puppet images
https://drive.google.com/uc?id=1Rdlxol-hX0-uK-6cuUC-KqT0ozWKEHBz
https://drive.google.com/uc?id=1Kal70DO3CAyUJAHDICoFzRTVH2DctvfX
https://drive.google.com/uc?id=1bX_CRq3qraOV1jYfhnORmWH26neKYlcL
https://drive.google.com/uc?id=1bHVPiN7IH96t4sFQ8gUW_xVW2W7vI7dK
https://drive.google.com/uc?id=1Nv3TlIHk9jUcxVTZJkWaChHUVP9goXHX
https://drive.google.com/uc?id=1w8hS5bCYZWqHwnVRhJTRDzN173z4jGGP

-- video links
https://drive.google.com/uc?id=1iW8HCK-GXeJxEX6Ov__wiR9uUdT6Gj7M
https://drive.google.com/uc?id=1k-jBDyke3V8Tq8gEBTnx3jAjZT5QlAaL
https://drive.google.com/uc?id=1xlZBrrCoXxj4ggtyEnhRzjr2VoQKB3cl
https://drive.google.com/uc?id=15PS353AvPxHDpHP5ZWaco94tpCZOtKLk
https://drive.google.com/uc?id=10hic6DsThOm-R-T6CLAZh5hALT3JV587
https://drive.google.com/uc?id=1nsrrAWrbr5zq7VHXcuzHcSBsSMNHcQDm
https://drive.google.com/uc?id=15wJ3NnHT5WXiV8tRJAoJJGDM9ddqYQFz
https://drive.google.com/uc?id=1eiAYpnMGTeE4WtqXWI2hNlvvEAb2bNEm

-- map images
https://drive.google.com/uc?id=1cLc4F1fafm83jclbdU2iPNgHnOkklAIa
https://drive.google.com/uc?id=13Y_u9uyeWmRqCd-DRclm5FZGCPmCe3hZ
*/