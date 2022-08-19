import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', function (t) {
        t.increments('id').primary();
        t.string('username', 50);
        t.string('document', 11);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

