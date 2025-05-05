// Declarando um array de imagens

let imagens = [
    'src/assets/img (1).jpg',
    'src/assets/img (2).jpg',
    'src/assets/img (3).jpg'
];

// Declarando as váriaveis
let i = 0;
let tempo = 5000;

//Criando a função do slide show

function slideShow(){
    document.getElementById('image').src = imagens[i];
    i++;
    if(i == imagens.length){
        i = 0;
    }
    setTimeout("slideShow()", tempo);
}

slideShow();