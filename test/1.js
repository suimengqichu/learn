/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-03 11:16:58
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-04-07 14:25:45
 * @FilePath: \learn\test\1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
async function test1() {
  console.log(1)
  return "test1-resolve"
  console.log(2)
}

function test2() {
  console.log(3)
  return "test2-resolve"
  console.log(4)
}

function test3() {
  return new Promise((resolve, reject) => {
    console.log(5)
    resolve("test3-resolve")
    console.log(6)
  })
}

function test4() {
  return new Promise((resolve, reject) => {
    console.log(7)
    resolve("test4-resolve")
    console.log(8)
  })
}

test1()
  .then((res) => {
    console.log("test1")
    console.log(res)
    test2()
  })
  .then((res) => {
    console.log("test2")
    console.log(res)
    return test3()
  })
  .then((res) => {
    console.log("test3")
    console.log(res)
    return test4()
  })
  .then((res) => {
    console.log("test4")
    console.log(res)
    return test1()
  })
  .then((res) => {
    console.log("test1")
    console.log(res)
    return test2()
  })
  .then((res) => {
    console.log("test2")
    console.log(res)
    console.log("end")
  })
