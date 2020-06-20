exports.seed = function (knex, Promise) {
  return knex('psychologists')
    .del()
    .then(function () {
      //TODO: add more profiles data
      return knex('psychologists').insert([
        {
          name: "Pedro Birondo",
          cpf: "000.000.000-00",
          email: "pedrobirondo@gmail.com",
          password: "123456",
          phone: '6366666666',
          crp: "12345",
          crp_uf: "TO",
          cep: "777024-123",
          academic_formation: "Bacharel em Psicologia",
          academic_specialization: "Psicologia social",
          institution: "Centro Universitário Luterano de Palmas",
          conclusion_year: 2018,
          address: "Rua dos Alfeneiros, nº 4",
        },
        {
          name: "Maria Aparecida",
          cpf: "111.111.111-111",
          email: "birobirondo@gmail.com",
          password: "147852",
          phone: '6166666666',
          crp: "321654",
          crp_uf: "TO",
          cep: "70790-123",
          academic_formation: "Bacharel em Psicologia",
          academic_specialization: "Psicologia clínica",
          institution: "Universidade de Brasília",
          conclusion_year: 2020,
          address: "SGAN 912, nº 123",
        },
      ]);
    });
};
