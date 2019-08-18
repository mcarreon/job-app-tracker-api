CREATE TABLE users (
  id UUID NOT NULL,
  email CHAR(128) unique,
  password CHAR(60),
  creation_date DATE NOT NULL DEFAULT CURRENT_DATE,
  CONSTRAINT users_pkey PRIMARY KEY(id)
) 
WITH ( OIDS = false );