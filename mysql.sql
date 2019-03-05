DROP DATABASE IF EXISTS friends_db;
CREATE DATABASE friends_db;
USE friends_db;

CREATE TABLE users(
userId INT auto_increment primary key,
userName varchar(255) not null,
bio varchar(255),
picUrl varchar(255),
total INT not null
);
INSERT INTO users(userName,bio,picUrl,total)
VALUES("Jerry","hi","https://i.pinimg.com/originals/e3/23/e2/e323e25541aadd4a179c04b2023cd6c5.jpg",5);
INSERT INTO users(userName,bio,picUrl,total)
VALUES("mary","hi","https://i.pinimg.com/originals/e3/23/e2/e323e25541aadd4a179c04b2023cd6c5.jpg",17);
INSERT INTO users(userName,bio,picUrl,total)
VALUES("lou","hi","https://i.pinimg.com/originals/e3/23/e2/e323e25541aadd4a179c04b2023cd6c5.jpg",8);
INSERT INTO users(userName,bio,picUrl,total)
VALUES("steve","hi","https://i.pinimg.com/originals/e3/23/e2/e323e25541aadd4a179c04b2023cd6c5.jpg",25);
INSERT INTO users(userName,bio,picUrl,total)
VALUES("trump","UUUge","https://i.pinimg.com/originals/e3/23/e2/e323e25541aadd4a179c04b2023cd6c5.jpg",10);
INSERT INTO users(userName,bio,picUrl,total)
VALUES("Matilda","Get er done","https://i.pinimg.com/originals/e3/23/e2/e323e25541aadd4a179c04b2023cd6c5.jpg",20);
INSERT INTO users(userName,bio,picUrl,total)
VALUES("kevjumba","How yall doing","https://i.pinimg.com/originals/e3/23/e2/e323e25541aadd4a179c04b2023cd6c5.jpg",5);
INSERT INTO users(userName,bio,picUrl,total)
VALUES("rick sanchez","wubabaluba dub dub","https://i.pinimg.com/originals/e3/23/e2/e323e25541aadd4a179c04b2023cd6c5.jpg",22);
