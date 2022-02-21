const input = document.getElementById('input');
const output = document.getElementById("output");

let para;  
let btn;   
let outpDiv;

let rand = input.addEventListener("keyup", e => 
{
    if(e.key === "Enter")
    {
        para = document.createElement("li");
        btn = document.createElement("button")
        outpDiv = document.createElement("div");
        outpDiv.setAttribute("id", "mainDiv")
        para.setAttribute("id", "outputString")
        btn.setAttribute("id", "deleteButton")
        para.innerText = String(input.value);
        document.body.appendChild(outpDiv)
        document.getElementById("myBox").appendChild(btn)
        document.getElementById("myBox").appendChild(para);document.getElementById("deleteButton").addEventListener('click', () => 
        {
            const buttonToRemove = document.getElementById("deleteButton");
            const itemToRemove = document.getElementById("outputString");
            itemToRemove.remove()
            buttonToRemove.remove()
        })
    }
})
