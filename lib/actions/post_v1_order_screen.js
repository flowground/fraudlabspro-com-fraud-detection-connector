/**
 * Auto-generated action file for "FraudLabs Pro Fraud Detection" API.
 *
 * Generated at: 2019-05-07T14:40:47.007Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / fraudlabspro-com-fraud-detection-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/v1/order/screen'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "ip",
    "key",
    "format",
    "last_name",
    "first_name",
    "bill_addr",
    "bill_city",
    "bill_state",
    "bill_country",
    "bill_zip_code",
    "ship_addr",
    "ship_city",
    "ship_state",
    "ship_country",
    "ship_zip_code",
    "email_domain",
    "user_phone",
    "email",
    "email_hash",
    "username_hash",
    "password_hash",
    "bin_no",
    "card_hash",
    "avs_result",
    "cvv_result",
    "user_order_id",
    "user_order_memo",
    "amount",
    "quantity",
    "currency",
    "department",
    "payment_mode",
    "flp_checksum"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "ip": "ip",
    "key": "key",
    "format": "format",
    "last_name": "last_name",
    "first_name": "first_name",
    "bill_addr": "bill_addr",
    "bill_city": "bill_city",
    "bill_state": "bill_state",
    "bill_country": "bill_country",
    "bill_zip_code": "bill_zip_code",
    "ship_addr": "ship_addr",
    "ship_city": "ship_city",
    "ship_state": "ship_state",
    "ship_country": "ship_country",
    "ship_zip_code": "ship_zip_code",
    "email_domain": "email_domain",
    "user_phone": "user_phone",
    "email": "email",
    "email_hash": "email_hash",
    "username_hash": "username_hash",
    "password_hash": "password_hash",
    "bin_no": "bin_no",
    "card_hash": "card_hash",
    "avs_result": "avs_result",
    "cvv_result": "cvv_result",
    "user_order_id": "user_order_id",
    "user_order_memo": "user_order_memo",
    "amount": "amount",
    "quantity": "quantity",
    "currency": "currency",
    "department": "department",
    "payment_mode": "payment_mode",
    "flp_checksum": "flp_checksum"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/v1/order/screen',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}