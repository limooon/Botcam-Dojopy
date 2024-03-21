


const operaciones =(num1,num2,operacion)=>{

        
    if(operacion == '+'){
        console.log(` la suma es: ${num1 + num2}`);
    }else if(operacion == '-'){
        console.log(` la suma es: ${num1 - num2}`); 
    }
    else if(operacion == '*'){
        console.log(` la suma es: ${num1 * num2}`);
    }
    else if(operacion == '/'){
        console.log(` la suma es: ${num1 / num2}`);
    }
    else{
        console.error('Invalid');
    }
}
operaciones(3,45,'*');