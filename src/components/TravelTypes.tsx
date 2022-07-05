import { Grid, GridItem } from '@chakra-ui/react'
import { TravelTypesItems } from './TravelTypesItems'

export function TravelTypes() {
  return (
    <>
      <Grid
        templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        w="100%"
        maxW="1160px"
        mt={['10', '32']}
        mx="auto"
        gap={[1, 5]}
      >
        <GridItem>
          <TravelTypesItems
            src="./Nightlife.png"
            alt="Icone de uma taça, embaixo está escrito 'vida noturna' "
            text="vida noturna"
          />
        </GridItem>
        <GridItem>
          <TravelTypesItems
            src="./Beach.png"
            alt="Icone de uma taça, embaixo está escrito 'vida noturna' "
            text="Praia"
          />
        </GridItem>

        <GridItem>
          <TravelTypesItems
            src="./Modern.png"
            alt="Icone de uma taça, embaixo está escrito 'vida noturna' "
            text="Moderno"
          />
        </GridItem>

        <GridItem>
          <TravelTypesItems
            src="./Classic.png"
            alt="Icone de uma taça, embaixo está escrito 'vida noturna' "
            text="Clássico"
          />
        </GridItem>

        <GridItem colSpan={[2, 2, 2, 1]}>
          <TravelTypesItems
            src="./More.png"
            alt="Icone de uma taça, embaixo está escrito 'vida noturna' "
            text="e mais..."
          />
        </GridItem>
      </Grid>
      {/* <SimpleGrid
        minChildWidth="20px"
        // spacing="40px"
        px="4"
        mt={['8', '9', '32']}
        mx="auto"
        justifyContent="center"
      ></SimpleGrid> */}
    </>
  )
}
