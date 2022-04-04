const data = [2,3,5,12,54,5,-1,-0,4,23,66,7];

const data2 = [];

for (let i = 0; i < data.length; i++) {
    let element = data[i];
    element = data[i] * data[i-1] - data[i+1];
    data2[i]= element;
}
console.log(data2);