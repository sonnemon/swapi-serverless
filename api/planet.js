const axios = require('axios');

const API_BASE = 'http://swapi.py4e.com/api/planets/';

module.exports.handler = async (event) => {
  const { planetId } = event.pathParameters;
  try {
    const { data } = await axios.get(`${API_BASE}${planetId}`);
    return {
      statusCode: 200,
      body: JSON.stringify({
        nombre: data.name,
        periodo_rotacion: data.rotation_period,
        periodo_orbital: data.orbital_period,
        diametro: data.diameter,
        clima: data.climate,
        gravedad: data.gravity,
        terreno: data.terrain,
        superficie_agua: data.surface_water,
        poblacion: data.population,
        residentes: data.residents,
        pelicular: data.films,
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
