import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('products', function (t) {
        t.increments('id').primary();
        t.string('id_hash').notNullable().unique();
        t.string('name').notNullable();
        t.timestamps(false, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('products');
}

