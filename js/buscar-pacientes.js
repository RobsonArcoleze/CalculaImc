var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener('click', ()=>{
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')

    xhr.send();

    xhr.addEventListener('load', ()=>{

        var erro = document.querySelector('#erro-ajax');
        if(xhr.status == 200){
            erro.classList.add('invisivel')
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            
            pacientes.forEach((paciente) => {
                adicionaPacienteNaTabela(paciente);
            });
        } else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erro.classList.remove('invisivel')
        }
    })
});