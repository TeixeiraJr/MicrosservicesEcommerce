import { Knex } from "knex";


export async function up(knex: Knex): Promise<string> {
    return knex("products").insert([
        {id: "A624659A-009C-4A18-92BD-2EF1FEC06802", name: "Produto AAA"},
        {id: "63BDA413-3693-434F-AFC9-8DD13B2B6107", name: "Produto BBB"},
        {id: "73BDA413-3693-434F-AFC9-8DD13B2B6107", name: "Produto CCC"},
    ])
}


export async function down(knex: Knex): Promise<void> {
}

