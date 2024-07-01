let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,]
let box1 = [] 
let box2 = [] 
let b = a.map(function (item , index, ){
    if (item >= 5 ){
        return box1.push(item)
    }else{
        return box2.push(item)
    }
})
console.log(box1);
console.log(box2);
console.log(b);


let d = [ `cola` `colaaa` `colasdw` `colsa` `codfghnedrtghla` `codfgfrela` `coswdewsdfla` `codfddfdddla``codsdfd
la`]
