import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', function (t) {
        t.increments('id').primary().notNullable();
        t.string('username').notNullable();
        t.string('document', 11).notNullable().unique();
        t.timestamps(false, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

