import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({children}: any) {
    return (
        <>
            <Header/>
            <Box as="main" boxSizing="border-box" >
                {children}
            </Box>
            <Footer />
        </>
    );
}

export default Layout;