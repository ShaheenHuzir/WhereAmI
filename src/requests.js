
const getIp=(ipAdd,callback)=>{
    
    let req = new XMLHttpRequest();

    req.addEventListener('readystatechange',(e)=>{
        if(e.target.readyState===4&& e.target.status==200)
        { let location=JSON.parse(e.target.responseText); 
            callback(undefined,location); }
        else if(e.target.readyState===4){
                callback(`no man no`,undefined);
        }
    }
)
req.open("GET",`https://ipapi.co/${ipAdd}/json/`);
req.send();
}


export default getIp;