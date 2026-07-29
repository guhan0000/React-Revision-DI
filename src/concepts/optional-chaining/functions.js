const marks = {
  phy: 80,
  che: 90,
  mat: 90,
  total: function () {
    return this.phy + this.che + this.mat;
  },
};
console.log(marks.total()); // 260
// console.log(marks.avg()); // type error
// console.log(marks?.avg()); // type error
console.log(marks?.avg?.()); // undefined
