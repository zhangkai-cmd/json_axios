import { Tabs } from 'antd';
import { tabData } from './utils/home'
import { Link } from 'react-router-dom';
import './App.scss';
import {useEffect, useState} from "react";

const { TabPane } = Tabs;

function App(props) {

    const [activeKey, setActiveKey] = useState('1')
    const path = props.location.pathname;


    useEffect(() => {
        tabData.map(item => {
            if(item.path == path) {
                setActiveKey(item.key)
            }
        })

        document.body.scrollTop=document.documentElement.scrollTop=0
    }, [path])

  return (
    <div className="wrap">
      <div className="header">
          <span className="logo"></span>
          <Tabs defaultActiveKey="1" activeKey={activeKey}>
              {
                  tabData.map(item => <TabPane tab={
                      <Link to={item.path}>{item.name}</Link>
                  } key={item.key}></TabPane>)
              }
          </Tabs>
      </div>
      <div className="content">
          {props.children}
      </div>
      <div className="footer">
        <p>© Rhinotherm, 2005. All rights reserved</p>
        <p>EMAIL: contact@rhinotherm.com.cn</p>
      </div>
    </div>
  );
}

export default App;
