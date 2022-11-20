

exports.up = function (knex) {
  return knex.schema.createTable('cars', (tbl) => {
    tbl.increments();
    tbl.string('vin')
      .dropNullable()
      .unique();
    tbl.string('make')
      .dropNullable();
    tbl.string('model')
      .dropNullable();
    tbl.decimal('mileage', { precision: null })
      .dropNullable();
    tbl.string('title');
    tbl.string('tansmission');
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
};
