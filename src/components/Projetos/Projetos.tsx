import { Flex, Heading, useColorMode, Divider, Box } from "@chakra-ui/react";
import { IProjeto } from "../../Interfaces";
import dataProjetos from './projetos.json'
import ProjetoCard from "./ProjetoCard";

function Projetos() {
    const { colorMode } = useColorMode();
    const projetos: Array<IProjeto> = [...dataProjetos];

    return (
        <Flex
            as='section'
            textAlign='center'
            p='2rem'
            direction='column'
            bg={colorMode === 'dark' ?
                'linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.8) 62%, rgba(0,0,0,0.64) 100%)'
                :
                'whiteAlpha.50'}
        >
            <Box>
                <Heading paddingBottom='2rem'>Projetos</Heading>
                <Divider />
            </Box>
            {projetos?.map(projeto => {
                return (
                    <ProjetoCard
                        key={projeto.id}
                        {...projeto}
                    />
                )
            })}
        </Flex>
    )
}

export default Projetos;