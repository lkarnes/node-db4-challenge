
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.text('recipes_name', 128)
      .notNullable();
  })
  .createTable('ingredients', tbl => {
      tbl.increments('id');
      tbl.text('ingredient',  128)
      .notNullable();
      tbl.text('amount', 128)
      .notNullable();
  })

  .createTable('steps', tbl=> {
      tbl.increments('id');

      tbl.text('step',266)
      .notNullable();

      tbl.integer('recipes_id')
      .unsigned()
      .references('recipes.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })

  .createTable('recipes_ingredients', tbl => {
      tbl.integer('recipes_id')
      .unsigned()
      .notNullable()
      .references('recipes.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

      tbl.integer('ingredients_id')
      .unsigned()
      .notNullable()
      .references('ingredients.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

      tbl.primary(['recipes_id', 'ingredients_id'])
  })
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists('recipes_ingredients') 
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
  )
};
