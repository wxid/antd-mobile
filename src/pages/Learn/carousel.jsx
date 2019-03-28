import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

class App extends React.Component {
  state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    imgHeit: 176,
  }

  componentDidMount() {
    console.log(123123);
    // setTimeout(() => ({
    //   data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    // }), 100);
  }

  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log(`slide to `, index)}
        >{
          this.state.data.map(val => (
            <a key={val} href="http://www.alipay.com"
              style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
            >
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
            </a>
          ))
        }</Carousel>
      </WingBlank>
    );
  }
}

export default App;
