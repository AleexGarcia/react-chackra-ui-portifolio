import { Box, Button, Divider, Flex, Grid, Heading, Image, Link, Text, useColorMode } from "@chakra-ui/react";
import { IProjeto } from "../../Interfaces";
function ProjetoCard( {content,deploy,imgSrc,name,repository,skills}: IProjeto) {

    const { colorMode } = useColorMode();

    return (
        <>
            <Grid
                templateColumns={['auto', 'auto', '1fr 1fr']}
                alignItems='center'
                minH='75vh'
                columnGap='2rem'
            >
                <Image src={imgSrc} />
                <Flex direction='column' gap='2rem' align='center'>
                    <Heading as='h4'>{name}</Heading>
                    <Text>{content}</Text>
                    <Flex wrap='wrap' gap='.5rem'>
                        {skills.map(skill => {
                            return (
                                <Box key={skill} p='.5rem' borderRadius='8px' bgColor={colorMode === 'dark' ? 'gray.800' : 'gray.200'}>
                                    <Text fontWeight='500' color={colorMode === 'light' ? 'gray.800' : 'inherit'}>{skill}</Text>
                                </Box>
                            );
                        })}
                    </Flex>
                    <Flex gap='1rem'>
                        <Link isExternal href={deploy} textDecoration='none'>
                            <Button variant="outline" size='lg' >
                                Deploy
                            </Button>
                        </Link>
                        <Link isExternal href={repository} textDecoration='none'>
                            <Button size='lg' colorScheme="orange">Repository</Button>
                        </Link>
                    </Flex>
                </Flex>
            </Grid >
            <Divider />

        </>
    )
}

export default ProjetoCard;