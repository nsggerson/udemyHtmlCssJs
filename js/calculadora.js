document.querySelector("#Calcular").addEventListener("click", function(){
    
    let a = document.querySelector("#valorA").value;
    let b = document.querySelector("#valorB").value;
    if (a.length > 0 && b.length > 0) {
       alert(parseInt(a) + parseInt(b)); 
    } else {
        alert("Escolha um número valido."); 
    }
});