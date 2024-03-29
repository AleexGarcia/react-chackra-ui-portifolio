import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  SlideFade,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { IProjeto } from "../../Interfaces";
import { useInViewport } from "react-in-viewport";
import { useRef } from "react";

type TProjectCard = {
  index: number;
  projeto: IProjeto;
};

function ProjetoCard({ index, projeto }: TProjectCard) {

  const { imgSrc, name, content, skills, deploy, repository } = projeto;
  const { colorMode } = useColorMode();
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-100px" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <Grid
      templateColumns={["auto", "auto", "auto", "1fr 1fr"]}
      alignItems="center"
      minH="75vh"
      rowGap="1rem"
      columnGap="2rem"
      ref={ref}
    >
      <GridItem order={{base:undefined, lg: index % 2 === 0 ? 2 : undefined}}>
        <SlideFade in={inViewport} offsetX="-200px">
          <Image src={imgSrc} />
        </SlideFade>
      </GridItem>
      <GridItem>
        <SlideFade in={inViewport} offsetX="-200px">
          <Flex direction="column" gap="2rem" align="center">
            <Heading as="h4">{name}</Heading>
            <Text>{content}</Text>
            <Flex wrap="wrap" gap=".5rem">
              {skills.map((skill) => {
                return (
                  <Box
                    key={skill}
                    p=".5rem"
                    borderRadius="8px"
                    bgColor={colorMode === "dark" ? "gray.800" : "gray.300"}
                  >
                    <Text
                      fontWeight="500"
                      color={colorMode === "light" ? "gray.800" : "inherit"}
                    >
                      {skill}
                    </Text>
                  </Box>
                );
              })}
            </Flex>
            <Flex gap="1rem">
              {deploy && <Link isExternal href={deploy} textDecoration="none">
                <Button variant="outline" size="lg" borderColor="gray.300">
                  Deploy
                </Button>
              </Link>}
              <Link isExternal href={repository} textDecoration="none">
                <Button size="lg" colorScheme="orange">
                  Repository
                </Button>
              </Link>
            </Flex>
          </Flex>
        </SlideFade>
      </GridItem>
    </Grid>
  );
}

export default ProjetoCard;
