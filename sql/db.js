const spicedPg = require("spiced-pg");

const db = spicedPg(
  process.env.DATABASE_URL ||
    "postgres:postgres:postgres@localhost:5432/kantenandmeer"
);

exports.insertProduct = function(
  ref_code,
  internal_code,
  board_supplier,
  base_material,
  model,
  processing_temperature,
  material,
  description
) {
  return db
    .query(
      `INSERT INTO product (
      ref_code,
      internal_code,
      board_supplier,
      base_material,
      model,
      processing_temperature,
      material,
      description
      )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *`,
      [
        ref_code,
        internal_code,
        board_supplier,
        base_material,
        model,
        processing_temperature,
        material,
        description
      ]
    )
    .then(({ rows }) => rows);
};

// exports.getByCode = function(ref_code) {
//   return db.query(`SELECT * FROM product WHERE description = $1;`, [ref_code]);
// };

////////////////////////////////////////////////////////////////////////////////
//WORKING
// exports.getByCode = function() {
//   return db.query(`SELECT * FROM product WHERE ref_code = 'U12007 XG';`);
// };
////////////////////////////////////////////////////////////////////////////////////
//WORKING WITH NOT DYNAMIC ARGUMENTS
// exports.getByCode = function(ref_code) {
//   return db.query(`SELECT * FROM product WHERE ref_code = $1;`, [ref_code]);
// };
//////////////////////////////////////////////////////////////////////////////////
//WORKING WITH NOT DYNAMIC ARGUMENTS
// exports.getByCode = function(ref_code) {
//   return db
//     .query(`SELECT * FROM product WHERE ref_code ILIKE $1;`, [ref_code + "%"])
//     .then(({ rows }) => {
//       return rows;
//     });
// };

exports.getByCode = function(ref_code) {
  return db
    .query(
      `SELECT * FROM
    	product
    WHERE
    	ref_code ILIKE $1
        OR
        internal_code ILIKE $1
        OR
        board_supplier ILIKE $1
        OR
        base_material ILIKE $1
        OR
        model ILIKE $1
        OR
        material ILIKE $1
        LIMIT 6
        ;
`,
      ["%" + ref_code + "%"]
    )
    .then(({ rows }) => {
      return rows;
    });
};

// exports.getUsersByName = function(first) {
//     return db
//         .query(
//             `SELECT first, last, picture_url, id FROM users WHERE first ILIKE $1;`,
//             [first + "%"]
//         )
//         .then(({ rows }) => {
//             return rows;
//         });
// };
