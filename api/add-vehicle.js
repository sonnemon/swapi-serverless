const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const aws = require('aws-sdk');

aws.config.update({ region: 'us-east-1' });

const dynamodb = new aws.DynamoDB.DocumentClient();
const tableName = process.env.VEHICLE_TABLE;

exports.handler = async (event) => {
  try {
    let vehicle = JSON.parse(event.body).Item;
    vehicle.vehicle_id = uuidv4();
    vehicle.timestamp = moment().unix();
    vehicle.expires = moment().add(90, 'days').unix();

    await dynamodb
      .put({
        TableName: tableName,
        Item: vehicle,
      })
      .promise();

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(vehicle),
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
