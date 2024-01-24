let output = [];
let seed = 1;

function fizzBuzz() {

    while(seed <= 100) 
    {
        if(seed % 3 === 0 && seed % 5 === 0){
            output.push("fizzBuzzbuzz");
        }else if(seed % 3 === 0) {
            output.push("fizz");
        }else if(seed % 5 === 0) {
            output.push("buzz");
        }else{
            output.push(seed);
        }
        seed++;
        
        console.log(output);
        let para = document.createElement("p");
        let node = document.createTextNode(output);
        para.appendChild(node);

        let element = document.getElementById("title1");
        element.appendChild(para);
    }
    
}

const btn = document.querySelector("button");

btn.addEventListener("click", handleClick);

function handleClick() {
  fizzBuzz();
}