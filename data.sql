insert into classrooms values (1,"Packard","101",500);
insert into classrooms values (2,"Painter","514", 10);
insert into classrooms values (3,"Taylor","3128", 70);
insert into classrooms values (4,"Watson", "100", 30);
insert into classrooms values (5,"Watson","120", 50);

insert into departments values (1,"Biology", "Watson" ,90000);
insert into departments values (2,"Comp. Sci." ,"Taylor", 100000);
insert into departments values (3,"Elec. Eng." ,"Taylor", 85000);
insert into departments values (4,"Finance", "Painter", 120000);
insert into departments values (5,"History", "Painter" ,50000);
insert into departments values (6,"Music" ,"Packard", 80000);
insert into departments values (7,"Physics", "Watson", 70000);

insert into courses values(1101 ,"Intro. to Biology" ,4, 1);
insert into courses values(1301, "Genetics", 4, 1);
insert into courses values(1399 ,"Computational Biology" ,3, 1);
insert into courses values(2101, "Intro. to Computer Science", 4, 2);
insert into courses values(2190, "Game Design" , 4, 2);
insert into courses values(2315 ,"Robotics", 3, 2);
insert into courses values(2319, "Image Processing", 3, 2);
insert into courses values(2347, "Database System Concepts" ,3, 2);
insert into courses values(3181, "Intro. to Digital Systems" ,3, 3);
insert into courses values(4201, "Investment Banking" ,3, 5);
insert into courses values(5351, "World History", 3, 4);
insert into courses values(6199, "Music Video Production", 3, 6);
insert into courses values (7101 , "Physical Principles", 4, 7);

insert into instructors values (10101, "Srinivasan",  65000, 2);
insert into instructors values (12121, "Wu",  90000, 4);
insert into instructors values (15151, "Mozart",  40000, 6);
insert into instructors values (22222, "Einstein",  95000, 7);
insert into instructors values (32343, "El Said" , 60000, 5);
insert into instructors values (33456, "Gold" , 87000, 7);
insert into instructors values (45565, "Katz" , 75000, 2);
insert into instructors values (58583, "Califieri",  62000, 5);
insert into instructors values (76543, "Singh" , 80000, 4);
insert into instructors values (76766, "Crick" , 72000, 1);
insert into instructors values (83821, "Brandt" , 92000, 2);
insert into instructors values (98345 ,"Kim",  80000, 3);

insert into timeslots values (10, "M", "8:00", "8:50");
insert into timeslots values (11, "W", "8:00", "8:50");
insert into timeslots values (12, "F", "8:00", "8:50");
insert into timeslots values (13, "M", "9:00", "9:50");
insert into timeslots values (14, "W", "9:00", "9:50");
insert into timeslots values (15, "F", "9:00", "9:50");
insert into timeslots values (16, "M", "11:00", "11:50");
insert into timeslots values (17, "W", "11:00", "11:50");
insert into timeslots values (19, "F", "11:00", "11:50");
insert into timeslots values (19, "M", "13:00", "13:50");
insert into timeslots values (21, "W", "13:00", "13:50");
insert into timeslots values (22, "F", "13:00", "13:50");
insert into timeslots values (23, "T", "10:30", "11:45");
insert into timeslots values (24, "R", "10:30", "11:45");
insert into timeslots values (25, "T", "14:30", "15:45");
insert into timeslots values (26, "R", "14:30", "15:45");
insert into timeslots values (27, "M", "16:00", "16:50");
insert into timeslots values (28, "W", "16:00", "16:50");
insert into timeslots values (29, "F", "16:00", "16:50");
insert into timeslots values (30, "W", "10:00", "12:30");

insert into sections values (10, "Summer", 2009 ,1101, 2, 10);
insert into sections values (11, "Summer", 2010 ,1301, 2, 12);
insert into sections values (12, "Fall", 2009   ,2101 , 1, 20);
insert into sections values (13, "Spring", 2010 ,2101 , 1, 13);
insert into sections values (14, "Spring", 2009 ,2190 , 3, 14);
insert into sections values (15, "Spring", 2009 ,2190 , 3,12);
insert into sections values (16, "Spring", 2010 ,2315 , 5, 15);
insert into sections values (17, "Spring", 2010 ,2319 , 4, 10);
insert into sections values (18, "Spring", 2010 ,2319 , 3,16);
insert into sections values (19, "Fall", 2009   ,2347 , 3,12);
insert into sections values (20, "Spring", 2009 ,3181  , 3,18);
insert into sections values (21, "Spring", 2010 ,4201, 1, 10);
insert into sections values (22, "Spring", 2010 ,5351, 2, 18);
insert into sections values (23, "Spring", 2010 ,6199 , 1, 15);
insert into sections values (24, "Fall",2009,7101,4, 12);


insert into teaches values (10101, 12);
insert into teaches values (10101, 16);
insert into teaches values (10101, 19);
insert into teaches values (12121, 21);
insert into teaches values (15151, 14);
insert into teaches values (22222, 24);
insert into teaches values (32343, 22);
insert into teaches values (45565, 13);
insert into teaches values (45565, 17);
insert into teaches values (76766, 10);
insert into teaches values (76766, 11);
insert into teaches values (83821, 14);
insert into teaches values (83821, 15);
insert into teaches values (83821, 17);
insert into teaches values (98345, 20);

insert into students values (10,"00128","admin", "Zhang", 2);
insert into students values (11,"12345","admin", "Shankar", 2);
insert into students values (12,"19991","admin", "Brandt", 5);
insert into students values (13,"23121","admin", "Chavez", 4);
insert into students values (14,"44553","admin", "Peltier", 7);
insert into students values (15,"45678","admin", "Levy", 7);
insert into students values (16,"54321","admin", "Williams", 2);
insert into students values (17,"55739","admin", "Sanchez", 6);
insert into students values (18,"70557","admin", "Snow", 7);
insert into students values (19,"76543","admin", "Brown", 2);
insert into students values (20,"76653","admin", "Aoi", 3);
insert into students values (21,"98765","admin", "Bourikas", 3);
insert into students values (22,"98988","admin", "Tanaka", 1);


insert into takes values ("A",12,10);
insert into takes values ("A-",19,10);
insert into takes values ("C",12,11); 
insert into takes values ("A",14,11);
insert into takes values ("A",16,11);
insert into takes values ("A",19,11);
insert into takes values ("B",22,12);
insert into takes values ("C+",21,14);
insert into takes values ("B-",24,14);
insert into takes values ("F",12,15);
insert into takes values ("B+",13,15);
insert into takes values ("B",17,15);
insert into takes values ("A-",12,16);
insert into takes values ("B+",14,16);
insert into takes values ("A-",23,17);
insert into takes values ("A",12,19);
insert into takes values ("A",17,19);
insert into takes values ("C",20,20);
insert into takes values ("C-",12,21);
insert into takes values ("B",16,21);
insert into takes values ("A",10,22);
insert into takes values ("0",11,22);

insert into prereqs values (1301, 1101);
insert into prereqs values (1399, 1101);
insert into prereqs values (2190, 2101);
insert into prereqs values (2315, 2101);
insert into prereqs values (2319, 2101);
insert into prereqs values (2347, 2101);
insert into prereqs values (3181, 7101);