import { Box, Button, Divider, Flex, Grid, GridItem, Heading, Text, useColorMode } from "@chakra-ui/react";

function SobreMim() {
    const { colorMode } = useColorMode();
    const competencias = {
        skills:[
            'JavaScript',
            'TypeScript',
            'React.js',
            'Java',
            'SpringBoot',
            'Git',
            'Express.js',
            'TypeORM'
        ],
        Idiomas: [
            'Inglês',
            'Espanhol'
        ],
        certificacoes: [
            'Formação front-end - Alura',
            'Formação TS - Alura',
            'Formação React c/ TS - Alura',
            'Formação fullstack TS - DIO',
            'Formação Java Developer - DIO'
        ],
        educacao: [
            'Bacharelado em Sistemas de informação - em Andamento',
            'Engenharia Civil - Incompleto'
        ]
    }
    

    return (
        <Grid
            w='100%'
            minH={['calc(100vh - 66px)', 'calc(100vh - 66px)', 'calc(100vh - 77px)', 'calc(100vh - 77px)']}
            id="sobre_mim"
            templateRows={['repeat(3, min-content)', 'repeat(3, min-content)', 'repeat(2, min-content)']}
            templateColumns={['auto', 'auto', 'repeat(2,1fr)']}
            p='0 1.5rem'
            gap='2rem'
        >
            <GridItem
                textAlign='center'
                colSpan={[1, 1, 2, 2]}
            >
                <Heading paddingBottom='1rem' as={'h2'}>Sobre mim</Heading>
                <Divider />
            </GridItem>
            <GridItem >
                <Heading as='h3' fontSize='1.5rem'>
                    Desvendando Alexandre Garcia:<br /> Uma Jornada de Habilidades e Paixões!
                </Heading>
                <Box margin='1.5rem 0' textAlign='justify'>
                    <Text>
                        Olá, sou Alexandre Garcia, oriundo do interior de Goiás. Como <strong>desenvolvedor fullstack</strong>, mergulhei de cabeça no mundo da programação, buscando constantemente aprimorar meus conhecimentos.
                    </Text>
                    <Text margin='1rem 0'>
                        Meu foco tem sido o desenvolvimento de <strong>projetos pessoais</strong> , nos quais aplico minha paixão pelo<strong> front-end e back-end</strong>. Apesar de ainda não ter experiências profissionais formais, cada projeto tem sido uma oportunidade de crescimento e aprendizado.
                    </Text>
                    <Text>
                        Estou animado em compartilhar meu portfólio, que reflete minha jornada e dedicação até aqui. <strong>Estou aberto a novas oportunidades</strong>, pronto para contribuir e continuar evoluindo na área. Seja bem-vindo!
                    </Text>
                </Box>
                <Button size='lg' colorScheme="orange" >Contato</Button>
            </GridItem>
            <GridItem>
                <Box>
                    <Heading as='h3' fontSize='1.5rem'>
                        Skills
                    </Heading>
                    <Flex p={'1.5rem 0'} gap='8px' wrap='wrap'>
                        {competencias.skills.map<JSX.Element>(skill => {
                            return (
                                <Box key={skill} p='.5rem' borderRadius='8px' bgColor={"blackAlpha.300"}>
                                    <Text fontWeight='500' color={colorMode === 'light' ? 'gray.800' : 'inherit'} >{skill}</Text>
                                </Box>
                            )
                        })}
                    </Flex>
                </Box>
                <Box>
                    <Heading as='h3' fontSize='1.5rem'>
                        Idiomas
                    </Heading>
                    <Flex p={'1.5rem 0'} gap='8px' wrap='wrap'>
                        {competencias.Idiomas?.map(idioma => {
                            return (
                                <Box key={idioma} p='.5rem' borderRadius='8px' bgColor={"blackAlpha.300"}>
                                    <Text fontWeight='500' color={colorMode === 'light' ? 'gray.800' : 'inherit'} >{idioma}</Text>
                                </Box>
                            )
                        })}
                    </Flex>
                </Box>
                <Box>
                    <Heading as='h3' fontSize='1.5rem'>
                       Cursos e Certificações
                    </Heading>
                    <Flex p={'1.5rem 0'} gap='8px' wrap='wrap'>
                        {competencias.certificacoes?.map(certificado => {
                            return (
                                <Box key={certificado} p='.5rem' borderRadius='8px' bgColor={"blackAlpha.300"}>
                                    <Text fontWeight='500' color={colorMode === 'light' ? 'gray.800' : 'inherit'} >{certificado}</Text>
                                </Box>
                            )
                        })}
                    </Flex>
                </Box>
                <Box>
                    <Heading as='h3' fontSize='1.5rem'>
                       Educação
                    </Heading>
                    <Flex p={'1.5rem 0'} gap='8px' wrap='wrap'>
                        {competencias.educacao.map(graduacao => {
                            return (
                                <Box key={graduacao} p='.5rem' borderRadius='8px' bgColor={"blackAlpha.300"}>
                                    <Text fontWeight='500' color={colorMode === 'light' ? 'gray.800' : 'inherit'} >{graduacao}</Text>
                                </Box>
                            )
                        })}
                    </Flex>
                </Box>
            </GridItem>
        </Grid>

    );
}

export default SobreMim;