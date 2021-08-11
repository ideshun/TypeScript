/*
 * @Author: Deshun
 * @Date: 2021-08-11 22:49:35
 * @LastEditors: Deshun
 * @LastEditTime: 2021-08-11 23:31:33
 * @FilePath: \PanSoft\TypeScript\code\type&interface.ts
 * @Description: type 类型 和 interface 接口
 */

// 描述一个对象的类型
type WorkerTypes = {
  name: string,
  age: number
};

const work: WorkerTypes = {
  name: 'Mr.Liu',
  age: 18
}

// 接口用来定义一个类型结构，定义一个类中应该包含哪些属性和方法，同时也可以当成类型声明使用 (限制 / 规范)
interface Student {
  name: string;
  age: number;
}

const people: Student = {
  name: 'Mr.Liu',
  age: 18,
  sex: '男', // 因为下面的接口给 Student 定义了 sex 所以这里不报错了
  feature: '飞行员' // 多参数或少参数都会报错
}

// type 和 interface 的区别

// 1. 注意两者写法不同

// 2. 同一个 type 在页面中只能有一个，不然会报错，同一个 interface 在页面中可以定义多个
type WorkerTypes { // 报错 重复标识符 Duplicate identifier 'WorkerTypes' 
  sex: string
}

// 页面中写了两个相同名字的接口，相当于把两个合并
interface Student {
  sex: string;
}

/**
 * 3.接口可以在定义类的时候去限制类的结构
 *   接口中的所有属性都不能有实际的值
 *   接口只定义对象的结构，而不考虑实际的值
 *   在接口中所有方法都是抽象方法
 */

interface Student {
  sayHello(): void;
  // sayMiFans(){ // 直接写方法体报错 which lacks return-type annotation, implicitly has an 'any' return type.
  
  // }
}

interface Student {
  married?: boolean = true; // 不过可以设置默认值
  // 这里的 ? 表示可选参数
}

/**
 * 定义类时可以去实现一个接口
 * 实现接口就是使类满足接口的需求
 */
class MyClass implements Student {
  name: string;
  age: number;
  sex: string;
  sayHello() {
    console.log('Hello www.w3h5.com');
  }
  constructor(name:string, age:number, sex:string) { // 这里必须要有构造函数 不然报错
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}