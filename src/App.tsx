
import Banner from './components/Banner'
import Contato from './components/Contato'
import Footer from './components/Footer'
import Layout from './components/Layout'
import Projetos from './components/Projetos'
import SobreMim from './components/SobreMim'

function App() {

  return (
    <Layout>
      <Banner />
      <SobreMim />
      <Projetos />
      <Contato />
      <Footer />
    </Layout>
  )

}

export default App
