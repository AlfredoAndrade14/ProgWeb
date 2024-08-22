// Questão 1
const dono = {
    proprietario: "Silvio Santos",
    endereco: {
        cep: "hacked, pay to recover",
        logradouro: "hacked, pay to recover",
        complemento: "hacked, pay to recover",
        bairro: "hacked, pay to recover",
        localidade: "hacked, pay to recover",
        uf: "",
        geo: {
            lat: "-23.61919020307765",
            lng: "-46.70793551534256",
        },
    },
};

function getData(cep) {
    return new Promise((resolve, reject) => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na consulta ao VIACEP');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

getData('05650000')
    .then(data => {
        const { bairro, localidade } = data;
        const { lat, lng } = dono.endereco.geo;
        const resultado = `${dono.proprietario} - 05650-000 - ${bairro}, ${localidade} (${lat}, ${lng})`;
        console.log(resultado);
    })
    .catch(error => {
        console.error('Erro ao consultar o VIACEP:', error);
    });

// Questão 2
function entrega(entrega, dataFinal) {
    if (entrega > dataFinal) {
        console.log("Eu odeio o prof. Florovsky!");
    }
    if (dataFinal - entrega >= 3) {
        console.log("Muito bem! O aluno está apto a apresentar até o natal!");
    } else {
        console.log("O trabalho está muito ruim!");
        if (dataFinal + 2 <= 24) {
            console.log("TCC Apresentado!");
        } else {
            console.log("Não deu! Só no próximo ano agora.");
        }
    }
}

entrega(13, 19);
entrega(22, 23);
entrega(21, 22);
entrega(25, 24);

// Questão 3
const colocarTodasLetrasEmMaiusculoEm500ms = (texto) => {
    return new Promise((resolve, reject) => {
        if (typeof texto === 'string') {
            setTimeout(() => {
                resolve(texto.toUpperCase());
            }, 500);
        } else {
            reject('Parâmetro não é do tipo String');
        }
    });
};

const inverteTodasLetras = (texto) => {
    return new Promise((resolve) => {
        if (typeof texto === 'string') {
            const invertido = texto.split('').reverse().join('');
            resolve(invertido);
        } else {
            reject('Parâmetro não é do tipo String');
        }
    });
};

colocarTodasLetrasEmMaiusculoEm500ms("texto teste")
    .then(inverteTodasLetras)
    .then(result => {
        console.log(result); // Saída: OLPMEXE
    })
    .catch(error => {
        console.error(error);
    });

// Questão 4
const assycAwait = async (texto) => {
    try {
      const textoMaiusculo = await colocarTodasLetrasEmMaiusculoEm500ms(texto);
      const textoInvertido = await inverteTodasLetras(textoMaiusculo);
      console.log(textoInvertido); // Saída: OLPMEXE
    } catch (error) {
      console.error(error);
    }
  };
  
assycAwait("outro texto teste");

// Questão 5
const crypto = require('crypto');

// Criptografia de dados
const criptografarMensagem = (texto, chaveSecreta) => {
    const algorithm = 'aes-256-cbc';
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(chaveSecreta), iv);
    let encrypted = cipher.update(texto, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    // Retorna o IV junto com o texto criptografado
    return `${iv.toString('hex')}:${encrypted}`;
    }

// Função para descriptografar dados
const decritografar = (textoCriptografado, chaveSecreta) => {
    const algorithm = 'aes-256-cbc';
    const [ivHex, encrypted] = textoCriptografado.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(chaveSecreta), iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const processarNumeros = (numeros, callbackFunction) => 
  numeros
    .filter(num => num % 2 === 0)
    .map(num => callbackFunction(num.toString()));

// Chave secreta para criptografia
const chaveSecreta = '12345678123456781234567812345678'; // 32 bytes para AES-256

// Exemplo de uso
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = processarNumeros(numeros, num => criptografarMensagem(num, chaveSecreta));
const resultadoDesCript = resultado.map(num => decritografar(num, chaveSecreta))

console.log(resultado);
console.log(resultadoDesCript)