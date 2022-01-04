const cook =  (clientId, orders)=>{
    return new Promise((resolve, reject) => {
        const serve={
            clientId,
            items:[]
        };
        console.log(`cook received order from client ${clientId} for ${orders}`);
        let i=0;
        const iid= setInterval(()=>{
            if(orders.length===0){
                clearInterval(iid);
                reject(new Error(`Cook Rejects order: No order specified by ${clientId}`)); //return error
            }
    
            let order= orders[i];
            console.log(`prepared ${order} for ${clientId}`);
            serve.items.push(order);
            i++;
    
            if(i===orders.length){
                //all orders are now ready
                clearInterval(iid);
                resolve(serve); //null indicates no error
            }
    
        },2000);
    });
}

const waiter = (clientId, orders)=>{
    return new Promise((resolve, reject) => {
    console.log(`waiter received order from client ${clientId} for : ${orders.join(', ')}`);

    if(orders.length===0){
        reject(new Error(`Cook Rejects order: No order specified by ${clientId}`));
    }
    else cook(clientId, orders)
                .then((serve) => {
                    //order received from the cook
                    console.log(`waiter serving for  ${serve.clientId} : ${serve.items}...`);
                    //cook will serve order after 500ms of receiving
                    resolve(serve);
                })
                .catch((error) => {
                    console.error(error);
                });
    })
    .catch((error) => {
        console.error(error.message);
    });
}

waiter('Vivek', ['chicken soup','chicken tikka', 'butter chiken', 'roti']);
waiter('shivanshi',[]);
waiter('Sanjay', ['sandwitch','salad']);
