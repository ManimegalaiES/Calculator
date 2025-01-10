var operator="";
var FirstNumber="";
var SecondNumber="";

const body = document.querySelector('body');

const image = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg','image7.jpg','image8.jpg'];
function changeBackgroundImage() {
    const imageIndex = Math.floor(Math.random() * image.length);
    body.style.backgroundImage = `url(${image[imageIndex]})`;
}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', changeBackgroundImage);
});


function append(number){
    if(operator===""){
        FirstNumber+=number;
        document.getElementById('result').value=FirstNumber;
    }else{
        SecondNumber+=number;
        document.getElementById('result').value=FirstNumber+" "+operator+" "+SecondNumber;
    }
}

function setOperator(op){
    operator=op;
    document.getElementById('result').value=FirstNumber+" "+operator;
}

function ShowResult(){
    let res=0;
    switch(operator){
        case '+':
            res=parseInt(FirstNumber)+parseInt(SecondNumber);
            break;
        case '-':
            res=parseInt(FirstNumber)-parseInt(SecondNumber);
            break;
        case '*':
            res=parseInt(FirstNumber)*parseInt(SecondNumber);
            break;
        case '/':
            res=parseInt(FirstNumber)/parseInt(SecondNumber);
            break;
    }
    document.getElementById('result').value="The answer is: " +res;
   
}

function reset(){
    FirstNumber="";
    SecondNumber="";
    document.getElementById('result').value="";
}