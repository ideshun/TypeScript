/*
 * @Author: Deshun
 * @Date: 2021-07-19 16:57:51
 * @LastEditors: Deshun
 * @LastEditTime: 2021-07-21 10:18:42
 * @FilePath: \TypeScript\test\Day2\assertions.ts
 * @Description: Type Assertions 类型推断及断言
 */

let other = 100

// other = 'Mr.Liu'  //报错

let yourName //any类型
yourName = 10
yourName = 'Tom'

function aseInfo(num: number, str: string) {
  return num
}

console.log(typeof aseInfo(100, 'Mr'))