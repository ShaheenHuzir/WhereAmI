
//function to clear html blocks
const clearBlock = (element) => {
    document.querySelector(element).innerHTML =" ";
}

//selecting each div
let citi = document.querySelector("#cityCheck");
let countri = document.querySelector("#countryCheck");
let currenci = document.querySelector("#currencyCheck");
let zip = document.querySelector("#zipCheck");
let timeZone = document.querySelector("#timeZoneCheck");

//callback function to display the data
let display = (data) => {
    let info = data;//data returned from http request is saved in info
    console.log(data);
    //function to write on DOM
    let displayData = (selectedCheckbox, selectedKey, div,dispName) => {
        if (!info.error) {  // if the ip is not invalid proceed 

           //initial display
            if (selectedCheckbox.checked) {
                let p = document.createElement("p");
                clearBlock(div);
                p.textContent = `${dispName} ${info[selectedKey]}`;
                document.querySelector(div).appendChild(p);
            }
           //on toggle checkbox
            selectedCheckbox.addEventListener('change', (e) => {
                if (!e.target.checked) {
                    clearBlock(div);
                }
                else {
                    let p = document.createElement("p");
                    clearBlock(div);
                    p.textContent = `${dispName} ${info[selectedKey]}`;
                    document.querySelector(div).appendChild(p);
                }
            })

        }
        else{
            console.log('error')
        }
       
    }
   
    displayData(citi, 'city', '#locale','City');
    displayData(countri, 'country_name', '#country','Country');
    displayData(currenci, 'currency', '#currency','Currency');
    displayData(zip, 'postal', '#zip','Zip Code');
    displayData(timeZone, 'utc_offset', '#time-zone','UTC');
}

export default display;
