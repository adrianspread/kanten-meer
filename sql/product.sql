DROP TABLE IF EXISTS product CASCADE;

CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    ref_code VARCHAR NOT NULL UNIQUE CHECK (ref_code != ''),
    internal_code VARCHAR NOT NULL CHECK(internal_code != ''),
    board_supplier VARCHAR(255),
    base_material VARCHAR(255),
    model VARCHAR(255),
    processing_temperature INT,
    material VARCHAR(255),
    description VARCHAR(255),
    picture_url VARCHAR(255)
);



