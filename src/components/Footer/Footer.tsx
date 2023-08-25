import { Box, Divider, Flex, Grid, Heading, Link, Text, useColorMode } from "@chakra-ui/react";
import Contato from "./Contato";

function Footer() {
    const { colorMode } = useColorMode();
    return (
        <Grid
            as={'footer'}
            templateRows='2fr min-content min-content'
            templateColumns='1fr'
            minH='33vh'
            p='2rem'
            gap='1.5rem'
            bg={colorMode === 'dark' ?
                'linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.8) 62%, rgba(0,0,0,0.64) 100%)'
                :
                'whiteAlpha.50'}
        >
            <Flex textAlign={['center','left']} w='100%' justify='space-around' gap='1rem' direction={['column', 'row']}>
                <Flex w={['100%','40%']} maxW='450px' direction='column' gap='1rem'>
                    <Heading size='lg'>ALEXANDRE GARCIA</Heading>
                    <Text>Desenvolvedor Fullstack apaixonado, dedicado e comprometido com aprendizado contínuo e soluções inovadoras.</Text>
                </Flex>
                <Contato  />
            </Flex>
            <Divider />
            <Box textAlign='center'>
                <Text fontSize='sm'>© Copyright 2023. Desenvolvido por <Link>Alexandre Garcia</Link></Text>
            </Box>
        </Grid >
    )
}

export default Footer;