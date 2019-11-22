
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'flour', amount: '2 cups'},
        {ingredient: 'water', amount: '1 cups'},
        {ingredient: 'butter', amount: '1/2 cups'}
      ]);
    });
};
