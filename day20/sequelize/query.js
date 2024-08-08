const { User } = require("./models");
User.create({
  name: "zero",
  age: 24,
  married: false,
  comment: "자기소개1",
});

User.create({
  name: "pero",
  age: 33,
  married: false,
  comment: "자기소개2",
});

User.create({
  name: "nero",
  age: 34,
  married: false,
  comment: "자기소개3",
});

// 데이타입력
