/* let btnClick = document.querySelector('#btn');
let text = document.querySelector('#text')
let increaseBtn = document.querySelector('#increase-btn');
let decreaseBtn = document.querySelector('#decrease-btn');


let inputText = document.querySelector('#input-text');
let redBtn = document.querySelector('#red-btn');
let blueBtn = document.querySelector('#blue-btn');


let h1Btn = document.querySelector('#h1-btn');
let h2Btn = document.querySelector('#h2-btn');
let h3Btn = document.querySelector('#h3-btn');

h1Btn.addEventListener('click', ()=> {
    text.style.fontSize = '24px';
    text.style.color = 'red';
});

h2Btn.addEventListener('click', ()=> {
      text.style.fontSize = '22px';  
          text.style.color = 'blue';

});


h3Btn.addEventListener('click', ()=> {
        text.style.fontSize = '20px';
            text.style.color = 'maroon';

});


// ------------------------

redBtn.addEventListener('click', ()=> {
    inputText.style.color = '#ff0000';
})


blueBtn.addEventListener('click', ()=> {
    inputText.style.color = '#0000ff';
})





console.log(btn);

function btnClickHandler(){
    para1.style.fontSize = '30px';
}

let value = 16;




btnClick.addEventListener('click', btnClickHandler);

increaseBtn.addEventListener('click', () => {
    text.style.fontSize = `${value + 2}px`;
    value += 2;
});


decreaseBtn.addEventListener('click', ()=>{
    text.style.fontSize = `${value -2}px`;
    value -=2;
}); */


// let costPrice = document.querySelector('#cost-price')
// let currentPrice = document.querySelector('#current-price');

// let buttonCheck = document.querySelector('#button-check');

// let outputDiv = document.querySelector('#output-div');

// let infoText = document.querySelector('#info');

// console.log(infoText);


// buttonCheck.addEventListener('click', btnClickHandler);

// function btnClickHandler(){
//     let costPriceValue = Number(costPrice.value);
//     let currentPriceValue = Number(currentPrice.value);
//     checkProftiLoss(costPriceValue, currentPriceValue);
// }


// function checkProftiLoss(cost, current){
//     if(cost === current){
//         outputDiv.innerText = `You are neither at profit nor at loss`;
//     }
//     else if(cost > current){
//         outputDiv.innerText = `You are at loss`;
//     }
//     else{
//         outputDiv.innerText = `You are at profit`;
//     }
// }


let textInput = document.querySelector('#text-input');
let translateBtn = document.querySelector('#translate-btn');
let outputText = document.querySelector('#output-text');


translateBtn.addEventListener('click', translateBtnHandler);


function translateBtnHandler(){  
    outputText.innerText =   "User says: " + textInput.value;
}

