import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Footer, Content } = Layout;

const LayoutDefault = () => {
  return (
    <>
      <Layout className="layout">
        <Header className="header">
          Xin chào 
        </Header>
        <Layout>
          <Content className="content">
            <Outlet />
          </Content>
        </Layout>
        <Footer className="layout__footer ">Footer</Footer>
      </Layout>
    </>
  );
};

export default LayoutDefault;
