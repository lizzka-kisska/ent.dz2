let fs = require('fs');
let text;
let alph = new Array();
let i=0, j, entropy=0, alphLen = 0;

text = fs.readFileSync('inputent.txt');
text = text.toString();
for (i=0; i < text.length; i++){
	alph[text.charAt(i)] = 0;
} 

for (i=0; i < text.length; i++){
    alph[text.charAt(i)]++; //получаем кол-во букв
}

for (i in alph){
    alph[i] /= text.length;
    alphLen++;
}
if (alphLen <= 1){
    entropy = 0;
}
else{
    for (j in alph){
        entropy += -1 * alph[j] * Math.log2(alph[j])/ Math.log2(alphLen);
    }
}
console.log(entropy);
