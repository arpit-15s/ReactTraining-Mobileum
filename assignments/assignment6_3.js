
function delay(param) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(), param);
    });
}

const delayedMessage= async ()=>{ 
    console.log('Hello'); 
    await delay(2000); 
    console.log('World'); 
} 

delayedMessage();
