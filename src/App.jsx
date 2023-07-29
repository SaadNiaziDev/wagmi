import { Layout } from "antd"
import Head from "./layout/Header"
import Foot from "./layout/Footer"
import Sidebar from "./layout/Sidebar"
import { Content } from "antd/es/layout/layout"
import Home from "./pages/Home"

function App() {

  return (
    <div className='container'>
      <Layout >
        <coingecko-coin-price-marquee-widget coin-ids="bitcoin,ethereum,binancecoin,ethereum,polkadot,matic-network,avalanche-2" currency="usd" background-color="#ffffff" locale="en"></coingecko-coin-price-marquee-widget>
        <Head />
        <Layout>
          {/* <Sidebar /> */}
          <Content>
            {/* <Home /> */}
          </Content>
        </Layout>
        <Foot />
      </Layout>
    </div>
  )
}

export default App
