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
    Icon,
} from '@chakra-ui/react';

import banner from '../assets/banner.png'
import { EmailBWIcon, GitHubIcon, LinkedinIcon, WhatsAppIcon } from '../Icons/Icons';

export default function Banner() {

    const { colorMode } = useColorMode();

    return (

        <Flex
            direction={['column', 'column', 'row', 'row']}
            justifyContent={['space-between', 'space-between', 'space-around', 'space-around']}
            align='center'
            bg={colorMode === 'dark' ?
                'linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.8) 62%, rgba(0,0,0,0.64) 100%)'
                :
                'whiteAlpha.50'}
            minH={['calc(100vh - 66px)', 'calc(100vh - 66px)', 'calc(100vh - 77px)', 'calc(100vh - 77px)']}
            w='100%'

        >
            <Flex direction='column' p='.25rem' borderRadius='8px' align='center' gap='.5rem' bg='white'>
                <Link
                    isExternal
                    href="https://www.linkedin.com/in/aleexgarcia/"
                >
                    <Icon cursor='pointer' boxSize={8} as={LinkedinIcon} />
                </Link>
                <Link
                    isExternal
                    href="https://github.com/AleexGarcia">
                    <Icon cursor='pointer' boxSize={8} as={GitHubIcon} />
                </Link>
                <Link
                    isExternal href="https://api.whatsapp.com/send?phone=5564981709943&text=Ol%C3%A1!%20tenho%20uma%20proposta%20de%20trabalho%20para%20voc%C3%AA.">
                    <Icon cursor='pointer' boxSize={9} as={WhatsAppIcon} />
                </Link>
                <Link
                    isExternal href="mailto: alexandre_augusto_garcia@hotmail.com">
                    <Icon cursor='pointer' boxSize={9} as={EmailBWIcon} />
                </Link>
            </Flex>
            <Grid
                templateColumns='repeat(2,auto)'
                templateRows='repeat(3, min-content)'
                rowGap={[4, 4, 4, 8]}
                p={8}
                minW='min-content'
                maxW={[320, 350, 400, '50vw']}
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