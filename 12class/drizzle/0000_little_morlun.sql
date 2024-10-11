CREATE TABLE IF NOT EXISTS "todonew2" (
	"id" serial PRIMARY KEY NOT NULL,
	"title1" varchar(256) NOT NULL,
	"is_completed" boolean DEFAULT false
);
