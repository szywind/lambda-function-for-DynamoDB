
console.log('Loading function');

var doc = require('dynamodb-doc');

var AWS = require('aws-sdk');

exports.handler = function(event, context) {
    
var params = {
    "RequestItems": {
        "szy-test": {
            "Keys": [
                {"uid": {"N":"0"}},
                {"uid": {"N":"200"}},
                {"uid": {"N":"110"}}
            ]
        }
    }
}
    
    
    
   var dynamo = new AWS.DynamoDB.DocumentClient();
   var dynamodb = new AWS.DynamoDB();
   
    //console.log('Received event:', JSON.stringify(event, null, 2));
  
 
    dynamodb.batchGetItem(params, function(err, data) {
        if (err) {
            console.log(err);
            context.done("error");
        } // an error occurred
        else{
            console.log(data);           // successful response
            console.log(data.Responses["szy-test"])
            context.succeed("done");
        }
    });

};