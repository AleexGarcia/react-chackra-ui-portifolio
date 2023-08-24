import { Flex } from "@chakra-ui/react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ReactElement } from "react";


interface children {
    children: Array<ReactElement>
}

function Layout({ children }: children) {

  

return (
    <>
        <Header />
        <Flex direction='column' paddingTop={['66px', '66px', '77px', '77px']} as="main" minW='100%'>
            {children}
        </Flex>
        <Footer />
    </>
);
}

export default Layout;