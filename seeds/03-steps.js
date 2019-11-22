
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step: 'add flour', recipes_id: '1'},
        {step: 'add water', recipes_id: '1'},
        {step: 'add butter', recipes_id: '1'}
      ]);
    });
};
