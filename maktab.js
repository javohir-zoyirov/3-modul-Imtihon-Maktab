const students = [
  {
    id: 1,
    name: "Javohir",
    surname: "Zoyirov",
    address: "Bukhara",
    classId: 1,
  },

  {
    id: 2,
    name: "Laziz",
    surname: "Hamroyev",
    address: "Zhondor",
    classId: 1,
  },
  {
    id: 3,
    name: "Jamshid",
    surname: "Husenov",
    address: "Samarqand",
    classId: 1,
  },
  {
    id: 4,
    name: "Jahongir",
    surname: "Ostonov",
    address: "Xiva",
    classId: 1,
  },
  {
    id: 5,
    name: "Fayzulla",
    surname: "Hamroyev",
    address: "Xorazm",
    classId: 1,
  },

  {
    id: 6,
    name: "Fayzulla",
    surname: "Hamroyev",
    address: "Xorazm",
    classId: 1,
  },

  {
    id: 7,
    name: "Ayubbek",
    surname: "O'rinboyev",
    address: "Andijon",
    classId: 2,
  },
  {
    id: 8,
    name: "Firdavs",
    surname: "Asatullayev",
    address: "O'sh",
    classId: 2,
  },
  {
    id: 9,
    name: "Abdumalik",
    surname: "Burxonov",
    address: "Toshkent",
    classId: 2,
  },
  {
    id: 10,
    name: "Otabek",
    surname: "Mahkamov",
    address: "Navoiy",
    classId: 2,
  },
  {
    id: 11,
    name: "Nodir",
    surname: "Botirov",
    address: "Jizzax",
    classId: 2,
  },

  {
    id: 12,
    name: "Begzod",
    surname: "Zakirov",
    address: "Chimkent",
    classId: 3,
  },
  {
    id: 13,
    name: "Shaxzod",
    surname: "Baxtiyorov",
    address: "Qiziltepa",
    classId: 3,
  },
  {
    id: 14,
    name: "Hojimurod",
    surname: "Nekboyev",
    address: "Shofirkon",
    classId: 3,
  },
  {
    id: 15,
    name: "Diyorbek",
    surname: "Majidov",
    address: "Baxmal",
    classId: 3,
  },
  {
    id: 16,
    name: "Samandar",
    surname: "Choriyev",
    address: "Surxon",
    classId: 3,
  },
  {
    id: 17,
    name: "Javohir",
    surname: "Xolmirzaev",
    address: "Surxondaryo",
    classId: 4,
  },

  {
    id: 18,
    name: "Azamat",
    surname: "Sariboyev",
    address: "Zomin",
    classId: 4,
  },
  {
    id: 19,
    name: "Dosmurod",
    surname: "Asadov",
    address: "Gijduvon",
    classId: 4,
  },
  {
    id: 20,
    name: "Olmos",
    surname: "Sohibov",
    address: "Marhamat",
    classId: 4,
  },
  {
    id: 21,
    name: "Jobir",
    surname: "Zokirov",
    address: "Qorakol",
    classId: 4,
  },
  {
    id: 22,
    name: "Javohir",
    surname: "Zoyirov",
    address: "Sag'bon",
    classId: 4,
  },
];

const teachers = [
  {
    id: 1,
    name: "Otabek",
    surname: "Hamroyev",
    address: "Chilonzor",
    classId: 1,
  },
  {
    id: 2,
    name: "Dilmurod",
    surname: "Qosimov",
    address: "Sebzor",
    classId: 2,
  },
  {
    id: 3,
    name: "Abdulaziz",
    surname: "Ochilov",
    address: "Yunusobod",
    classId: 3,
  },
  {
    id: 4,
    name: "Said",
    surname: "Karimov",
    address: "Romitan",
    classId: 4,
  },
];

const classes = [
  {
    id: 1,
    title: "7-A",
  },
  {
    id: 2,
    title: "7-B",
  },
  {
    id: 3,
    title: "7-C",
  },
  {
    id: 4,
    title: "7-D",
  },
];

//1
console.log("1)");
console.log("O'quvchilar soni :", students.length);

// 2

console.log("2)");

const searchByClasses = classes.map((clas) => {
  const searchByStudent = students.filter((student) => {
    return clas.id === student.classId;
  });

  console.log(clas.title, "da", searchByStudent.length, "o'quvchi bor");
});

//3

console.log("3)");

let id = 13;

const studentByStudents = students.find((student) => {
  return student.id === id;
});

const studentByClasses = classes.find((clas) => {
  return studentByStudents.classId === clas.id;
});

console.log("Ismi :", studentByStudents.name);
console.log("Familiyasi :", studentByStudents.surname);
console.log(studentByClasses.title, "da o'qiydi");

// 4
console.log("4)");
let title = "7-A";

const searchByClas = classes.find((clas) => {
  return clas.title === title;
});

const searchByTeachers = teachers.find((teacher) => {
  return searchByClas.id === teacher.classId;
});

console.log("O'qituvchi ismi :", searchByTeachers.name);
console.log("O'qituvchi familiyasi :", searchByTeachers.surname);
console.log("Address :", searchByTeachers.address);

// 5

console.log("5)");

//6
console.log("6)");

// 7

console.log("7)");

let surname = "Xolmirzaev";

const searchBySurname = students.find((student) => {
  return student.surname === surname;
});

const poisk = classes.find((clas) => {
  return clas.id === searchBySurname.classId;
});
console.log(poisk.title, "da o'qiydi");

// 8
console.log("8)");

let ism = "Javohir";
let count = 0;

students.map((student) => {
  if (student.name === ism) return count++;
});

console.log(count, "ta", ism, "bor");

// 9

console.log("9)");
let son = 5;
let bor;
const poiskByStudent = classes.map((calssId) => {
  const studentsAll = students.filter((student) => {
    return calssId.id === student.classId;
  });
  if (studentsAll.length === son) {
    bor = calssId.title;
    console.log(bor);
  }
});

// 10

console.log("10)");

let Id = 12;

const searchById = students.find((student) => {
  return student.id === Id;
});

const poiskByTeacher = teachers.find((teacher) => {
  return teacher.classId === searchById.classId;
});

console.log("O'qituvchining manzili :", poiskByTeacher.address);
