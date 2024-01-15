show databases;

create database studentdb;

use studentdb;

CREATE TABLE student (
    studentid int,
    studentname varchar(255),
    gender varchar(255),
    subject1 varchar(255),
    subject2 varchar(255),
    subject3 varchar(255),
    totalmarks varchar(255),
    percentage varchar(255)
);

INSERT INTO student (studentid, studentname, gender, subject1, subject2, subject3,totalmarks,percentage)
VALUES (1, 'Anup', 'M', '0','0','0','0','0');

INSERT INTO student (studentid, studentname, gender, subject1, subject2, subject3,totalmarks,percentage)
VALUES (2, 'Sabin', 'M', '0','0','0','0','0');


select * from student;

select * from student where studentname='Anup';

select * from student where studentname like '%nu%';


UPDATE student
SET studentid=4
WHERE studentname='Sabin';

DELETE FROM student where studentid=4;

delete from studentdb.student;

