/*
 * @Author: Deshun
 * @Date: 2021-07-19 16:57:51
 * @LastEditors: Deshun
 * @LastEditTime: 2021-08-11 22:42:01
 * @FilePath: \PanSoft\TypeScript\code\assertions.ts
 * @Description: Type Assertions 类型推断及断言
 */

let other = 100 // 推断 other 类型 number
// other = 'Mr.Liu'  => 报错

let yourName // 推断 yourName 为 any 类型
// 可以给 yourName 任意赋值
yourName = 10
yourName = 'Tom'

function aseInfo(num: number, str: string) {
  return num
}

console.log(typeof aseInfo(100, 'Mr')) // function aseInfo(num: number, str: string): number