import './App.css';
import React from "react";
import { Layout } from "antd";
import Card from './components/Card';
import Link from './elements/Link';

const { Header, Content} = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header style={{ background: 'black', padding:'40px', marginBottom:'10px' }}>
         <div className="logo" style={{float: "left", marginLeft:'15px', fontSize:"2rem", color: "white" }}>Kelompok 36</div>
         <div style={{float: "right"}}>
           <Link href="http://52.68.96.58/">Link</Link>
           <Link href="https://cdn-image.hipwee.com/wp-content/uploads/2020/03/hipwee-Kan-saya-belanjanya-cuma-dikit-nggak-banyak-ini.-Cepet-kok-pasti-9.png">Link</Link>
         </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="Components">
            <Card bgcolor="gray" />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
