/*
 * @Author: Deshun
 * @Date: 2021-07-19 15:09:30
 * @LastEditors: Deshun
 * @LastEditTime: 2021-07-19 16:10:59
 * @FilePath: \TypeScript\test\Day2\enum.ts
 * @Description: 枚举
 */
enum Week {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

console.log(Week.Monday)
console.log(Week[1])
console.log(Week['Wednesday'])
// 0 Tuesday 2

let num: Week = 10
let Three: Week = Week.Wednesday
console.log(Three);
// 2

enum Week2 {
  Monday,
  Tuesday,
  Wednesday = 3,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

console.log(Week2.Monday)
console.log(Week2.Wednesday)
console.log(Week2.Thursday)
// 0 3 4
console.log(Week2[2])
// undefined
console.log(Week2[3])
// Wednesday


// 可以强行将枚举值赋值为其它类型，比如字符串类型，但后续都必须赋值
enum Week3 {
  Monday,
  Tuesday,
  Wednesday = 'Tom',
  Thursday = 'Mary',
  Friday = "Jay",
  Saturday = 'Tony',
  Sunday = 'Danny'
}

let num2: Week3 = 10
let num3: Week3 = Week3.Wednesday
console.log(num3)
//  Tom
console.log(typeof num3)
//  string

// 使用const来限定这个枚举是常数，它和普通枚举的区别是编译时被删除
const enum Info {
  name = 'Mr.Lee',
  age = 100
}
console.log(Info.age)