
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "full_name" VARCHAR (100) NOT NULL,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "considerations" VARCHAR (2000),
    "access_level" INTEGER NOT NULL
);

CREATE TABLE "emotion" (
	"id" SERIAL PRIMARY KEY,
	"emotion_name" VARCHAR (100) NOT NULL,
	"emotion_value" INTEGER NOT NULL
);

CREATE TABLE "sensation" (
	"id" SERIAL PRIMARY KEY,
	"sensation_name" VARCHAR (100) NOT NULL,
	"sensation_value" INTEGER NOT NULL
);

CREATE TABLE "input" (
	"id" SERIAL PRIMARY KEY,
	"created_at" TIMESTAMP DEFAULT now() NOT NULL,
	"user_id" INTEGER REFERENCES "user",
	"emotion_id" INTEGER REFERENCES "emotion",
	"sensation_id" INTEGER REFERENCES "sensation"
);
