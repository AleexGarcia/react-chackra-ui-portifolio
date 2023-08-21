import {ChakraProvider} from '@chakra-ui/react'
import Banner from './components/Banner'
import Header from './components/Header'

function App() {

  return (
    <ChakraProvider>
        <Header />
        <Banner />
    </ChakraProvider>
  )

}

export default App
