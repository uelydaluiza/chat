exports.up = function (knex) {
    return knex.schema.createTable('patients', function (table) {
        //TODO: check if that is correct  according to the class diagram
        table.increments()
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('cpf').notNullable();
        table.string('phone').notNullable();
        table.string('password').notNullable();
        table.integer('pre_diagnosis').notNullable(); //0 - yes, 1 - no
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('patients');
};