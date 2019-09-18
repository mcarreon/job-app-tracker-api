CREATE TABLE public.users (
 id SERIAL primary key,
 email CHAR(128) unique,
 password CHAR(60),
 creation_date DATE NOT NULL DEFAULT CURRENT_DATE
)