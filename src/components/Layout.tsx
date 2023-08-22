import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({children}: any) {
    return (
        <>
            <Header/>
            <Box paddingTop={['52px', '52px', '70px', '70px']} as="main" minW='100%'>
                {children}
            </Box>
            <Footer />
        </>
    );
}

export default Layout;