# REST API swapi-serverless

The REST API to the example app is described below.

### Base URL
`https://5gd48bqz2m.execute-api.us-east-1.amazonaws.com/prod`

### Request GET Planet

`GET /planets/{planet_id}`

#### Response
```json
    {
        "nombre": "Alderaan",
        "periodo_rotacion": "24",
        "periodo_orbital": "364",
        "diametro": "12500",
        "clima": "temperate",
        "gravedad": "1 standard",
        "terreno": "grasslands, mountains",
        "superficie_agua": "40",
        "poblacion": "2000000000",
        "residentes": [
            "https://swapi.py4e.com/api/people/5/",
            "https://swapi.py4e.com/api/people/68/",
            "https://swapi.py4e.com/api/people/81/"
        ],
        "pelicular": [
            "https://swapi.py4e.com/api/films/1/",
            "https://swapi.py4e.com/api/films/6/"
        ],
        "fecha_creado": "2014-12-10T11:35:48.479000Z",
        "fecha_editado": "2014-12-20T20:58:18.420000Z",
        "url": "https://swapi.py4e.com/api/planets/2/"
    }
```

### Request GET Person

`GET /people/{person_id}`

#### Response
```json
    {
        "nombre": "Luke Skywalker",
        "altura": "172",
        "peso": "77",
        "color_pelo": "blond",
        "color_piel": "fair",
        "color_ojo": "blue",
        "fecha_nacimiento": "19BBY",
        "genero": "male",
        "planeta_natal": "https://swapi.py4e.com/api/planets/1/",
        "peliculas": [
            "https://swapi.py4e.com/api/films/1/",
            "https://swapi.py4e.com/api/films/2/",
            "https://swapi.py4e.com/api/films/3/",
            "https://swapi.py4e.com/api/films/6/",
            "https://swapi.py4e.com/api/films/7/"
        ],
        "especie": [
            "https://swapi.py4e.com/api/species/1/"
        ],
        "vehiculo": [
            "https://swapi.py4e.com/api/vehicles/14/",
            "https://swapi.py4e.com/api/vehicles/30/"
        ],
        "naves": [
            "https://swapi.py4e.com/api/starships/12/",
            "https://swapi.py4e.com/api/starships/22/"
        ],
        "fecha_creado": "2014-12-09T13:50:51.644000Z",
        "fecha_editado": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.py4e.com/api/people/1/"
    }
```

## Create a new Vehicle

### Request

`POST /vehicle`

#### Input
```json
    {
        "Item": {
            "capacidad_carga": "50000",
            "precio": "150000",
            "tripulacion": "46",
            "ancho": "36.8",
            "fabricante": "Corellia Mining Corporation",
            "max_velocidad": "30",
            "modelo": "Digger Crawler 3",
            "nombre": "Sand Crawler 3",
            "pasajeros": "50",
            "tipo": "wheeled"
        }
    }
```
#### Response
```json
    {
        "capacidad_carga": "50000",
        "precio": "150000",
        "tripulacion": "46",
        "ancho": "36.8",
        "fabricante": "Corellia Mining Corporation",
        "max_velocidad": "30",
        "modelo": "Digger Crawler 3",
        "nombre": "Sand Crawler 3",
        "pasajeros": "50",
        "tipo": "wheeled",
        "vehicle_id": "515240ea-d448-4f9b-bc17-327bf3ab2aac",
        "timestamp": 1622180677,
        "expires": 1629956677
    }
```

### Request GET all Vehicles

`GET /vehicles`

#### Response
```json
    {
        "data": [
            {
                "nombre": "Sand Crawler",
                "capacidad_carga": "50000",
                "ancho": "36.8",
                "expires": 1629955251,
                "timestamp": 1622179251,
                "max_velocidad": "30",
                "tripulacion": "46",
                "tipo": "wheeled",
                "modelo": "Digger Crawler",
                "vehicle_id": "405cc4db-2b61-4095-ba2f-56f98f782025",
                "fabricante": "Corellia Mining Corporation",
                "precio": "150000",
                "pasajeros": "30"
            },
            ...
        ],
        "count": 100000
    }
```