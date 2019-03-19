# Insights Service

As part of out latest MVP build we need to present a user with some insights about their spending. A list of transactions for a user can be retrieved from `http://localhost:4000/transactions`.

Transactions:

```json
[
  {
    "id": 1,
    "amount": 100,
    "merchant": "Tescos Ltd",
    "category": "food",
    "paymentDate": "2019-01-27T14:24:48.960Z"
  },
  {
    "id": 2,
    "amount": 20,
    "merchant": "TFL London",
    "category": "transport",
    "paymentDate": "2019-02-27T14:24:48.960Z"
  }
]
```

From this list we'll need to expose the following routes on the service, which calculate different insights about a users spending depending on which route is called:

1. `GET /insights/categories`

returns the number, total and average value of all transactions grouped by the transaction category.

```json
{
  "food": {
    "totalNumber": 10,
    "totalValue": 400,
    "averageValue": 40
  }
}
```

2. `GET /insights/cashflow`

returns a daily cashflow of all transactions grouped by day. Ignore days for which there is no data.

```json
{
  "01/01/2019": {
    "totalNumber": 10,
    "totalValue": 400,
    "averageValue": 40
  },
  "02/01/2019": {
    "totalNumber": 10,
    "totalValue": 400,
    "averageValue": 40
  },
}
```

3. `GET /insights/merchants (stretch goal)`

returns the number, total and average value of all transactions grouped by the merchant. We don't have any data sanitation so merchants can have different names e.g.

```text
Tescos Ltd
Tescos London Bridge Ltd
Islington Tescos Metro Ltd
```

Ideally we'd find a way to group these together:

```json
{
  "Tescos Ltd": {
    "totalNumber": 10,
    "totalValue": 400,
    "averageValue": 40
  }
}
```

## Some notes

1. all values are integer. Don't worry about dealing with floating point precisions, the FE can deal with the presentation logic.
2. you can use any npm package you like, but only with good reason!
3. We've provided some boilerplate code, but feel free to rearrange as you want...

## Running the Data layer

```bash
docker build -t test_data_layer ./db
docker run -p 4000:4000 test_data_layer
```

Routes on data layer:

- `GET http://localhost:4000/transactions` returns a list of transactions