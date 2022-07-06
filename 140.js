/*************************************************
 * 查找频率出现最高的单词
 ************************************************/

let ss = 'fjdksfjksf  workd  dfjfdk  dkfjdkf dfjdkfd';

let r = /\w+/g;

let m = ss.match(r);

// [ 'fjdksfjksf', 'workd', 'dfjfdk', 'dkfjdkf', 'dfjdkfd' ]
console.log(m);

// ::::然后再根据每个单词，转成正则，然后再match求个数即可

