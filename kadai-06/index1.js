const obj1 = "abc"
const obj2 = 123
const obj3 = false 
const obj4 = { a: 123 }
const obj5 = { func: () => console.log('Hi!') }
const obj6 = { func: () => console.log('Hi!'), a: 123 }
const obj7 = { property: undefined }

console.log(JSON.stringfy(obj1))
console.log(JSON.stringfy(obj2))
console.log(JSON.stringfy(obj3))
console.log(JSON.stringfy(obj4))
console.log(JSON.stringfy(obj5))
console.log(JSON.stringfy(obj6))
console.log(JSON.stringfy(obj7))