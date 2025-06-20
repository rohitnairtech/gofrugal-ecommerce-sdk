# 📦 gofrugal-ecommerce-sdk

A lightweight and fully typed TypeScript SDK for interacting with the [GoFrugal eCommerce API](https://help.connect.gofrugal.com/eCommerceAPI/HQ-APIs.html). Supports all major endpoints including Items, Sales Orders, Customers, Categories, Item Master, and more.

Built using ⚡️[Bun](https://bun.sh), optimized for performance and DX.

---

## 🚀 Features

- ✅ Written in **TypeScript**
- ✅ Works seamlessly with **Bun**, **Node**, or **Edge runtimes**
- ✅ Full support for all 9 essential APIs:
  - Items
  - Sales Orders
  - Customers
  - Categories
  - Category Values
  - Category Details
  - Item Master
  - EAN Code
  - Item Stock by Batch Price
- ✅ Built-in types & auto-complete
- ✅ Extensible & clean structure

---

## 📦 Installation

```bash
bun add gofrugal-ecommerce-sdk
# or
npm install gofrugal-ecommerce-sdk
```
---

## 🔧 Quick Start

```ts
import { GoFrugalSDK } from 'gofrugal-ecommerce-sdk';

const sdk = new GoFrugalSDK({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://connect.gofrugal.com/eCommerceAPI'
});
```

---

## 📘 Usage Examples

### 📦 1. Get All Items

```ts
const items = await sdk.getItems();
console.log(items);
```

### 🛒 2. Create a Sales Order

```ts
const result = await sdk.createSalesOrder({
  onlineReferenceNo: 'ORDER123',
  createdAt: new Date().toISOString(),
  status: 'Placed',
  customerName: 'Rohit Nair',
  customerEmail: 'rohitnairtech@gmail.com',
  customerMobile: '9999999999',
  orderItems: [
    { rowNo: 1, itemId: 'ITEM001', quantity: 2, rate: 150 }
  ]
});
console.log(result);

```
---

## 🌍 Multi-Runtime Support

This SDK works across different JavaScript runtimes with optimized builds:

### 📗 Node.js
```js
// CommonJS
const { GoFrugalSDK } = require('gofrugal-ecommerce-sdk');

// ES Modules
import { GoFrugalSDK } from 'gofrugal-ecommerce-sdk';

const sdk = new GoFrugalSDK({
  apiKey: process.env.GOFRUGAL_API_KEY,
  baseUrl: 'https://connect.gofrugal.com/eCommerceAPI'
});
```

### ⚡ Bun
```js
import { GoFrugalSDK } from 'gofrugal-ecommerce-sdk';

const sdk = new GoFrugalSDK({
  apiKey: process.env.GOFRUGAL_API_KEY,
  baseUrl: 'https://connect.gofrugal.com/eCommerceAPI'
});

// Bun automatically uses the optimized build
const products = await sdk.getItems();
```

### 🦕 Deno
```js
import { GoFrugalSDK } from 'npm:gofrugal-ecommerce-sdk';

const sdk = new GoFrugalSDK({
  apiKey: Deno.env.get('GOFRUGAL_API_KEY'),
  baseUrl: 'https://connect.gofrugal.com/eCommerceAPI'
});
```

### 🌐 Web/Browser
```html
<script type="module">
  import { GoFrugalSDK } from 'https://unpkg.com/gofrugal-ecommerce-sdk@latest/dist/browser/index.js';
  
  const sdk = new GoFrugalSDK({
    apiKey: 'your-api-key', // See security warning below
    baseUrl: 'https://connect.gofrugal.com/eCommerceAPI'
  });
</script>
```

> ⚠️ **Security Warning for Web Usage**: 
> 
> **DO NOT use this SDK directly in client-side web applications!** Your API key will be exposed to users and can be misused. Instead:
> 
> - Use it in your backend/server-side code
> - Create a proxy API that handles GoFrugal requests
> - Use environment variables to store sensitive keys
> - Consider implementing proper authentication for your web app

---

## 📚 API Reference

| Method                                | Description                              |
|---------------------------------------|------------------------------------------|
| `getItems()`                          | Fetch all items                          |
| `createSalesOrder(order)`            | Create a new sales order                 |
| `getSalesOrders()`                   | Fetch all sales orders                   |
| `getSalesOrderById(id)`              | Get a specific sales order               |
| `getCustomers()`                     | List all customers                       |
| `getCustomerById(id)`                | Get customer details                     |
| `getCategories()`                    | Fetch all item categories                |
| `getCategoryValues(categoryId)`      | Fetch values for a specific category     |
| `getCategoryDetails(id)`             | Get detailed category information        |
| `getItemMaster()`                    | Retrieve full item master data           |
| `getItemByEan(ean)`                  | Lookup item by EAN barcode               |
| `getItemStockByBatchPrice(itemId)`   | Get stock and pricing for a specific item|


---

## 🤝 Contributing

We welcome contributions to make this SDK better!

### 🧭 How to Contribute

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request 🙌

### 📌 Guidelines

- Write clean, consistent TypeScript code
- Add or update unit tests for any new functionality
- Document your changes clearly in the README or inline JSDoc if needed
- Follow the existing naming conventions and file structure

### 📂 Where to Start?

Check out the list of [open issues](https://github.com/rohitnairtech/gofrugal-ecommerce-sdk/issues) for ideas to work on.

---

Thank you for helping make this SDK better! 🙏
