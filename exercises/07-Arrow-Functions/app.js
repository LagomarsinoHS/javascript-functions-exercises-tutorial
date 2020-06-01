const rapid = (str) =>{
       let newString = "";

    for (let valor of str) {
        if (valor != "a" && valor != "e" && valor != "i" && valor != "o" && valor != "u") {
            
            newString = newString + valor.toUpperCase();
        }
    }
    return newString;
}
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));
