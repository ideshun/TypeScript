/*
 * @Author: Deshun
 * @Date: 2021-07-15 17:33:37
 * @LastEditors: Deshun
 * @LastEditTime: 2021-07-15 17:51:45
 * @FilePath: \TypeScript\test\Day 1.ts
 * @Description: 文件描述
 */

/**
 * 交叉类型
 * 解构
 * 类型断言 as
 * 字面量类型
 * 
 * 泛型
 * /
interface Bird {
	fly(): void;
}

interface Animal {
  run: void;
  name: string;
}

type Kong = Bird | Animal
function getSmallPet(): Bird | Animal {
  
}