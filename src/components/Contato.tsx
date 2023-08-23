import { Flex, Heading, Link } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/icons'
import { EmailBWIcon, GitHubIcon, LinkedinIcon, WhatsAppIcon } from '../Icons/Icons'
function Contato() {
    return (
        <Flex
            w='100%'
            minH={['calc(100vh - 66px)', 'calc(100vh - 66px)', 'calc(100vh - 77px)', 'calc(100vh - 77px)']}
            p='0 1.5rem'
            gap='2rem'
            align='center'
            justify='center'
        >
            <Heading>Contato</Heading>
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
        </Flex>
    );
}

export default Contato;