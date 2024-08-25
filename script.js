
const previus = document.getElementById('pre');
const next = document.getElementById('next');

// get name by id userName

let userNamevalue = document.getElementById('userName');
let reg = document.getElementById('reg');   

let userNames = ['Steve', 'John', 'Robert', 'Ben', 'Sara'];
let userReg =['Developer', 'Designer', 'Manager', 'Tester', 'Teacher'];


let currentIndex = 0;

previus.addEventListener('click', () => {
    

    if(currentIndex <= 0){
        currentIndex = userNames.length - 1;    
    }
    

    userNamevalue.innerText = userNames[currentIndex];
    reg.innerText= userReg[currentIndex];


    currentIndex--;

    
});


next.addEventListener('click', () => {
        
    
        if(currentIndex >= userNames.length - 1){
            currentIndex = 0;    
        }
        
    
        userNamevalue.innerText = userNames[currentIndex];
        reg.innerText= userReg[currentIndex];

        currentIndex++;
});