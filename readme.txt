This is a chat application which is a good project to experience how the basic chat application works the chat application is very basic it when we connect from a client to server using websocket prortocol in application layer 

when we send a message from a client it get recived to another client 
thats a basic thing how chat application 

why did i choose websocket protocol because a traditional http 1.1 request works like that
request and then response 
in http 1.1 it is connected to the server constantly until client or server both drop out's
but the websocket protocol works  like that the differnce is that its a two a communication
a server can send message without client even requesting it 
that's the fundamental thing why did i choose the websocket protocol 

both http 1.1 and weboscket protocol are built top on the TCP 
so both have ack messages when a client send something to server or server said something to client 
