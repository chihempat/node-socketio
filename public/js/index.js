let socket = io();

socket.on("connect ", () => {
    console.log("Connected to server ")
});

socket.on('createMessage', (message) => {
    console.log("message", message)
});

socket.on("disconnect ", () => {
    console.log("Disconnected from server ");
});

socket.on('newMessage', (message) => {
    console.log("newMessage", message)
});