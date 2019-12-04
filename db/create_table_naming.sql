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
    department_abbr varchar,
    description_id integer,
)

create table nc.description (
    id serial NOT NULL,
    description varchar(255)
)
create table nc.versions (
    id serial NOT NULL,
    
)
create table nc.file_name (
    id serial NOT NULL,
    department_id integer,
    description_id integer,
    inserted_at timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at  timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP NOT NULL  
)

create table  something ()