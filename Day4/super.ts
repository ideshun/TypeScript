/*
 * @Author: Deshun
 * @Date: 2021-07-28 16:46:21
 * @LastEditors: Deshun
 * @LastEditTime: 2021-07-28 16:57:22
 * @FilePath: \TypeScript\TypeScript\Day4\super.ts
 * @Description: 类方法的重写
 */

// 人 类
class People1 {
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
class Man1 extends People1 {
  // 新成员
  height: number;

  // 构造方法的重写
  constructor(name: string, age: number, height: number) {
    // super 关键字调用父类的构造方法
    super(name, age);
    this.height = height;
  }

  // 普通方法的重写
  run(): string {
    // return this.name + "的年龄是：" + this.age + '，身高是：' + this.height;
    // 普通方法采用 super.方法() 进行调用
    return super.run() + '，身高是：' + this.height;
  }
}

// 女人 子类
class Woman1 extends People1 {}

let m1 = new Man1("Mr.Liu", 18, 1.88);
console.log(m1.run());
// Mr.Liu的年龄是：18，身高是：1.88

let w1 = new Woman1("Ms.Liu", 19);
console.log(w1.run());
// Ms.Liu的年龄是：19