//3秒待ってHello と表示し、2秒待ってBye と表示する
setTimeout(() => {
     console.log('Hello!')
     setTimeout(() => {
          console.log('Bye!')
        }, 2000)
    }, 3000)

//NG な例
// setTimeoutは待ってくれない。
//すぐ次の行を実行するので、
//2秒後に Bye、その1秒後にHello と表示するようになる
//setTimeout(() => { console.log('Hello!') }, 3000)
//setTimeout(() => { console.log('Bye!') }, 2000)
