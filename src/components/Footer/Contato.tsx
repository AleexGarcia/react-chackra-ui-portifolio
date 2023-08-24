import { Flex, Heading, Link } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/icons'
import {  DiscordIcon, EmailBWWhiteIcon, GitHubWhiteIcon, LinkedinIcon, WhatsAppWhiteIcon } from '../../Icons/Icons'
function Contato() {
    return (
        <Flex
            p='0 1.5rem'
            gap='.5rem'
            align='center'
            justify='center'
            direction='column'
        >
            <Heading size='lg' marginBottom='.5rem'>Entre em contato</Heading>
            <Flex gap='.5rem' align='center'>
                <Link
                    isExternal href="https://api.whatsapp.com/send?phone=5564981709943&text=Ol%C3%A1!%20tenho%20uma%20proposta%20de%20trabalho%20para%20voc%C3%AA.">
                    <Icon cursor='pointer' boxSize={9} as={WhatsAppWhiteIcon} />
                </Link>
                <Link
                    isExternal
                    href="https://api.whatsapp.com/send?phone=5564981709943&text=Ol%C3%A1!%20tenho%20uma%20proposta%20de%20trabalho%20para%20voc%C3%AA."
                >
                    (64) 98170 - 9943
                </Link>
            </Flex>
            <Flex gap='.5rem' align='center'>
                <Link
                    isExternal
                    href="https://www.linkedin.com/in/aleexgarcia/"
                >
                    <Icon fill='white' cursor='pointer' boxSize={8} as={LinkedinIcon} />
                </Link>
                <Link
                    isExternal
                    href="https://www.linkedin.com/in/aleexgarcia/"
                >
                    https://www.linkedin.com/in/aleexgarcia/
                </Link>
            </Flex>
            <Flex gap='.5rem' align='center'>
                <Link
                    isExternal href="mailto: alexandre_augusto_garcia@hotmail.com">
                    <Icon cursor='pointer' boxSize={9} as={EmailBWWhiteIcon} />
                </Link>
                <Link
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