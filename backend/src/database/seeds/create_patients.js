exports.seed = function (knex, Promise) {
  return knex("patients")
    .del()
    .then(function () {
      //TODO: add more profiles data
      return knex("patients").insert([
        {
          name: "Leomar Camargo",
          cpf: "222.222.222-22",
          email: "leomarcamargodesouza@gmail.com",
          password: "123456",
          phone: "6199988788",
          pre_diagnosis: 1,
        },
        {
          name: "Jucelino Ribeiro",
          cpf: "333.333.333-33",
          email: "jucelino@gmail.com",
          password: "123456",
          phone: "639998585",
          pre_diagnosis: 0,
        },
      ]);
    });
};
