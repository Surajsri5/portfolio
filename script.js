const textArray= ["Web Developer", "Digital Marketing", "SEO"]; 
const typingSpeed=100;
const typingElement=document.getElementById("typing-text");
let textIndex=0;
letcharindex=0;
function typeText(){
    if(charIndex<textArray[textIndex].length){
        typingElement.innerHTML+=textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText,typingSpeed);
    }else{
        setTimeout(removeText,1000);// remove text is blocking function
    }
}
function removeText(){
    if(typingElement.innerHTML.length>0){
        typingElement.innerHTML.typingElement.innerHTML.slice(0,-1);
        setTimeout(removeText,500);
    }else{
        textIndex=(textIndex+1)%textArray.length;
        charIndex=0;
        setTimeout(typeText,500);

    }
    }
    typeText();