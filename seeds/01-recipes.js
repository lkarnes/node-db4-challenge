
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipes_name: "Chocolate Chip Cookies"},
        {recipes_name: "Banana Bread"},
        {recipes_name: "Pizza"},
        {recipes_name: "Ice Cream"},
        {recipes_name: "PB & J"}
      ]);
    });
};
