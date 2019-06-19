import display from '../src/view';
import getIp from '../src/requests';
let formSubmit = document.querySelector("#ip-add");
let xyz= document.querySelector("#entry");
   
formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    const ipAdd = e.target.elements.ipAdd.value;
    getIp(ipAdd, (error, data) => {
        
        if (error) {
            throw new Error(error)
        }
        if (data) {
         display(data);   
         console.log(data);
        } 
    });
  
})

