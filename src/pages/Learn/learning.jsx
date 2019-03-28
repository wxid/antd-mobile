import React, { Component } from 'react';

function timeout(ms) {
  return new Promise((resolve, reject) => {
    console.log(143);
    setTimeout(resolve, ms, 'done');
    console.log(14311333);
  });
}

class Learning extends Component {
  render() {
    // const promise = new Promise(function(resolve, reject) {
    //   if (false) {
    //     console.log('wode')
    //     resolve('wode')
    //   } else {
    //     console.log('shinide');
    //     resolve('shinide')
    //   }
    // });
    // promise.then(function(value) {
    //   console.log(value);
    // }, function(error) {
    //   console.log(error);
    // });
    console.log(123);

    timeout(100).then((value) => {
      console.log(value)
    });
    console.log(4545);
    return (<div>123</div>);
  }
}

export default Learning;
