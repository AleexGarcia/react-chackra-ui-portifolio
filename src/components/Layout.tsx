import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({children}: any) {
    return (
        <>
            <Header/>
            <Flex direction='column' gap='1rem' paddingTop={['66px', '66px', '77px', '77px']} as="main" minW='100%'>
                {children}
            </Flex>
            <Footer />
        </>
    );
}

export default Layout;