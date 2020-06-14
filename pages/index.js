import { Layout, Breadcrumb, Typography, Affix, Carousel } from 'antd';
import Header from '../components/Header';

const { Content, Footer } = Layout;

// const { Title } = Typography;

export default function Home() {
  return (
    <Layout className="layout">
      <Header style={{ height: '100%' }} />
      <Content style={{ padding: '0 50px' }}>
        <Carousel autoplay>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </Content>
      <Affix offsetBottom={0}>
        <Footer style={{ textAlign: 'center' }}>anipatil.com</Footer>
      </Affix>
    </Layout>
  );
}
