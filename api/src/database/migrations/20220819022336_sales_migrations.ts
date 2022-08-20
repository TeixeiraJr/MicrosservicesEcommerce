import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('order', function (t) {
        t.increments('id').primary();
        t.integer('user_id').references('id').inTable('users').notNullable();
        t.integer('product_id').references('id').inTable('products').notNullable();
        t.integer('amount').notNullable();
        t.timestamps(false, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('order');
}