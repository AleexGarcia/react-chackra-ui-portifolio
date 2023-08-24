import { Flex, Icon, Link } from "@chakra-ui/react";
import { EmailBWIcon, GitHubIcon, LinkedinIcon, WhatsAppIcon } from "../../Icons/Icons";

function BarraDeContatos() {
    const icons = [
        {
            link: 'https://www.linkedin.com/in/aleexgarcia/',
            icon: LinkedinIcon
        },
        {
            link: 'https://github.com/AleexGarcia',
            icon: GitHubIcon
        },
        {
            link: 'https://api.whatsapp.com/send?phone=5564981709943&text=Ol%C3%A1!%20tenho%20uma%20proposta%20de%20trabalho%20para%20voc%C3%AA.',
            icon: WhatsAppIcon
        },
        {
            link: 'mailto: alexandre_augusto_garcia@hotmail.com',
            icon: EmailBWIcon
        }
    ]
    return (
        <Flex
            display={['none', 'none', 'flex', 'flex']}
            direction='column'
            p='.25rem'
            align='center'
            gap='.5rem'
            bg='white'
            >
            {icons.map(icon => {
                return (
                    <Link key={`${icon.link}`} isExternal href={icon.link}>
                        <Icon cursor='pointer' boxSize={10} as={icon.icon} />
                    </Link>
                )
            })}
        </Flex>
    );
}

export default BarraDeContatos;