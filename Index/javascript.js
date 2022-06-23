function insert(num){
    var resultado = document.querySelector("#resultado").innerHTML;
    document.querySelector("#resultado").innerHTML = resultado + num
}

function limpar(){
    var resultado = document.querySelector("#resultado").innerHTML;
    document.querySelector("#resultado").innerHTML = ''
}

function back(){
    var resultado = document.querySelector("#resultado").innerHTML;
    document.querySelector("#resultado").innerHTML = resultado.substring(0, resultado.length -1)
}

function resultar(){
    var resultado = document.querySelector("#resultado").innerHTML;
    if(resultado.length > 0){
        document.querySelector("#resultado").innerHTML = eval(resultado)
    }else{
        document.querySelector("#resultado").innerHTML = 'Nada...'
    }

    

}