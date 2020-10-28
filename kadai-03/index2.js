// 最大の数を入力する
const max = parseInt(process.argv[2])

//3の倍数の時に特別なメッセージを出力する
for(let n = 1; n <= max; n = n + 1) {
    if(n % 3 === 0){
       console.log('Guten Tag')
    } else {
       console.log(n)
    }
}