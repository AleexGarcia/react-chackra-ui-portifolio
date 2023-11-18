import { Flex, Heading, useColorMode, Divider, Box } from "@chakra-ui/react";
import { IProjeto } from "../../Interfaces";
import dataProjetos from './projetos.json'
import ProjetoCard from "./ProjetoCard";

function Projetos() {
    const { colorMode } = useColorMode();
    const projetos: Array<IProjeto> = [...dataProjetos];

    return (
        <Flex
            id="meu_trabalho"
            as='section'
            textAlign='center'
            p='2rem'
            direction='column'
            gap={{base:'2rem', md:'4rem', lg:'0'}}
            bg={colorMode === 'dark' ?
                'linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.8) 62%, rgba(0,0,0,0.64) 100%)'
                :
                'gray.200'}
        >
            <Box>
                <Heading paddingBottom='2rem'>Projetos</Heading>
                <Divider borderColor='gray.400' />
            </Box>
            {projetos?.map((projeto: IProjeto, index) => {
                return (
                    <ProjetoCard
                        key={projeto.id} 
                        projeto={projeto}
                        index={index}                                             
                   
                    />
                )
            })}
        </Flex>
    )
}

export default Projetos;