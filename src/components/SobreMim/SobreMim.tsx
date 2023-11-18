import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  ScaleFade,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import dataComp from "./competencias.json";
import { ICompetencias } from "../../Interfaces";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";


function SobreMim() {
  const { colorMode } = useColorMode();
  const competencias: ICompetencias = { ...dataComp };
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-100px" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <Grid
      ref={ref}
      w="100%"
      minH={[
        "calc(100vh - 66px)",
        "calc(100vh - 66px)",
        "calc(100vh - 77px)",
        "calc(100vh - 77px)",
      ]}
      id="sobre_mim"
      templateRows={[
        "repeat(3, min-content)",
        "repeat(3, min-content)",
        "repeat(2, min-content)",
      ]}
      templateColumns={["auto", "auto", "4fr 6fr"]}
      p="2rem"
      gap="2rem"
    >
      <GridItem textAlign="center" colSpan={[1, 1, 2, 2]}>
        <Heading paddingBottom="2rem" as={"h2"}>
          Sobre mim
        </Heading>
        <Divider />
      </GridItem>
      <ScaleFade initialScale={0.5} in={inViewport}>
        <GridItem>
          <Heading as="h3" fontSize="1.5rem">
            Desvendando Alexandre Garcia:
            <br /> Uma Jornada de Habilidades e Paixões!
          </Heading>
          <Box margin="1.5rem 0" textAlign="justify">
            <Text>
              Olá, sou Alexandre Garcia, oriundo do interior de Goiás. Como{" "}
              <strong>desenvolvedor fullstack</strong>, mergulhei de cabeça no
              mundo da programação, buscando constantemente aprimorar meus
              conhecimentos.
            </Text>
            <Text margin="1rem 0">
              Meu foco tem sido o desenvolvimento de{" "}
              <strong>projetos pessoais</strong> , nos quais aplico minha paixão
              pelo<strong> front-end e back-end</strong>. Apesar de ainda não
              ter experiências profissionais formais, cada projeto tem sido uma
              oportunidade de crescimento e aprendizado.
            </Text>
            <Text>
              Estou animado em compartilhar meu portfólio, que reflete minha
              jornada e dedicação até aqui.{" "}
              <strong>Estou aberto a novas oportunidades</strong>, pronto para
              contribuir e continuar evoluindo na área. Seja bem-vindo!
            </Text>
          </Box>
          <Button size="lg" colorScheme="orange">
            <Link href='#contato'>Contato</Link>
          </Button>
        </GridItem>
      </ScaleFade>
      <GridItem>
        {Object.keys(competencias).map((key) => {
          return (
            <Box key={key}>
              <ScaleFade initialScale={0.5} in={inViewport}>
                <Heading as="h3" fontSize="1.5rem">
                  {competencias[key]?.title}
                </Heading>
                <Flex p={"1.5rem 0"} gap="8px" wrap="wrap">
                  {competencias[key]?.content.map<JSX.Element>(
                    (item: string) => {
                      return (
                        <Box
                          key={item}
                          p=".5rem"
                          borderRadius="8px"
                          bgColor={"blackAlpha.300"}
                        >
                          <Text
                            fontWeight="500"
                            color={
                              colorMode === "light" ? "gray.800" : "inherit"
                            }
                          >
                            {item}
                          </Text>
                        </Box>
                      );
                    }
                  )}
                </Flex>
              </ScaleFade>
            </Box>
          );
        })}
      </GridItem>
    </Grid>
  );
}

export default SobreMim;
