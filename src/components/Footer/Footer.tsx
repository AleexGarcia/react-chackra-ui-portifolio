import { Box, Divider, Flex, Grid, GridItem, Heading, Link, Text, useColorMode } from "@chakra-ui/react";
import Contato from "./Contato";

function Footer() {
    const { colorMode } = useColorMode();
    return (
        <Grid
            templateRows='2fr min-content min-content'
            minH='33vh'
            p='2rem'
            gap='1.5rem'
            bg={colorMode === 'dark' ?
                'linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.8) 62%, rgba(0,0,0,0.64) 100%)'
                :
                'whiteAlpha.50'}
        >
            <Flex justify='space-around'>
                <Flex maxW='450px' direction='column' gap='1rem'>
                    <Heading size='lg'>ALEXANDRE GARCIA</Heading>
                    <Text>Desenvolvedor Fullstack apaixonado, dedicado e comprometido com aprendizado contínuo e soluções inovadoras.</Text>
                </Flex>
                <Contato />
            </Flex>
            <Divider />
            <Box textAlign='center'>
                <Text fontSize='sm'>© Copyright 2023. Desenvolvido por <Link>Alexandre Garcia</Link></Text>
            </Box>
        </Grid >
    )
}

export default Footer;