import { Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const MyHeader = () => {
  return (
    <Header>
      <div className="logo" />
      <Title style={{ textAlign: 'center' }} className="title">
        Aniruddha Patil
      </Title>
    </Header>
  );
};

export default MyHeader;
