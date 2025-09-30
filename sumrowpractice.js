function findMin(row){
    let mini=row[0];
    for(let i=1;i<row.length;i++){
        if(row[i]<mini){
            row[i]=mini;
        }
    }
    return mini;
}
function calSumrows(number2d){
    let=sum=0;
    for(let i=0;i<number2d.length;i++){
        sum+=findMin(number2d[i]);
    }
    return sum;
}
let arrays=[[1, 2, 3, 4, 5],[5, 6, 7, 8, 9],[20, 21, 34, 56, 100 ]];
console.log(calSumrows(arrays));