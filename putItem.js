
console.log('Loading function');

var doc = require('dynamodb-doc');

var AWS = require('aws-sdk');

exports.handler = function(event, context) {
    
   
var params = {
    TableName: "szy-test",
    Item: {
        'uid':{N:'101'},
        'name':{S:"Zhenyuan"},
        'age':{N:'1234'}
    },
    Expected:{
        'uid':{ComparisonOperator:'NE',Value:{N:'101'}}
        
    },
    ReturnValues:"ALL_OLD"
    
}

 
    
    
    
   var dynamo = new AWS.DynamoDB.DocumentClient();
   var dynamodb = new AWS.DynamoDB();
   
    //console.log('Received event:', JSON.stringify(event, null, 2));
  
 
    dynamodb.putItem(params, function(err, data) {
        if (err) {
            console.log(err);
            context.done("error");
        } // an error occurred
        else{
            console.log(data);           // successful response
            console.log(data.Responses)
            context.succeed("done");
        }
    });

};