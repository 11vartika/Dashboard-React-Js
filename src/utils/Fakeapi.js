export const Fakeapi = (count,digit) =>{
    const array =[];
    for(let index=0;index<count.length;index++){
        const element = Math.round(Math.random()*digit);
        array.push(element);
    }
    return array;
};

export const randomValueGenerator =({digit})=>{
    const elm = Math.round(Math.random()*digit);
    return elm;
};