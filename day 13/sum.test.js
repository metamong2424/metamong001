// 로그인할때 써먹기 좋을듯.

const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("2 더하기 2는 4", () => {
  expect(2 + 2).toBe(4);
});
// 객체 data에 two라는 속성을 추가하고,
// 그 결과를 예상값과 비교하는 테스트를 수행합니다.

test("객체할당테스트", () => {
  // data라는 객체를 생성하고, 초기값으로 { one: 1 }을 할당
  const data = { one: 1 };
  // 생성된 data 객체에 two라는 속성을 추가하고, 값을 2로 설정.
  data["two"] = 2;
  // expect 함수를 사용하여 data 객체가 { one: 1, two: 2 }와 일치하는지 검사.
  expect(data).toEqual({ one: 1, two: 2 });
});

// 여기서는 두 개의 양수를 더한 결과가 항상 0이 아님을 검증하는 테스트를 수행
test("양수 더하기", () => {
  // 이중 반복문을 사용하여 a와 b라는 두 개의 변수를 1부터 9까지 반복하면서 모든 조합을 검사.
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      //각각의 a와 b에 대해 더한 결과인 a + b가 0이 아닌지를 검사합니다.
      expect(a + b).not.toBe(0);
    }
  }
});

// null에 대한 다양한 검증을 수행하는 테스트
test("null", () => {
  const n = null;
  //변수 n이 null인지를 검사합니다. 즉, n === null과 동일한지 확인합니다.
  expect(n).toBeNull();
  //변수 n이 정의되어 있는지 검사합니다. null은 값이 할당되어 있지만, 실제 값은 없는 상태이므로 정의되어 있지만(null은 정의된 상태)
  //n !== undefined는 true입니다.
  expect(n).toBeDefined();
  //변수 n이 undefined가 아닌지 검사합니다.
  //null은 undefined가 아니기 때문에 이 검사는 통과합니다.
  expect(n).not.toBeUndefined();
  //변수 n이 truthy한 값인지 검사합니다.
  //null은 falsy한 값으로 간주되므로 이 검사는 통과합니다.
  expect(n).not.toBeTruthy();
  //변수 n이 falsy한 값인지 검사합니다.
  //null은 falsy한 값으로 간주되므로 이 검사도 통과합니다.
  expect(n).toBeFalsy();
});

// zero에 대한 다양한 검증을 수행하는 테스트
test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// "two plus two"라는 간단한 수식의 결과를 검증하는 테스트
test("two plus two", () => {
  const value = 2 + 2;
  //  // value가 3보다 큰지 .. 3.5 이상인지 등등.... 검사
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});

// 문자열에 대한 패턴 매칭을 검증하는 테스트입니다.
// 여기서는 문자열 "team"에 대해 "I"라는 문자가 포함되지 않는지를 확인
test("there is no I in team", () => {
  // matcher는 주어진 정규 표현식이 문자열과 일치하는지를 검사
  // not.toMatch()는 정규 표현식이 일치하지 않아야 테스트를 통과합니다.
  // 즉, "team" 문자열에 "I"라는 문자가 포함되지 않아야 합니다.
  expect("team").not.toMatch(/I/);
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

//

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  // shoppingList 배열 안에 "milk"가 존재하는지 검사.
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});
//
async function fetchData() {
  return "peanut butter";
}

test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

// fetchData가 에러나는 상황
test("the fetch fails with an error", async () => {
  //   expect.assertions(1);
  try {
    await fetchData();
  } catch (error) {
    expect(error).toMatch("error");
  }
});

//

// 도시 데이터베이스가 특정 도시를 올바르게 포함하고 있는지를 테스트하는 예제

// 도시 데이터베이스 초기화 함수
function initializeCityDatabase() {}
// // 도시 데이터베이스 정리 함수
function clearCityDatabase() {}

function isCity(city) {
  return city === "Vienna";
}
// 각 테스트 전에 데이터베이스 초기화
beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});
//"Vienna"가 도시 데이터베이스에 있는지 검사
test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});
//"San Juan"이 도시 데이터베이스에 없는지 검사
test("city database has San Juan", () => {
  expect(isCity("San Juan")).not.toBeTruthy();
});
