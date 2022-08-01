CREATE DATABASE javatable;

CREATE TABLE javatableData(
    id_java SERIAL PRIMARY KEY,
    "Asset Type" text COLLATE pg_catalog."default",
    "Asset" text COLLATE pg_catalog."default",
    "From" text COLLATE pg_catalog."default",
    "To" text COLLATE pg_catalog."default",
    "Quantity" real,
    "Basis Date" date,
    "Proceed Date" date,
    "Gross Proceed" real,
    "Cost of Basis" real,
    "Net" real,
    "Transaction Type" text COLLATE pg_catalog."default",
    "Duration" text COLLATE pg_catalog."default",
    "Block" integer,
    "Transaction ID" text COLLATE pg_catalog."default",
    "Note" text COLLATE pg_catalog."default",
    "Source" text COLLATE pg_catalog."default",
    "Token Price" real
);

