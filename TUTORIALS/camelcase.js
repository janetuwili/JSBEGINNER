function toCamelcase(str){
    return str.split('-').map((word,index)=>{
        if(index%2===0){
            return word;
        }
        return word.charAt(0).toUpperCase()+word.slice(1);
    }).join('');
}
console.log(toCamelcase('the-stealth-warrior'));