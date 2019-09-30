create table dr.users {
    id serial NOT NULL ,
    first_name varchar(255),
    last_name varchar(255),
    active boolean DEFAULT true,
    inserted_at timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP NOT NULL  ,
    updated_at  timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP NOT NULL  ,

}
create table dr.videos {
    id serial NOT NULL,
    title varchar(255),
    description varchar(255),
    hierarchy_id int
}

create table dr.heirarchy_id {
    id serial NOT NULL

}

create table dr.about {
    id serial NOT NULL,
    header text,
    body text,
    footer text

}

create table dr.home {
    id serial NOT NULL,
    company_desc text,
    invite text,
    call_action text

}