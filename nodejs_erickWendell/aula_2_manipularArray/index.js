const number = [1, 25, 26, 30, 30, 25];

const data = number.map((num, index) => {
  const par = [];
  for (let i = 2; i % num.length === 0; i++) {
    return console.log(num[i])
  }
})

console.log(data);