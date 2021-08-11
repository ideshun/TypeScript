/*
 * @Author: Deshun
 * @Date: 2021-07-28 14:00:57
 * @LastEditors: Deshun
 * @LastEditTime: 2021-07-28 16:40:43
 * @FilePath: \TypeScript\TypeScript\Day4\extends.ts
 * @Description: 类的继承
 */

// 人 类
class People {
  name: string;
  age: number;

  // 构造方法
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //执行 run函数
  run(): string {
    return this.name + "的年龄是：" + this.age;
  }
}

// 男人 子类
class Man extends People {}

// 女人 子类
class Woman extends People {
  // 独有的成员
  food: string = "早餐";

  // 独有的方法
  eat(): string {
    return this.name + "喜欢吃" + this.food;
  }
}

// 子类可以继承父类的属性和方法，也可以再创建自己独有的特性
let m = new Man("Mr.Liu", 18);
console.log(m.run());
//  Mr.Liu的年龄是：18

let w = new Woman("Ms.Li", 19);
console.log(w.run());
//  Ms.Li的年龄是：19
console.log(w.eat());
// Ms.Li喜欢吃早餐

// 大女人 孙子类
class BigWoman extends Woman {}
let b = new BigWoman("大女人", 36);
console.log(b.run());
// 大女人的年龄是：36
console.log(b.eat());
// 大女人喜欢吃早餐
