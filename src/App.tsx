import React from "react";
import { Provider } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";

import { ConfigProvider, Layout, Menu } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import { hot } from "react-hot-loader/root";
import { store } from "./store";
import "./App.css";
import Home from "./pages/home";
import HooksPage from "./pages/hooks";

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <Router>
          <Layout>
            <Sider>
              <Menu mode="inline" style={{ height: "100%" }}>
                <Menu.Item>
                  <Link to={`/home`}>
                    <span>Home</span>
                  </Link>
                </Menu.Item>
                <SubMenu title={<span>hooks</span>}>
                  <Menu.Item>
                    <Link to={`/hooks/useState`}>useState</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={`/hooks/useEffect`}>useEffect</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={`/hooks/useCallback`}>useCallback</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={`/hooks/useMemo`}>useMemo</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={`/hooks/useContext`}>useContext</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={`/hooks/useRef`}>useRef</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={`/hooks/customHooks`}>customHooks</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={`/hooks/useRematch`}>useRematch</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Content style={{ padding: "20px" }}>
                <Switch>
                  <Redirect exact from="/" to="/home" />
                  <Route path="/home" component={Home} />
                  <Route path="/hooks" component={HooksPage} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Router>
      </ConfigProvider>
    </Provider>
  );
};

const AppHot = process.env.NODE_ENV === "development" ? hot(App) : App;

export default AppHot;
