import React from "react";
import { Menu, Icon } from "antd";
import "antd/dist/antd.css";
import logo from './logo.svg';
import 'antd/dist/antd.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Navbar extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
		return (
			<Menu
				// onClick={this.handleClick}
				// selectedKeys={[this.state.current]}
				mode="horizontal">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Event Management</h1>
        </header>
				<Menu.Item key="mail">
					<Icon type="mail" />Dashboard
				</Menu.Item>
				<Menu.Item key="app">
					<Icon type="appstore" />Events
				</Menu.Item>
				<SubMenu
					title={
						<span>
							<Icon type="setting" />Calendar
						</span>
					}>
					<MenuItemGroup title="Item 1">
						<Menu.Item key="setting:1">Option 1</Menu.Item>
						<Menu.Item key="setting:2">Option 2</Menu.Item>
					</MenuItemGroup>
					<MenuItemGroup title="Item 2">
						<Menu.Item key="setting:3">Option 3</Menu.Item>
						<Menu.Item key="setting:4">Option 4</Menu.Item>
					</MenuItemGroup>
				</SubMenu>
				<Menu.Item key="alipay">
					<a
						href="http://upandupbham.com"
						target="_blank"
						rel="noopener noreferrer">
						upandupbham
					</a>
				</Menu.Item>
			</Menu>
		);
	}
}

export default Navbar;
