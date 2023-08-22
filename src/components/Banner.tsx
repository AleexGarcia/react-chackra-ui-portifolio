import {
    Grid,
    GridItem,
    Text,
    Button,
    Heading,
    Flex,
    Image,
    Link,
    useColorMode,
} from '@chakra-ui/react';

import banner from '../assets/banner.png'

export default function Banner() {

    const { colorMode } = useColorMode();

    return (
        <Flex
            direction={['column', 'column', 'row', 'row']}
            justifyContent='space-around'
            align='center'
            minW='100vw' minH={'100vh'}
            bg={colorMode === 'dark' ?
                'linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.8) 62%, rgba(0,0,0,0.64) 100%)'
                :
                'whiteAlpha.50'}
            paddingTop={['52px', '52px', '70px', '70px']}
        >
            <Grid
                templateColumns='repeat(2,auto)'
                templateRows='repeat(3, min-content)'
                rowGap={[4, 4, 4, 8]}
                p={8}
                minW='min-content'
                maxW={[320, 350, 400, 650]}
            >
                <GridItem colStart={1} colSpan={2}>
                    <Heading as='h2' size='2xl' >Oi, sou Alexandre Garcia</Heading>
                </GridItem>
                <GridItem colStart={1} colSpan={2} rowStart={2}>
                    <Text align='justify' >Desenvolvedor Fullstack apaixonado, dedicado e comprometido com aprendizado contínuo e soluções inovadoras. </Text>
                </GridItem>
                <GridItem>
                    <Flex gap={'1rem'}>
                        <Button colorScheme='orange' >
                            <Link href='#meuTrabalho'  > Download CV</Link>
                        </Button>
                        <Button variant='outline'>
                            <Link href='#meuTrabalho'  >Meu Trabalho</Link>
                        </Button>
                    </Flex>
                </GridItem>
            </Grid>
            <Image alignSelf={['center', 'center', 'center', 'flex-end']} maxH={['40vh', '50vh', '50vh', '75vh']} src={banner} />
        </Flex>
    );
}