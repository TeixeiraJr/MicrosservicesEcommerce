import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('delivery_orders', function (t) {
        t.increments('id').primary();
        t.integer('user_id').references('id').inTable('users').notNullable();
        t.integer('product_id').references('id').inTable('products').notNullable();
        t.integer('amount').notNullable();
        t.string('zipcode', 8).notNullable();
        t.string('housenumber');
        t.string('street').notNullable();
        t.string('neighborhood').notNullable();
        t.string('city').notNullable();
        t.string('uf').notNullable();
        t.string('complement');
        t.string('reference_point');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('delivery_orders');
}

