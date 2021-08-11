/*
 * @Author: Deshun
 * @Date: 2021-07-19 16:11:09
 * @LastEditors: Deshun
 * @LastEditTime: 2021-07-19 16:14:29
 * @FilePath: \TypeScript\test\Day2\union.ts
 * @Description: Union Types 联合类型和字面量
 */

// 创建一个字面量类型
// 类型和值都是同样的名称
// let myName: string = 'Mr.Liu'
let myName: 'Mr.Liu'
myName = 'Mr.Liu' // 只能是 Mr.Liu

// 有什么意义
// 创建一个性别类型
let sex: '男' | '女'
sex = '男'
sex = '女'
// sex = '保密' // 报错
// 只能取 '男' 和 '女'

// 联合类型
let numOrNumber: number | string
numOrNumber = 100
numOrNumber = 'Mr.Liu'
// numOrNumber = true // 报错

function info(other: number | string) {
  return other
}
console.log(info(100))
console.log(info('Mr.Liu'))
