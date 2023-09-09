# **Express TypeScript API with vite-ui**

This is a simple Express TypeScript API with endpoints for performing actions on data.

## **Getting Started**

1. Clone this repository.
2. **Client**: Navigate to the **`client`** folder for the React client application.

   ```bash
   cd client
   ```

   Install client dependencies using **`npm install`**.

   ```bash
   npm install
   ```

3. **Server**: Navigate back to the root folder for the Express TypeScript API server.

   ```bash
   cd .
   ```

   Install server dependencies using **`npm install`**.

   ```bash
   npm install
   ```

4. **Start the Server**: Start the server using the following command:

   ```bash
   npm start
   ```

5. **Start the Client**: Open a new terminal window, navigate back to the **`client`** folder, and start the React client:

   ```bash
   cd client
   npm start
   ```

6. Testing API: You can now test the API via **`postman`** or **`curl`**.

## **Oiber Endpoint**

### **POST `http://localhost:3000/oiber`**

Content-Type: application/json

```json
{
  "url": "http://example.com",
  "data": "your_data_here"
}
```

### **GET `http://localhost:3000/oiber?url={your_url}`**

Use this endpoint to retrieve data from the Oiber service based on the provided URL.

**Request:**

```bash
GET http://localhost:3000/oiber?url=http://example.com
```

## **Monic Endpoint**

### **POST `http://localhost:3000/monic`**

Content-Type: application/json

```json
{
  "url": "http://example.com",
  "data": "your_data_here"
}
```

### **GET `http://localhost:3000/monic?url={your_url}`**

Use this endpoint to retrieve data from the Monic service based on the provided URL.
