import { Avatar, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Switch, useColorMode, Text } from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useState } from "react";
import avatar from '../assets/avatar.png'
function Header() {

    const { colorMode, toggleColorMode } = useColorMode();
    const [menuStatus, setMenuStatus] = useState<boolean>(false);
    function toggleMenu(): void {
        menuStatus ? setMenuStatus(false) : setMenuStatus(true);
    }
    return (
        <Flex
            
            as='header'
            pos='fixed'
            minW='100vw'
            maxW='100vw'
            justify='space-between'
            height={['52px', '52px', '70px', '70px']}
            align='center'
            p='0 2rem'
            zIndex='100'
            bg={'linear-gradient(180deg, rgba(45,55,72,1) 0%, rgba(45,55,72,1) 50%, rgba(26,32,44,1) 100%)'}
            color='white'
        >
            <Flex align='center' gap='1rem'>
                <Avatar name="Alexandre Garcia" src={avatar} />
                <Text>Alexandre Garcia</Text>
            </Flex>

            <HamburgerIcon
                display={['flex', 'flex', 'flex', 'none']}
                onClick={toggleMenu}
            />
            {menuStatus
                &&
                <Flex display={['flex', 'flex', 'flex', 'none']}>
                    Oi
                </Flex>
            }
            <Breadcrumb
                display={['none', 'none', 'none', 'flex']}
                spacing='8px'
                separator={''}
            >
                <BreadcrumbItem>
                    <BreadcrumbLink fontWeight={600} textDecoration={'none'} _hover={{ color: 'orange.100' }} href='/#sobre_mim'>Sobre mim</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink fontWeight={600} textDecoration={'none'} _hover={{ color: 'orange.100' }} href='#competencias'>Competências</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink fontWeight={600} textDecoration={'none'} _hover={{ color: 'orange.100' }} href='#meu_trabalho'>Meu trabalho</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink fontWeight={600} textDecoration={'none'} _hover={{ color: 'orange.100' }} href='#contato'>Contato</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Flex align='center' columnGap='1rem'>
                <Switch onChange={toggleColorMode} />
                {colorMode === 'dark' ?
                    <MoonIcon />
                    :
                    <SunIcon />
                }
            </Flex>
        </Flex>
    );
}

export default Header;