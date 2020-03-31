//O que eu quero que a migração faça
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();         
    table.string('uf').notNullable();
  });
};

//O que a migração deve fazer caso alguma coisa dê errado
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
