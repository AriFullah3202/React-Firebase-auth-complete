const student = { name: 'fike', job: 'practice', address: 'janina' }
const { address, ...rest } = student;
console.log(address)
console.log(rest)       