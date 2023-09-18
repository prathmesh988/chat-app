const { WebSocketServer } = require('ws');

let client = []
const wss = new WebSocketServer({ host:'192.168.29.146',port: 8080 },function(){
    console.log('server is ready')
});
// The callback method will get registerd to the nodejs enviorment with the event connection
// so that if any clients makes connection( it represent a socket) a socket is nothing but classifying the websocket headers for every client
// to make the connections more organized so that it does not mix with the other clients connection
// hope you get the clarification 
// the socket for every client is reprent as ws object and it is argument of that anonymous callback of connection 
let id =0;
wss.on('connection', function connection(ws) {
    id =id+1;
    ws.myclient=id;
    // console.log(id)
  console.log('client connected')
  client.push(ws)
  ws.on('error', console.error);
  // ws.send('message from the server  ')
  ws.on('message', function message(data) {
    for (let index = 0; index < client.length; index++) {
        if(ws.myclient !== client[index].myclient){

            client[index].send(`id-${ws.myclient} : ${data}`)

        }else{console.log('nothing')}
        
    }
  });
//     console.log('received: %s', data);
//   });

  // ws.send('something');
});





// The callback methods like ws.on are just like the connection wala callback differnece is the event isme error and message event 
// iska matlab ja ye event trigger hoga tabhi woh callback callback queue me jaayenge