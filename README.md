# ![LOGO](logo.png) FraudLabs Pro Fraud Detection **flow**ground Connector

## Description

A generated **flow**ground connector for the FraudLabs Pro Fraud Detection API (version 1.1).

Generated from: https://api.apis.guru/v2/specs/fraudlabspro.com/fraud-detection/1.1/openapi.json<br/>
Generated at: 2019-05-07T17:40:47+03:00

## API Description

Online payment fraud detection service. It helps merchants to minimize chargebacks and therefore maximize the revenue. It can be used to detect fraud for various kinds of payment method, such as credit card, paypal, cod and so on. Please visit https://www.fraudlabspro.com to learn more.

## Authorization

This API does not require authorization.

## Actions

### Feedback the status of an order transaction.

#### Input Parameters
* `id` - _required_
* `key` - _required_
* `format` - _optional_
    Possible values: json, xml.
* `action` - _required_
    Possible values: APPROVE, REJECT, REJECT_BLACKLIST.
* `notes` - _optional_

### Screen order for payment fraud.

#### Input Parameters
* `ip` - _required_
* `key` - _required_
* `format` - _optional_
    Possible values: json, xml.
* `last_name` - _optional_
* `first_name` - _optional_
* `bill_addr` - _optional_
* `bill_city` - _optional_
* `bill_state` - _optional_
* `bill_country` - _optional_
* `bill_zip_code` - _optional_
* `ship_addr` - _optional_
* `ship_city` - _optional_
* `ship_state` - _optional_
* `ship_country` - _optional_
* `ship_zip_code` - _optional_
* `email_domain` - _optional_
* `user_phone` - _optional_
* `email` - _optional_
* `email_hash` - _optional_
* `username_hash` - _optional_
* `password_hash` - _optional_
* `bin_no` - _optional_
* `card_hash` - _optional_
* `avs_result` - _optional_
* `cvv_result` - _optional_
* `user_order_id` - _optional_
* `user_order_memo` - _optional_
* `amount` - _optional_
* `quantity` - _optional_
* `currency` - _optional_
* `department` - _optional_
* `payment_mode` - _optional_
* `flp_checksum` - _optional_

## License

**flow**ground :- Telekom iPaaS / fraudlabspro-com-fraud-detection-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
