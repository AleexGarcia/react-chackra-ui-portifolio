import { Avatar, Flex, Switch, useColorMode, Text } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, Icon } from '@chakra-ui/icons'
import { useState } from "react";
import avatar from '../../assets/avatar.png'
import Navigation from "./Navigation";
function Header() {

    const { toggleColorMode } = useColorMode();
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
            height={['66px', '66px', '77px', '77px']}
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
            <Navigation
                toggleMenu={toggleMenu}
                menuStatus={menuStatus}
            />
            <Flex align='center' columnGap='1rem'>
                <Switch onChange={toggleColorMode} />
                <Icon
                    cursor='pointer'
                    boxSize={6}
                    display={['flex', 'flex', 'flex', 'none']}
                    onClick={toggleMenu}
                    as={!menuStatus ? HamburgerIcon : CloseIcon}
                />
            </Flex>
        </Flex>
    );
}

export default Header;