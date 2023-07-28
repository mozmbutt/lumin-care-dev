
import { NextApiRequest, NextApiResponse } from 'next'


const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const apiKey = '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';
  const shop = 'heatcorestore-3';
  const apiUrl = `https://${shop}.myshopify.com/admin/api/2021-10/orders.json`

  const data = {
    "order": {
      "line_items": [
        {
          "variant_id": 45140368326933,
          "quantity": 1
        }
      ],
      "customer": {
        "first_name": "test",
        "last_name": "test"
      },
      "billing_address": {
        "first_name": "test",
        "last_name": "test",
        "address1": "test",
        "phone": "1321546546",
        "city": "test",
        "province": "",
        "country": "India",
        "zip": "465464"
      },
      "shipping_address": {
        "first_name": "test",
        "last_name": "test",
        "address1": "test",
        "phone": "1321546546",
        "city": "test",
        "province": "",
        "country": "India",
        "zip": "465464"
      },
      "currency": "INR",
      "financial_status": "pending",
      "tags": "phone_verified_with_otp",
      "shipping_lines": [
        {
          "title": "Free Shipping",
          "price": "0.00",
          "code": "FreeShipping",
          "source": "shopify",
          "phone": null,
          "requested_fulfillment_service_id": null,
          "delivery_category": null,
          "carrier_identifier": null,
          "tax_lines": [
            {
              "price": "0.00",
              "rate": 0,
              "title": "HST",
              "price_set": {
                "shop_money": {
                  "amount": "0.00",
                  "currency_code": "INR"
                },
                "presentment_money": {
                  "amount": "0.00",
                  "currency_code": "INR"
                }
              }
            }
          ]
        }
      ]
    }
  }

  fetch(apiUrl, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'X-Shopify-Access-Token': apiKey,
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(result => {
      console.log('result >>', result)
      res.status(200).json(result)
    })
    .catch(error => {
      console.log('error >>', error)
    });

}

export default handler