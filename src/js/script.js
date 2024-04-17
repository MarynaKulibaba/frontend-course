;(function () {
  class Student {
    #lessonsCount = 25

    #grades

    #attendances

    #indexOfLesson = -1

    constructor(fname, lname, yearOfBirth) {
      if (
        typeof fname !== 'string' ||
        typeof lname !== 'string' ||
        typeof yearOfBirth !== 'number'
      ) {
        throw new Error(
          'Invalid parameter types. fname and lname should be strings, yearOfBirth should be a number.'
        )
      }
      this.fname = fname
      this.lname = lname
      this.yearOfBirth = yearOfBirth
      this.#grades = new Array(this.#lessonsCount)
      this.#attendances = new Array(this.#lessonsCount)
      this.#indexOfLesson = -1
    }

    getAge() {
      return new Date().getFullYear() - this.yearOfBirth
    }

    getAverageGrade() {
      const items = this.#grades.filter((e) => typeof e !== 'undefined')
      const total = items.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
      return total / items.length
    }

    present() {
      this.#setAttendance(true)
    }

    absent() {
      this.#setAttendance(false)
    }

    getAverageAttendance() {
      const items = this.#attendances.filter((e) => typeof e !== 'undefined')
      const total = items.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
      return total / items.length
    }

    setGrade(grade) {
      if (this.#indexOfLesson >= this.#grades.length) {
        throw new Error('Reached maximum of lessons')
      }
      if (typeof this.#attendances[this.indexOfLesson] === 'undefined') {
        throw new Error('Attendance of pupil undefined')
      }
      if (!this.#attendances[this.indexOfLesson]) {
        throw new Error('Impossible grade of missed lesson')
      }
      if (this.#grades[this.indexOfLesson]) {
        throw new Error('Impossible override grade')
      }
      if (typeof grade !== 'number' || grade < 0 || grade > 100) {
        throw new Error('Grade should be number type, between 0 and 100')
      }
      this.#grades[this.#indexOfLesson] = grade
    }

    summary() {
      const averageGrade = this.getAverageGrade()
      const averageAttendance = this.getAverageAttendance()

      if (averageGrade < 90 && averageAttendance < 0.9) return 'Редиска!'
      if (averageGrade >= 90 && averageAttendance >= 0.9) return 'Молодець!'
      return 'Добре, але можна краще'
    }

    #setAttendance(isPresent = true) {
      if (typeof isPresent !== 'boolean') {
        throw new Error('isPresent should be boolean type')
      }
      if (this.indexOfLesson >= this.#lessonsCount) {
        throw new Error('Reached maximum of lessons')
      }
      this.indexOfLesson += 1
      this.#attendances[this.indexOfLesson] = isPresent
    }
  }

  const student1 = new Student('Aurelia', 'Blackwood', 1900)
  const student2 = new Student('Phoenix', 'Frost', 2000)

  for (let i = 0; i < 25; i += 1) {
    student1.present()
    student1.setGrade(75)
  }

  student2.present()
  // student2.absent()

  student2.setGrade(8)
  // student2.setGrade(95)

  console.log(`${student1.fname} ${student1.lname}: ${student1.summary()}`)
  console.log(`${student2.fname} ${student2.lname}: ${student2.summary()}`)
})()
