import { Flex, Image, Heading, Text, Button, Grid } from "@chakra-ui/react";

function Projetos() {

    const projetos = [
        {
            name: 'Rest Countries',
            content: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
            imgSrc: 'src/assets/dopefolio.jpeg'
        },
        {
            name: 'Rest Countries',
            content: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
            imgSrc: 'src/assets/dopefolio.jpeg'
        },
        {
            name: 'Rest Countries',
            content: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
            imgSrc: 'src/assets/dopefolio.jpeg'
        },
        {
            name: 'Rest Countries',
            content: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
            imgSrc: 'src/assets/dopefolio.jpeg'
        }
    ]

    return (
        <Flex
            gap='4rem'
            textAlign='center'
            p='2rem'
            direction='column'
            >
            <Heading>Projetos</Heading>
            <Grid
                templateColumns={['auto', 'auto', '1fr 1fr']}
                gap='4rem'
                alignItems='center'
            >
                {projetos.map(projeto => {
                    return (
                        <>
                            <Image src={projeto.imgSrc} />
                            <Flex direction='column' gap='2rem' align='center'>
                                <Heading as='h4'>{projeto.name}</Heading>
                                <Text>{projeto.content}</Text>
                                <Button size='lg' colorScheme="orange">Mais detalhes</Button>
                            </Flex>
                        </>
                    )
                })}


            </Grid>
        </Flex>
    )
}

export default Projetos;