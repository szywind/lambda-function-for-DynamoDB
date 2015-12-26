console.log('Loading function');

var doc = require('dynamodb-doc');

var AWS = require('aws-sdk');

exports.handler = function(event, context) {
    
    var params = {
        TableName : 'szy-test',
        
        Key:{
            uid: 11
        }
       
    };
    
    
    
   var dynamo = new AWS.DynamoDB.DocumentClient();
   var dynamodb = new AWS.DynamoDB();
   
    //console.log('Received event:', JSON.stringify(event, null, 2));
  
/*  
    dynamodb.batchGetItem(params, function(err, data) {
        if (err) {
            console.log(err);
            context.done("error");
        } // an error occurred
        else    {
            console.log(data);           // successful response
            console.log(data.ItemCount)
            context.succeed("done: " + data.ItemCount);
        }
    });

*/

    dynamo.get(params, function(err, data){
        if(err) console.log(err);
        else{
            console.log(data);
            console.log(data.Item.uid);
            console.log(data.Item.name);
            context.succeed("done:"+data.Item.uid + " " + data.Item.name + " " + data.Item.age);
            
        }
    })
    
    //context.succeed("done");
    
};