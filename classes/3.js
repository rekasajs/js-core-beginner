class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calculateAnnualSalary() {
    const baseSalary = super.calculateAnnualSalary();
    const bonus = baseSalary * 0.1;
    return baseSalary + bonus;
  }
}

const manager1 = new Manager('Иван', 5000, 'Продажи');
const manager2 = new Manager('Анна', 6000, 'Маркетинг');

console.log(`Годовая зарплата менеджера1 ${manager1.name}: $${manager1.calculateAnnualSalary()}`);
console.log(`Годовая зарплата менеджера2 ${manager2.name}: $${manager2.calculateAnnualSalary()}`);
