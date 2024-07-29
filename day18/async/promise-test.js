const DB = [];

function saveDB(user) {
  const oldDBSize = DB.length;
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if (DB.length > oldDBSize) {
      resolve(user);
    } else {
      reject(new Error("Save DB Error!"));
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve) => {
    resolve(`success register ${user.name}`);
  });
}

function registerByPromise(user) {
  const result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch((error) => new Error(error))
    .finally(() => console.log("완료"));
  result.then(console.log);
  return result;
}

const myUser = { email: "andy@test.com", password: "12345", name: "andy" };
registerByPromise(myUser);

const allResult = Promise.all([
  saveDB(myUser),
  sendEmail(myUser),
  getResult(myUser),
]);
allResult.then(console.log);
