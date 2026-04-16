const button = document.querySelector('.js-button');
button.addEventListener('click' , () => {
    const value = document.querySelector('.input-text').value;

    if(value == ""){
        alert("No task entered!");
        return; //to stop execution
    }
    //console.log(value);

    generateHTML(value); //generates the html for every task
    document.querySelector('.input-text').value = null;
});

document.querySelector('.input-text').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const value = document.querySelector('.input-text').value;
        //console.log(value);
        if(value == ""){
            alert("No task entered!");
            return; //to stop execution
        }

        generateHTML(value); //generates the html for every task
        document.querySelector('.input-text').value = null;
    }
});

function generateHTML(value){
    let htmlText = `
        <div class="output-container">
            <div class="generated-text">${value}</div>
            <button class="generated-button">&#x274c;</button>
        </div>
    `;

    document.querySelector('.task-js').innerHTML += htmlText;


    const allDeleteButtons = document.querySelectorAll('.generated-button');
    allDeleteButtons.forEach(button => {
        button.onclick = function () {
            //we now have to remove the parent output container
            this.parentElement.remove();
        }
    });


}


