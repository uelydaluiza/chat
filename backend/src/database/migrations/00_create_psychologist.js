exports.up = function (knex) {
    return knex.schema.createTable('psychologists', function (table) {
        //TODO: check if that is correct  according to the class diagram
        table.increments()
        table.string('name').notNullable();
        table.string('cpf').notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.string('password').notNullable();
        table.string('crp').notNullable();
        table.string('crp_uf', 2).notNullable();
        table.string('cep', 10).notNullable();
        table.string('academic_formation').notNullable();
        table.string('academic_specialization').notNullable();
        table.string('institution').notNullable();
        table.integer('conclusion_year').notNullable();
        table.string('address').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('psychologists');
};