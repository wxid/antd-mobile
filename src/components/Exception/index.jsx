import React, { createElement } from 'react';
import className from 'classname';
import { Button } from 'antd-mobile';
import config from './typeConfig';


class Exception extends React.PureComponent {
  static defaultProps = {
    backText: 'back to home',
    redirect: '/',
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      className,
      backText,
      linkElement = 'a',
      type,
      title,
      desc,
      actions,
      redirect,
      ...rest
    } = this.props;

    const pageType = type in config ? type : '404';
    // const clsString = className('', className);
    console.log(this.props)
    return (
      <div {...rest}>
        <div>
          <div style={{backgroundImage: `url(${config[pageType].img})`}} />
        </div>
        <div>
          <h1>{title || config[pageType].title}</h1>
          <div>{desc || config[pageType].desc}</div>
          <div>
            {actions ||
              createElement(
                linkElement,
                {
                  to: redirect,
                  href: redirect,
                  target: '_self',
                },
                <Button type="primary">{backText}</Button>
              )}
          </div>
        </div>
      </div>
    );
  }
}


export default Exception;
