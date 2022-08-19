import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('products', function (t) {
        t.increments('id').primary();
        t.string('name', 50);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('products');
}

