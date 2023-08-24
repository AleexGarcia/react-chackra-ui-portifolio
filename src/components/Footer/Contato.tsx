import { Flex, Heading, Link, useColorMode } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/icons'
import { EmailBWIcon, EmailBWWhiteIcon, LinkedinIcon, WhatsAppIcon, WhatsAppWhiteIcon } from '../../Icons/Icons'
function Contato() {
    const { colorMode } = useColorMode();

    return (
        <Flex
            id="contato"
            gap='.5rem'
            align='center'
            justify='center'
            direction='column'
            wrap='wrap'
        >
            <Heading size='lg' marginBottom='.5rem'>Entre em contato</Heading>
            <Flex direction={['column','row']} gap='.5rem' align='center' wrap='wrap' >
                <Link
                    textDecoration='none' _hover={{ color: 'orange.200' }}
                    isExternal href="https://api.whatsapp.com/send?phone=5564981709943&text=Ol%C3%A1!%20tenho%20uma%20proposta%20de%20trabalho%20para%20voc%C3%AA.">
                    <Icon cursor='pointer' boxSize={9} as={colorMode === 'dark' ? WhatsAppWhiteIcon : WhatsAppIcon} />
                </Link>
                <Link
                    textDecoration='none' _hover={{ color: 'orange.200' }}
                    isExternal
                    href="https://api.whatsapp.com/send?phone=5564981709943&text=Ol%C3%A1!%20tenho%20uma%20proposta%20de%20trabalho%20para%20voc%C3%AA."
                >
                    (64) 98170 - 9943
                </Link>
            </Flex>
            <Flex direction={['column','row']} gap='.5rem' align='center' wrap='wrap'>
                <Link
                    textDecoration='none' _hover={{ color: 'orange.200' }}
                    isExternal
                    href="https://www.linkedin.com/in/aleexgarcia/"
                >
                    <Icon fill={colorMode === 'dark' ? 'white' : 'black'} cursor='pointer' boxSize={8} as={LinkedinIcon} />
                </Link>
                <Link
                    textDecoration='none' _hover={{ color: 'orange.200' }}
                    isExternal
                    href="https://www.linkedin.com/in/aleexgarcia/"
                >
                    https://www.linkedin.com/in/aleexgarcia/
                </Link>
            </Flex>
            <Flex direction={['column','row']} gap='.5rem' align='center' wrap='wrap'>
                <Link
                    isExternal href="mailto: alexandre_augusto_garcia@hotmail.com">
                    <Icon cursor='pointer' boxSize={9} as={colorMode === 'dark' ? EmailBWWhiteIcon : EmailBWIcon} />
                </Link>
                <Link
                    textDecoration='none' _hover={{ color: 'orange.200' }}
                    isExternal
                    href="mailto: alexandre_augusto_garcia@hotmail.com"
                >
                    alexandre_augusto_garcia@hotmail.com
                </Link>
            </Flex>
        </Flex>
    );
}

export default Contato;