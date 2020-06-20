const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const patients = await connection('patients')
        .select('*');

        return response.json(patients);
    },

    async show(request, response){
        const patient_id = request.headers.authorization;

        const patient = await connection('patients')
        .where('id', patient_id)
        .select('*')
        .first();

        return response.json(patient);
    }
}