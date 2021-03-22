var fs=require('fs');
fs.appendFile('mynewFile`1.txt', 'hello is is okay',function(err){
    if(err) throw err;
    console.log('saved')
});