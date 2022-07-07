import { Flex, IconButton, Image } from '@chakra-ui/react'
import Link from 'next/link'

interface HeaderProps {
  buttonBackHome?: boolean
}

export function Header({ buttonBackHome = false }: HeaderProps) {
  return (
    <Flex
      py={['4', '4', '6']}
      justifyContent="center"
      align="center"
      as="header"
      w="100%"
      maxW={1430}
      mx="auto"
    >
      {buttonBackHome && (
        <Link href="/">
          <IconButton
            marginRight="auto"
            variant="unstyled"
            aria-label="Cidades +100"
            display="flex"
            alignItems="center"
            justifyContent="center"
            icon={
              <Image
                src="./../botao_voltar.png"
                alt="Boão de voltar"
                justifySelf="start"
              />
            }
          />
        </Link>
      )}

      <Image
        src="./../Logo.png"
        alt="Logo da empresa worldTrip"
        marginRight="auto"
        marginLeft={buttonBackHome ? '' : 'auto'}
      />
    </Flex>
  )
}
