/*
 * @Author: Jan-superman
 * @Date: 2018-09-27 20:38:37
 * @Last Modified by: superman
 * @Last Modified time: 2018-12-25 01:25:55
 */

import React, { PureComponent } from 'react';
import { Button, Toast, WhiteSpace, Menu, ActivityIndicator, NavBar } from 'antd-mobile';


const data = [
  {
    value: '1',
    label: 'Food',
  }, {
    value: '2',
    label: 'Supermarket',
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
  },
];

class Test extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      initData: '',
      show: false,
    };
  }

  componentDidMount() {}

  showToast = () => {
    Toast.info('This is a toast tips !!!', 10);
  };

  loadingToast = () => {
    Toast.loading('loading.....', 10, () => {
      console.log('Load complete !!!!');
    });
  };

  onChange = (value) => {
    console.log(value);
  };

  onOk = (value) => {
    console.log(value);
    this.onCancel();
  };

  onCancel = () => {
    this.setState({
      show: false,
    });
  };

  handleClick = (e) => {
    e.preventDefault();

    this.setState({
      show: !this.state.show,
    });

    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      });
    }
  };

  onMaskClick = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    const { route } = this.props;
    const {initData, show} = this.state;
    const menuEl = (
      <Menu
        className="single-multi-foo-menu"
        data={initData}
        value={['1']}
        level={1}
        onChange={this.onChange}
        onOk={this.onOk}
        onCancel={this.onCancel}
        height={document.documentElement.clientHeight * 0.6}
        multiSelect
      />
    );
    const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div>
        <Button type="primary" onClick={this.showToast}>
          {route.title}
        </Button>
        <WhiteSpace />
        <Button onClick={this.loadingToast}>
          loading
        </Button>
        <div className={show ? 'single-multi-menu-active' : ''}>
          <div>
            <NavBar
              leftContent="Menu"
              mode="light"
              onLeftClick={this.handleClick}
              className="single-multi-top-nav-bar"
            >
              Single Multi menu
            </NavBar>
          </div>
          {show ? initData ? menuEl : loadingEl : null}
          {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
        </div>
      </div>
    );
  }
}

export default Test;
