import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Hide, Link, Show } from '@chakra-ui/react'

interface props {
    menuStatus: boolean,
    toggleMenu: () => void
}

function Navigation({ menuStatus, toggleMenu }: props) {

    return (
        <>
            {menuStatus &&
                <Hide above='lg'>
                    <Flex
                        flexDirection='column'
                        pos='absolute'
                        top={['52px', '52px', '70px', '70px']}
                        bg='linear-gradient(180deg, rgba(45,55,72,1) 0%, rgba(45,55,72,1) 50%, rgba(26,32,44,1) 100%)'
                        w='100%'
                        right={0}
                        textAlign='end'
                    >
                        <Link onClick={toggleMenu} borderTop='1px' p={'1rem 2rem'} fontWeight={600} textDecoration={'none'} _hover={{ color: 'orange.100' }} href='/#sobre_mim'>Sobre mim</Link>
                        <Link onClick={toggleMenu} borderTop='1px' p={'1rem 2rem'} fontWeight={600} textDecoration={'none'} _hover={{ color: 'orange.100' }} href='#competencias'>Competências</Link>
                        <Link onClick={toggleMenu} borderTop='1px' p={'1rem 2rem'} fontWeight={600} textDecoration={'none'} _hover={{ color: 'orange.100' }} href='#meu_trabalho'>Meu trabalho</Link>
                        <Link onClick={toggleMenu} borderTop='1px' p={'1rem 2rem'} fontWeight={600} textDecoration={'none'} _hover={{ color: 'orange.100' }} href='#contato'>Contato</Link>
                    </Flex>
                </Hide>
            }
            <Show above='lg'>
                <Breadcrumb
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
            </Show>
        </>
    );

}
export default Navigation;