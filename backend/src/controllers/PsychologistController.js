const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        //TODO: implement filters, for this see the comments at app.js file 
        const patients = await connection('psychologists')
        .select('*');

        return response.json(patients);
    }
}