
const form = document.querySelector('#formulario');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido!', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelIMC = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelIMC}).`;

    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    
    if (isValid) {
        p.classList.add('resultado-success');
    } else {
        p.classList.add('resultado-error');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p);
}


function criaP(tipo) {
    const p = document.createElement('p');
    return p;
}