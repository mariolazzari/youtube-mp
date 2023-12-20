// TypeScript 5.3: https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/
// import testJson from "./assets/test.json"  with { type: "json" };

// switch true narrowing
function myFunc(input: unknown) {
  //   if (typeof input === "string" || typeof input === "number") {
  //     return input;
  //   } else if (typeof input === "object" && !!input) {
  //     return input;
  //   }

  switch (true) {
    case typeof input === "string":
    case typeof input === "number":
      return input;

    case typeof input === "object" && !!input:
      return input;
  }
}

console.log("myFunc", myFunc(4));
console.log("myFunc", myFunc(new Date()));

// interactive inlay hints
type Point = {
  x: number;
  y: number;
};

function getCurrentPoint() {
  const point: Point = {
    x: 0,
    y: 0,
  };

  return point;
}

const currP = getCurrentPoint();
console.log("Current point:", currP);

console.log("first", currP);
