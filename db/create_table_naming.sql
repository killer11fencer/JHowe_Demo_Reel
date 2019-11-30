create table nc.users (
    id serial NOT NULL,
    first_name varchar(50),
    last_name varchar(50),
    admin DEFAULT false,
    email varchar(100)
)

create table nc.department (
    id serial NOT NULL,
    department_name varchar,
    department_id varchar
)

create table nc.file_name (
    id serial NOT NULL,
    
)