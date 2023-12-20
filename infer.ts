// infer: https://www.youtube.com/watch?v=hLZXJTm7TEk

// conditional type
type Result1 = true extends boolean ? 1 : 0;
const res: Result1 = 1;
console.log("Result1:", res);

type Result = boolean extends true ? 1 : 0;

const func = (check: boolean) => "12345";

type FuncResult = ReturnType<typeof func>;
const funcRes: FuncResult = "1";
console.log("Return type of func", typeof funcRes);

// type ReturnType<T extends (...args: any) => any> =
// T extends (...args: any) => infer R ? R : any;
