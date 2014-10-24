CREATE TABLE users(
first_name text,
last_name text,
email text,
password_digest text,
style text,
technique_of_choice text,
location text
);

CREATE TABLE schools(
name text,
style text,
description text,
lineage text,
country_of_origin text,
location text,
phone_number text,
email text,
site_link text,
facebook_link text,
twitter_link text,
user_id integer,
verification boolean
);

CREATE TABLE styles(
name text
);

CREATE TABLE logos(
title text,
image text,
school_id integer
);

CREATE TABLE photos(
title text,
location text,
image text,
user_id integer,
school_id integer
);

CREATE TABLE students(
school_id integer,
user_id integer
);

CREATE TABLE followers(
user_id integer,
school_id integer
);

CREATE TABLE join_styles(
user_id integer,
school_id integer,
style_id
);




