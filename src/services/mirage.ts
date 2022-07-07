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
            title: 'América do Sul',
            subtitle:
              'A América do Sul apresenta paisagens naturais muito diversas e uma enorme biodiversidade, abrigando a maior floresta tropical do mundo.',
            image:
              'https://bigseventravel.com/wp-content/uploads/2019/08/Screenshot-2019-08-12-at-14.31.46.png',

            countryEmphasis: [
              {
                id: 1,
                country: 'Brasil',
                city: 'Rio Janeiro',
              },
            ],
            countryLength: 12,
            langueLength: 456,
            citys: 200,

            info: 'A América do Sul é um subcontinente que faz parte do continente americano. Apresenta área de 17 milhões de km², com a maior extensão situada no hemisfério sul do planeta Terra. A população sul-americana é de mais de 434 milhões de habitantes, a qual é distribuída por 12 países e um departamento ultramarino francês. Trata-se de uma região com aspectos climáticos e geomorfológicos bastante diversos e únicos, que abriga feições como a Cordilheira dos Andes e a Planície Amazônica, além de uma enorme biodiversidade',
          },
          {
            id: 2,
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
          {
            id: 3,
            title: 'Ásia',
            subtitle:
              'A Ásia é um dos continentes do mundo, considerado o mais extenso territorialmente e o mais populoso também.',
            image:
              'https://bigseventravel.com/wp-content/uploads/2019/08/Screenshot-2019-08-14-at-12.45.18.png',

            countryEmphasis: [
              {
                id: 1,
                country: 'Japão',
                city: 'Tokyo',
              },
            ],
            countryLength: 50,
            langueLength: 2300,
            citys: 200,

            info: 'Geograficamente, o continente asiático é também muito diverso. No continente, localiza-se algumas montanhas que estão entre as mais altas do mundo, grandes desertos e extensos rios. O povo asiático corresponde a uma das civilizações mais antigas do mundo, iniciada há cerca de 4000 anos. A economia e governos são também variados, visto que o continente é composto por um grande número de países, cada qual com as suas particularidades.',
          },
          {
            id: 4,
            title: 'Europa',
            subtitle:
              'A Ásia é um dos continentes do mundo, considerado o mais extenso territorialmente e o mais populoso também.',
            image:
              'https://bigseventravel.com/wp-content/uploads/2019/08/Screenshot-2019-08-13-at-16.38.03.png',

            countryEmphasis: [
              {
                id: 1,
                country: 'Reino Unido',
                city: 'Londres',
              },
            ],
            countryLength: 50,
            langueLength: 24,
            citys: 200,

            info: 'A importância do continente europeu reside no fato de este ter sido o palco das maiores transformações da história da humanidade e de algumas de suas mentes mais brilhantes, como a Segunda Guerra, a Revolução Industrial na segunda metade do século XVIII e as teorias de Copérnico e Einstein, europeus que mudaram a história da ciência.',
          },
          {
            id: 5,
            title: 'Europa',
            subtitle:
              'A América do Norte está localizada no extremo norte das Américas e é composta por apenas três países: Estados Unidos, Canadá e México',

            image:
              'https://bigseventravel.com/wp-content/uploads/2019/08/Screenshot-2019-08-12-at-17.38.11.png',

            countryEmphasis: [
              {
                id: 1,
                country: 'EUA',
                city: 'Florida',
              },
            ],
            countryLength: 3,
            langueLength: 256,
            citys: 200,

            info: 'A princípio a população da América do Norte era formada por índios que habitavam principalmente o território do oeste dos EUA, esquimós, nas áreas mais frias do Canadá e Alaska (EUA) e os astecas no México.',
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
