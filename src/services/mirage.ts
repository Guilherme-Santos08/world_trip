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

            countryCitys: [
              {
                id: 1,
                country: 'Brasil',
                city: 'Rio Janeiro',
                flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
                image:
                  'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSvFzaAumI-1_ww5mNE2n6sBJJc11rUklqknnbi0VodEOmxFIOKFWhkoA0zm2gQTdWk',
              },
              {
                id: 2,
                country: 'Argentina',
                city: 'Ushuaia',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/2560px-Flag_of_Argentina.svg.png',
                image:
                  'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTG94QeEWyUcKhzJBbpaOWRgZtmDC0JJo6_dSDMwOJTsgar9f_1631hqS9GJXpo9OUv',
              },
              {
                id: 3,
                country: 'Peru',
                city: 'Lima',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/2560px-Flag_of_Peru_%28state%29.svg.png',
                image:
                  'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQeJsNBOoeYBM3hgmRLI9bm3Gs0xHZAJ49uqL_naEsIgBRBdIiwm6chiUzAajR-8jtM',
              },
              {
                id: 4,
                country: 'Chile',
                city: 'Santiago',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/2560px-Flag_of_Chile.svg.png',
                image:
                  'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTZdUBvPVaKGS4mB3Ttc9325I0BI2BGUV_JJinTZaMQL-HA7jvkIsoJ9kXJ93pdm6Yf',
              },
              {
                id: 5,
                country: 'Paraguay',
                city: 'Asunción',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Paraguay_%283-2%29.svg',
                image:
                  'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTFYSjmHZCbGz6Tg-qcjrAE-Q14a5OwzRU2FqHo-fblgZ7mG48JnjHxlfBoI4TwN85O',
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

            countryCitys: [
              {
                id: 1,
                country: 'Africa do Sul',
                city: 'Cape Town',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1024px-Flag_of_South_Africa.svg.png',
                image:
                  'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTfd_vOa29DU0mLgNi64CfwgCYXvkGJ_xaSk4rp9TJ6dewMYVoYyQOs7rY-b5d9Qlry',
              },
              {
                id: 2,
                country: 'Kenya',
                city: 'Nairobi',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/2560px-Flag_of_Kenya.svg.png',
                image:
                  'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTS3ISeZlZhqfw9wLHe9gqUCDUmmrrrTj0AX10Hn3iMThWUvcp8yE3BoEXu8tzrlMah',
              },
              {
                id: 3,
                country: 'Ghana',
                city: 'Accra',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/640px-Flag_of_Ghana.svg.png',
                image:
                  'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQv0qDmUwDwKUadqHE43AzZc2t-Mcg849-mlcBdOVbjf7UjDGNPEPd0egT6oh8eHLti',
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

            countryCitys: [
              {
                id: 1,
                country: 'Japão',
                city: 'Tokyo',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png',
                image:
                  'https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg',
              },
              {
                id: 2,
                country: 'China',
                city: 'Shanghai',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png',
                image:
                  'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQ-Kr35ZnOY1h-xaHeCziDK3-8HuXgIIsB-buK0-BWJx_ci8VzEZY-Ni-rdPtNmtjFO',
              },
              {
                id: 3,
                country: 'Indonesia',
                city: 'Jakarta',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1280px-Flag_of_Indonesia.svg.png',
                image:
                  'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRWA2_a4L_zJiu6eiu-jXp-Bb5IS1XZZw5-F9HeeVnkXkNgpKg4WCuSPYS7GT7o3RrF',
              },
              {
                id: 4,
                country: 'Qatar',
                city: 'Doha',
                flag: 'https://media.istockphoto.com/vectors/flag-of-qatar-vector-id1063898358?k=20&m=1063898358&s=612x612&w=0&h=4zBQBDyV-j07zZ5ktk6e_Buug-IczKBFXWOxbANFTQ4=',
                image:
                  'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRr6JrYYQRU_C1iY8V_kuLTaT7AGb_-qKJ-PPRbR_qojsysf-qIKxID69UnTc51-ncS',
              },
              {
                id: 5,
                country: 'Israel',
                city: 'Jerusalem',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/640px-Flag_of_Israel.svg.png',
                image:
                  'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQZy5v-oIWpGsEuVQZoImsPOXHXAMJDEyyatYuhceHUdXaDPoidS9XTfcKV2FuILEUU',
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
              'Europa é um dos seis continentes do mundo, localizado a oeste da Ásia e ao norte da África.',
            image:
              'https://destinocompartilhado.com/wp-content/uploads/2017/12/Noite-em-Londres.jpg',

            countryCitys: [
              {
                id: 1,
                country: 'Reino Unido',
                city: 'Londres',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png',
                image:
                  'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRUX4B6Pq3fbfveipFaUMGHBPNe1_NCC2e7QHHZRSVaobfggrIrSIFe75_8l78k08Uj',
              },
              {
                id: 2,
                country: 'Italia',
                city: 'Roma',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1500px-Flag_of_Italy.svg.png',
                image:
                  'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQzUCow983AVBVT9H062wMUEiXfJVZNrcOYKsm8aMJoGu3u4BBfio70QdznkTrwrV33',
              },
              {
                id: 3,
                country: 'França',
                city: 'Paris',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png',
                image:
                  'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ1oS-DeKDIgvicoSyoD8KKoIAinTTDeC6VO7erBHEsAggFjaZYZ6YP1HkFahtlKTb_',
              },
              {
                id: 4,
                country: 'Belgica',
                city: 'Bruges',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/2363px-Flag_of_Belgium.svg.png',
                image:
                  'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSyWH1W5NqVmA1lWruJi5ahirZrRQue4sLUkerJesKo-IZslTBbWaMKKujyZoGnhgVt',
              },
              {
                id: 5,
                country: 'Grecia',
                city: 'Athens',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/2560px-Flag_of_Greece.svg.png',
                image:
                  'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTKns1F4QGVMD49rIpI8-rSopjwTWg5p58UO9lFIdBAYwEJHhTW4jzKJp_zhyqFd602',
              },
            ],
            countryLength: 50,
            langueLength: 24,
            citys: 200,

            info: 'A importância do continente europeu reside no fato de este ter sido o palco das maiores transformações da história da humanidade e de algumas de suas mentes mais brilhantes, como a Segunda Guerra, a Revolução Industrial na segunda metade do século XVIII e as teorias de Copérnico e Einstein, europeus que mudaram a história da ciência.',
          },
          {
            id: 5,
            title: 'America do Norte',
            subtitle:
              'A América do Norte está localizada no extremo norte das Américas e é composta por apenas três países: Estados Unidos, Canadá e México',

            image:
              'https://bigseventravel.com/wp-content/uploads/2019/08/Screenshot-2019-08-12-at-17.38.11.png',

            countryCitys: [
              {
                id: 1,
                country: 'EUA',
                city: 'Nova Iorque',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png',
                image:
                  'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT2flpNZx086BC6BmM-NlHkukeLeHgtDwKFU-4RX0NNegXJIKV8EGvm7Rlt3sgSlckT',
              },
              {
                id: 2,
                country: 'Canada',
                city: 'Toronto',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/2560px-Flag_of_Canada.svg.png',
                image:
                  'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTYTf1qu1jZ6u0JMJbtMcti95j5q1yM9BTriaUfiYZvczi1mch1DGnhP2lWGgU8dYGO',
              },
              {
                id: 3,
                country: 'Mexico',
                city: 'Cancún',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2560px-Flag_of_Mexico.svg.png',
                image:
                  'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTSRULEqe0xsIsqg3QiyX_2gwNtQFOj_jJQzyKufS86ICZxs-7aCw6Ruj0a_2dK_4DM',
              },
            ],
            countryLength: 4,
            langueLength: 4,
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
