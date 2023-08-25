import { Button, Text, Flex, Grid, GridItem, Heading, Link } from "@chakra-ui/react";

function BannerCard() {
    return (
        <Grid
            templateColumns='repeat(2,auto)'
            templateRows='repeat(3, min-content)'
            rowGap={[4, 4, 4, 8]}
            p='1rem'
            minW='min-content'
            maxW={[320, 350, 400, '50vw']}
        >
            <GridItem colStart={1} colSpan={2}>
                <Heading as='h2' size='lg' >Oi, sou Alexandre Garcia</Heading>
            </GridItem>
            <GridItem colStart={1} colSpan={2} rowStart={2}>
                <Text fontSize='lg' >Construindo Sucesso Digital como <strong>Desenvolvedor Fullstack</strong>. Da elegância do Frontend à robustez do Backend, sou o profissional que dá vida a Websites e Aplicações Web. Minha paixão é criar experiências envolventes e funcionalidades impecáveis, fundamentais para o triunfo de cada projeto. Vamos transformar ideias em realidade juntos!</Text>
            </GridItem>
            <GridItem>
                <Flex gap={'1rem'}>
                    <Button colorScheme='orange'>
                        <Link isExternal href='https://drive.google.com/file/d/1nEeVlci3aBNXhiKgIw61CW9-FO8uL8Ck/view'> Download CV</Link>
                    </Button>
                    <Link textDecoration='none' href='#meu_trabalho'>
                        <Button variant='outline' colorScheme='gray.600'>
                            Meu Trabalho
                        </Button>
                    </Link>
                </Flex>
            </GridItem>
        </Grid>
    )
}

export default BannerCard;