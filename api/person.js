const axios = require('axios');

const API_BASE = 'http://swapi.py4e.com/api/people/';

module.exports.handler = async (event) => {
  const { personId } = event.pathParameters;
  try {
    const { data } = await axios.get(`${API_BASE}${personId}`);
    return {
      statusCode: 200,
      body: JSON.stringify({
        nombre: data.name,
        altura: data.height,
        peso: data.mass,
        color_pelo: data.hair_color,
        color_piel: data.skin_color,
        color_ojo: data.eye_color,
        fecha_nacimiento: data.birth_year,
        genero: data.gender,
        planeta_natal: data.homeworld,
        peliculas: data.films,
        especie: data.species,
        vehiculo: data.vehicles,
        naves: data.starships,
        fecha_creado: data.created,
        fecha_editado: data.edited,
        url: data.url,
      }),
    };
  } catch (error) {
    if (error.response.status == 404) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          error: 'No se encontro el planeta.',
        }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Ocurrio un problema, intentelo mas tarde.',
        }),
      };
    }
  }
};
