let user = {
  id: 1,
  name: 'Armando',
  age: 18
};

for(let prop in user){
  console.log(prop, user[prop]);
}