import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import { TravelTypesItems } from './TravelTypesItems'

export function TravelTypes() {
  return (
    <SimpleGrid
      minChildWidth="120px"
      spacing="40px"
      px="1"
      py="1"
      mt="32"
      mx="auto"
      justifyContent="center"
    >
      <TravelTypesItems
        src="./Nightlife.png"
        alt="Icone de uma taça, embaixo está escrito 'vida noturna' "
        text="vida noturna"
      />
      <TravelTypesItems
        src="./Beach.png"
        alt="Icone de uma taça, embaixo está escrito 'vida noturna' "
        text="Praia"
      />
      <TravelTypesItems
        src="./Modern.png"
        alt="Icone de uma taça, embaixo está escrito 'vida noturna' "
        text="Moderno"
      />
      <TravelTypesItems
        src="./Classic.png"
        alt="Icone de uma taça, embaixo está escrito 'vida noturna' "
        text="Clássico"
      />
      <TravelTypesItems
        src="./More.png"
        alt="Icone de uma taça, embaixo está escrito 'vida noturna' "
        text="e mais..."
      />
    </SimpleGrid>
  )
}
