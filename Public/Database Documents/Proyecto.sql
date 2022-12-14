-- This script was generated by a beta version of the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public."Organizacion "
(
    "Id_organizacion" bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    nombre character varying COLLATE pg_catalog."default" NOT NULL,
    nom_proyecto character varying COLLATE pg_catalog."default" NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    nom_organizacion character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Organizacion _pkey" PRIMARY KEY ("Id_organizacion")
);

CREATE TABLE IF NOT EXISTS public."Proyecto"
(
    "Id_proyecto" bigint NOT NULL,
    organizacion_id bigint NOT NULL,
    indicador_impacto character varying COLLATE pg_catalog."default" NOT NULL,
    "descripción" text COLLATE pg_catalog."default" NOT NULL,
    insumos text COLLATE pg_catalog."default" NOT NULL,
    video character varying COLLATE pg_catalog."default" NOT NULL,
    carta_bienvenida text COLLATE pg_catalog."default" NOT NULL,
    logo character varying COLLATE pg_catalog."default" NOT NULL,
    regis_fotografico character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Proyecto_pkey" PRIMARY KEY ("Id_proyecto")
);

ALTER TABLE IF EXISTS public."Proyecto"
    ADD CONSTRAINT organizacion_proyecto FOREIGN KEY (organizacion_id)
    REFERENCES public."Organizacion " ("Id_organizacion") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;