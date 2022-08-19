import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('order', function (table) {
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('users');
        table.integer('product_id').references('id').inTable('products')
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('order');
}