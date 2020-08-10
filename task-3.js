const findBestEmployee = function (employees) {
  // const name = Object.keys(employees);
  // const value = Object.values(employees);
  // let item = name[0];
  // let itemScore = value[0];
  // for (let i = 1; i<name.length; i+=1) {
  //     // console.log(name[i]);
  //     // console.log(value[i]);
  //     if(itemScore<value[i])
  //     {
  //         itemScore=value[i];
  //         itemName=name[i];
  //     }
  // }
  // return itemName;

  //вариант 2
  const name = Object.entries(employees);
  let winner;
  let score = 0;
  for (let i = 0; i < name.length; i += 1) {
    if (name[i][1] > score) {
      score = name[i][1];
      winner = name[i][1];
    }
  }
  return winner;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
