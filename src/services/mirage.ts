import { ActiveModelSerializer, createServer, Factory, Model } from 'miragejs'

type continent = {
  id: string
  name: string
  info: string
}

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    // Tipos de dados que vai ter dentro do mirage
    models: {
      continent: Model.extend<Partial<continent>>({}),
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750
      this.get('/continent', () => {
        return [
          {
            id: 1,
            title: 'AFRICA',
            subtitle:
              'África é o continente localizado ao sul da Europa e sudoeste da Ásia, banhado pelo Oceano Atlântico.',
            image:
              'https://bigseventravel.com/wp-content/uploads/2019/08/Screenshot-2019-08-14-at-09.35.43.png',

            countryEmphasis: [
              {
                id: 1,
                country: 'Egito',
                city: 'Giza',
              },
            ],
            countryLength: 54,
            langueLength: 2092,
            citys: 200,

            info: 'África é um dos seis continentes do mundo, sendo o terceiro maior em extensão territorial. O território estende-se por mais de 30 milhões de km², ocupando, aproximadamente, 20% da área continental da Terra. No continente vive mais de um bilhão de habitantes, fazendo dele o segundo mais populoso entre os demais.',
          },
        ]
      })
      this.get('/continent/:id')
      this.post('/continent')

      this.namespace = ''
      this.passthrough()
    },
  })

  return server
}
