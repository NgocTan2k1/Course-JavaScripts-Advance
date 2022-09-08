// this.firstName = 'Ngoc';
// this.lastName = 'Tan';

// const teacher = {
//    firstName: 'Son',
//    lastName: 'Dang',

//    getFullName() {
//       return this.firstName + ' ' + this.lastName;
//    },
// }

// //case 1:
// console.log(teacher.getFullName());

// //case 2:
// const getTeacherName = teacher.getFullName;

// console.log(getTeacherName());

// //case 3:
// const getTeacherName1 = teacher.getFullName.bind(teacher);

// console.log(getTeacherName1());

// //case 4:
// const student = {
//    firstName: 'Jane',
//    lastName: 'Doe',
// }
// const getStudentName = teacher.getFullName.bind(student);
// console.log(getStudentName());

const teacher = {
   firstName: 'Son',
   lastName: 'Dang',

   getFullName() {
      console.log(this.firstName + ' ' + this.lastName);
   },
};

const button = document.querySelector('button');

button.onclick = teacher.getFullName.bind(teacher);