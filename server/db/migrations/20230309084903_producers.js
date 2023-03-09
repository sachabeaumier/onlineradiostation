/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('producers', (table) => {
    table.integer('producer_id').primary()
    table.string('producer_name')
    table.string('email_contact')
    table.string('producer_description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('producers')
}
