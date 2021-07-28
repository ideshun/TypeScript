/*
 * @Author: Deshun
 * @Date: 2021-07-27 17:23:40
 * @LastEditors: Deshun
 * @LastEditTime: 2021-07-27 17:29:41
 * @FilePath: \TypeScript\test\Day4\class.ts
 * @Description: class 类
 */

// 类的创建
class Person {
  // 成员字段
  // name: string = 'Mr.Liu';
  // age: number = 18;

  name: string;
  age: number;

  // 构造方法
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 执行 run 普通方法
  run(): string {
    return this.name + '的年龄是：' + this.age;
  }
}

let p = new Person('Mr.Liu', 18);
console.log(p.run());