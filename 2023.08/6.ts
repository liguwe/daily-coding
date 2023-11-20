let c:number[] = [0, 1];
let p:readonly number[] = c; // 正确

c = p; // 报错
