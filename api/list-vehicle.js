const aws = require('aws-sdk');
aws.config.update({ region: 'us-east-1' });

const dynamodb = new aws.DynamoDB.DocumentClient();
const tableName = process.env.VEHICLE_TABLE;

exports.handler = async (event) => {
  try {
    const data = await dynamodb
      .scan({
        TableName: tableName,
      })
      .promise();
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        data: data.Items,
        count: data.Count,
      }),
    };
  } catch (err) {
    return {
      statusCode: err.statusCode ? err.statusCode : 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        error: err.name ? err.name : 'Exception',
        message: err.message ? err.message : 'Unknown error',
      }),
    };
  }
};
