const inputs = await fetch("https://codember.dev/users.txt").then((res) =>
  res.text()
);

const REQUIRED_FIELDS = ["usr", "eme", "psw", "age", "loc", "fll"];
const users = [];
let inputsIndex = 0;
let validUsers = [];

inputs.split("\n").map((line) => {
  if (line.length > 0) {
    const auxObj = {};
    line
      .split(" ")
      .map((item) => item.split(":"))
      .map((item) => {
        auxObj[item[0]] = item[1];
      });

    users[inputsIndex] = { ...users[inputsIndex], ...auxObj };
  } else inputsIndex++;
});

validUsers = users.filter((user) => {
  let isValidUser = true;
  REQUIRED_FIELDS.forEach((fieldKey) => {
    if (!(fieldKey in user)) {
      isValidUser = false;
    }
  });
  return isValidUser;
});

console.log(validUsers.length, validUsers[validUsers.length - 1].usr);
