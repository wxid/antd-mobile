import React, { Component } from 'react';

function timeout(ms) {
  return new Promise((resolve, reject) => {
    console.log(143);
    setTimeout(resolve, ms, 'done');
    console.log(14311333);
  });
}

function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;
  })
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
    // console.log(123);

    // timeout(100).then((value) => {
    //   console.log(value)
    // });
    // console.log(4545);
    //
    // const p1 = new Promise(function(resolve, reject) {
    //   console.log('p1')
    //   setTimeout(() => reject(new Error('fail')), 3000);
    // })
    // const p2 = new Promise(function(resolve, reject) {
    //   console.log('p2');
    //   setTimeout(() => resolve(p1), 1000)
    // })
    // p2.then(result => console.log(1111)).catch(error => console.log(2222))

    // const promise = new Promise(function(resolve, reject) {
    //   throw new Error('text');
    // });

    // promise.catch(function(error) {
    //   console.log(error)
    // })
    //
    //
    // 如果 Promise 状态已经变成resolved，再抛出错误是无效的。
    // const promise = new Promise(function(resolve, reject) {
    //   // resolve('ok');
    //   throw new Error('test');
    // });

    // promise.then(function(value) { console.log('11' + value) }).catch(function(error) {
    //   console.log('22' + error)
    // })
    //
    // const someAsyncThing = new Promise(function(resolve, reject) {
    //   // const x = 1;
    //   resolve(x + 1);
    // });
    // someAsyncThing.then(function() {
    //   console.log('everything is great');
    // });

    // setTimeout(() => { console.log(123) }, 2000);
    //
    // Promise.all()
    // const promise = [2, 3, 5, 7, 11, 13].map((id) => {
    //   return getJSON('/post/' + id + ".json");
    // });

    // Promise.all(promise).then(function(posts) {
    //   console.log(posts)
    // }).catch(function(error) {
    //   console.log(error)
    // })
    // 如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。
    // const p1 = new Promise((resolve, reject) => {
    //   resolve('hello');
    // }).then(result => result);

    // const p2 = new Promise((resolve, reject) => {
    //     throw new Error('报错啦');
    //   }).then(result => result)
    //   .catch(e => console.log(e + 'promise'));

    // Promise.all([p1, p2]).then(result => console.log(result))
    //   .catch(e => console.log(e));

    // function* f() {
    //   for (var i = 0; true; i++) {
    //     var reset = yield i;
    //     if (reset) {
    //       i = -1;
    //     }
    //   }
    // }

    // function* helloWorldGenerator() {
    //   yield 'hello';
    //   yield 'world';
    //   return 'ending';
    // }

    // var g = f();

    // console.log(g.next());
    // console.log(g.next());
    // console.log(g.next(true));
    // console.log(g.next(true));
    //
    function* inner() {
      yield 'hello!';
    }

    function* outer1() {
      yield 'open';
      yield inner();
      yield 'close';
    }

    var gen = outer1()
    console.log(gen.next().value) // "open"
    console.log(gen.next().value) // 返回一个遍历器对象
    console.log(gen.next().value) // "close"

    function* outer2() {
      yield 'open'
      yield* inner()
      yield 'close'
    }

    var gen1 = outer2()
    console.log(gen1.next().value) // "open"
    console.log(gen1.next().value) // "hello!"
    console.log(gen1.next().value) // "close"

    return (<div>123</div>);
  }
}

export default Learning;
