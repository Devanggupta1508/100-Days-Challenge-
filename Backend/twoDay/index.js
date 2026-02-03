const figlet = require("figlet");

figlet("devang gupta", function(err,data){


    if(err){
    console.log("Something is wrong");

    }

    console.log(data);
} )