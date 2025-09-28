function findMinimum(row){
    let minimumn=row[0];
    for(let i=1; i<row.length;i++){
        if(row[i]<minimumn){
           minimumn=row[i];
        }

    }
    return minimumn;
}
function sumofMinimum(numbers2d){
    let sum=0;
    for(let i=0;i<numbers2d.length;i++){
        sum+=findMinimum(numbers2d[i]);
    }
    return sum;
}
let arraysnumbers=[[1, 2, 3, 4, 5 ],[ 5, 6, 7, 8, 9 ],[20, 21, 34, 56, 100]];
console.log(sumofMinimum(arraysnumbers));