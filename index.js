const express = require('express')
const server = express()

server.listen('9999', function () {
    // trim function
    var str = '^&^&^&^Hello %^&^*()World@^&^&@(*(*()@'; {

        str = str.replace(/[^a-zA-Z ]/g, "");
            
    }

    console.log('API connected')
    console.log(str);

})

