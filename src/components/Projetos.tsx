import { Flex, Image, Heading, Text, Button, Grid, useColorMode, Divider, Box } from "@chakra-ui/react";

function Projetos() {
    const { colorMode } = useColorMode();
    const projetos = [
        {
            id: 1,
            name: 'Rest Countries',
            content: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
            imgSrc: 'src/assets/dopefolio.jpeg',
            skills: [
                'TypeScript',
                'Express.js',
                'Sqlite',
                'TypeORM',
                'React.js'
            ]
        },
        {
            id: 2,
            name: 'Rest Countries',
            content: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
            imgSrc: 'src/assets/dopefolio.jpeg',
            skills: [
                'TypeScript',
                'Express.js',
                'Sqlite',
                'TypeORM',
                'React.js'
            ]
        },
        {
            id: 3,
            name: 'Rest Countries',
            content: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
            imgSrc: 'src/assets/dopefolio.jpeg',
            skills: [
                'TypeScript',
                'Express.js',
                'Sqlite',
                'TypeORM',
                'React.js'
            ]
        },
        {
            id: 4,
            name: 'Rest Countries',
            content: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
            imgSrc: 'src/assets/dopefolio.jpeg',
            skills: [
                'TypeScript',
                'Express.js',
                'Sqlite',
                'TypeORM',
                'React.js'
            ]
        }
    ]

    return (
        <Flex
            textAlign='center'
            p='2rem'
            direction='column'
            bg={colorMode === 'dark' ?
                'linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.8) 62%, rgba(0,0,0,0.64) 100%)'
                :
                'whiteAlpha.50'}
        >
            <Box>
                <Heading p='2rem'>Projetos</Heading>
                <Divider />
            </Box>
            {projetos.map(projeto => {
                return (
                    <Grid
                        key={projeto.id}
                        templateColumns={['auto', 'auto', '1fr 1fr']}
                        alignItems='center'
                        minH='100vh'
                        columnGap='2rem'
                    >
                        <Image src={projeto.imgSrc} />
                        <Flex direction='column' gap='2rem' align='center'>
                            <Heading as='h4'>{projeto.name}</Heading>
                            <Text>{projeto.content}</Text>
                            <Flex gap='.5rem'>
                                {projeto.skills.map(skill => {
                                    return (
                                        <Box key={skill} p='.5rem' borderRadius='8px' bgColor={colorMode === 'dark' ? 'gray.800' : 'gray.200'}>
                                            <Text fontWeight='500' color={colorMode === 'light' ? 'gray.800' : 'inherit'} >{skill}</Text>
                                        </Box>
                                    )
                                })}
                            </Flex>
                            <Button size='lg' colorScheme="orange">Mais detalhes</Button>
                        </Flex>
                    </Grid>
                )
            })}


        </Flex>
    )
}

export default Projetos;