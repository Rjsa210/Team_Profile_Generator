class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName(){
    return this.name;
  }
  getId(){
    return this.id;

  }
  getEmail(){
    return this.email
  }
  getRole() {
    return 'employee';
  }
  getprops() {
    for (let prop in this) {
      console.log(`${prop}: ${this[prop]}`)
    }
  }
}
//  const employee = new Employee('Bill', 6, 'kflfgj.fjd');
 


module.exports = Employee;