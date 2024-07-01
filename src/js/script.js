function Student(fname, lname, yearOfBirth) {
  if (
    typeof fname !== 'string' ||
    typeof lname !== 'string' ||
    typeof yearOfBirth !== 'number'
  ) {
    throw new Error(
      'Invalid parameter types. fname and lname should be strings, yearOfBirth should be a number.'
    )
  }
  const lessonsCount = 25 // щоб у масиві не могло бути більше 25 записів

  const grades = new Array(lessonsCount) // масив з оцінками за урок
  const attendances = new Array(lessonsCount) // відзначається відвідування
  let indexOfLesson = -1

  this.fname = fname
  this.lname = lname
  this.yearOfBirth = yearOfBirth

  this.setAttendance = function (isPresent = true) {
    if (typeof isPresent !== 'boolean') {
      throw new Error('isPresent should be boolean type')
    }
    if (indexOfLesson >= lessonsCount) {
      throw new Error('Reached maximum of lessons')
    }
    indexOfLesson += 1
    attendances[indexOfLesson] = isPresent
  }

  this.getAverageAttendance = function () {
    const items = attendances.filter((e) => typeof e !== 'undefined')
    const total = items.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
    return total / items.length
  }

  // поставити оцінку за урок
  this.setGrade = function (grade) {
    if (indexOfLesson > lessonsCount) {
      throw new Error('Reached maximum of lessons')
    }
    if (typeof attendances[indexOfLesson] === 'undefined') {
      throw new Error('Attendance of pupil undefined')
    }
    if (!attendances[indexOfLesson]) {
      throw new Error('Impossible grade of missed lesson')
    }
    if (grades[indexOfLesson]) {
      throw new Error('Impossible override grade')
    }
    if (typeof grade !== 'number' || (grade < 0 && grade > 100)) {
      throw new Error('Grade should be number type, between 0 and 100')
    }
    grades[indexOfLesson] = grade
  }

  // отримує середній бал студента
  this.getAverageGrade = function () {
    const items = grades.filter((e) => typeof e !== 'undefined')
    const total = items.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
    return total / items.length
  }

  // перевіряє середню оцінку і середнє відвідування
  this.summary = function () {
    const averageGrade = this.getAverageGrade()
    const averageAttendance = this.getAverageAttendance()

    if (averageGrade < 90 && averageAttendance < 0.9) return 'Редиска!'
    if (averageGrade >= 90 && averageAttendance >= 0.9) return 'Молодець!'
    return 'Добре, але можна краще'
  }
}

// отримує вік студента
Student.prototype.getAge = function () {
  return new Date().getFullYear() - this.yearOfBirth
}

// відмітити присутність на уроці
Student.prototype.present = function () {
  this.setAttendance(true)
}
Student.prototype.absent = function () {
  this.setAttendance(false)
}

const student1 = new Student('Aurelia', 'Blackwood', 1900)
const student2 = new Student('Phoenix', 'Frost', 2000)

for (let i = 0; i <= 25; i += 1) {
  student1.present()
  student1.setGrade(75)
}

student2.present()
// student2.absent()

student2.setGrade(8)
// student2.setGrade(95)

console.log(`${student1.fname} ${student1.lname}: ${student1.summary()}`)
console.log(`${student2.fname} ${student2.lname}: ${student2.summary()}`)
