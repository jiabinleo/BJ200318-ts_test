
// 类型注解
(() => {
  function greeter (person: string) {
    return 'Hello, ' + person
  }
  
  let user = 'Yee222'
  // let user = 3 // error
  
  console.log(greeter(user))
})()

// 接口
;(() => {
  interface Person {
    firstName: string
    lastName: string
  }
  
  function greeter (person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
  }
  
  let user = {
    firstName: 'Yee',
    lastName: 'Huang'
  }
  
  console.log(greeter(user))
})()

// 类
;(() => {
  class User {
    // 属性声明
    fullName: string
    firstName: string
    lastName: string
  
    constructor (firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = firstName + ' ' + lastName
    }
  }
  
  interface Person {
    firstName: string
    lastName: string
  }
  
  function greeter (person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
  }
  
  let user = new User('Yee', 'Huang')
  
  console.log(greeter(user))
})()