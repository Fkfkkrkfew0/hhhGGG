client.on("ready", () => {
let channel =     client.channels.get("490591334575636482")
setInterval(function() {
channel.send(`lol`);
});
});
 
 
 
 
 

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء


