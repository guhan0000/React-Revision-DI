const student = { name: "Guhan", address: { state: "TN" } };
// console.log(student.grade.maths); // type error cannot read properties of undefined
console.log(student?.grade?.maths); // undefined

const user = {
  name: "John",
};
console.log(user.address); // undefined
console.log(user.address.city); // type error
console.log(user?.address?.city); // undefined
