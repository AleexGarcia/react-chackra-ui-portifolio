import {
    Grid,
    GridItem,
    Text,
    Button,
    Heading,
    Flex
} from '@chakra-ui/react';

import banner from '../assets/banner.png'

export default function Banner() {
    return (
        <Flex 
            direction='column'
            justifyContent='center'
            minW='100vw' minH='80vh'
            background={`url('${banner}') RGBA(0, 0, 0, 0.92)`}
            backgroundRepeat='no-repeat'
            backgroundSize='30%'
            backgroundPosition='right'
            padding='0 20px'
        >
            <Grid
                templateColumns='repeat(2,auto)'
                templateRows='repeat(3, min-content)'
                rowGap={2}
                p={8}
                minW='min-content'
                maxW='450px'
            >
                <GridItem colStart={1} colSpan={2}>
                    <Heading as='h2' size='2xl' >Alexandre Garcia</Heading>
                </GridItem>
                <GridItem colStart={1} colSpan={2} rowStart={2}>
                    <Text>Desenvolvedor Fullstack</Text>
                </GridItem>
                <GridItem>
                    <Button colorScheme='orange' >Download CV</Button>
                </GridItem>
                <GridItem>
                    <Button variant='outline' >Meu Trabalho</Button>
                </GridItem>
            </Grid>
        </Flex>
    );
}