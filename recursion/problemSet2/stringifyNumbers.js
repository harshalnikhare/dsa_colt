function stringifyNumbers(obj) {
  let strObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      strObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      strObj[key] = stringifyNumbers(obj[key]);
    } else {
      strObj[key] = obj[key];
    }
  }
  return strObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
