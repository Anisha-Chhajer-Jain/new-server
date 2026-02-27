<!-- # Student Management API

## Objective
The objective of this project is to practice building a RESTful API using Node.js and Express.js, focusing specifically on the `GET` method. It demonstrates how to manage and retrieve student data through various endpoints, including filtering by branch, finding toppers, and calculating averages.

## List of Implemented Routes

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/students` | Retrieves a list of all students. |
| `GET` | `/students/:id` | Retrieves details of a specific student by their `ID`. |
| `GET` | `/students/topper` | Returns the student with the highest CGPA. |
| `GET` | `/students/average` | Calculates and returns the average CGPA of all students. |
| `GET` | `/students/count` | Returns the total count of students in the records. |
| `GET` | `/students/branch/:branchname` | Returns a list of students belonging to a specific branch. |

## Sample API URLs

- **Get all students**: `https://node-assignment-1-dhkc.onrender.com/students`
- **Get student by ID**: `https://node-assignment-1-dhkc.onrender.com/students/1`
- **Get student with highest CGPA**: `https://node-assignment-1-dhkc.onrender.com/students/topper`
- **Get average CGPA**: `https://node-assignment-1-dhkc.onrender.com/students/average`
- **Get total student count**: `https://node-assignment-1-dhkc.onrender.com/students/count`
- **Get students in CSE branch**: `https://node-assignment-1-dhkc.onrender.com/students/branch/CSE`

## Steps to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd new-server
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Server**:
   You can start the server using `nodemon` (recommended for development):
   ```bash
   npm test
   ```
   Or use standard `node`:
   ```bash
   node index.js
   ```

4. **Access the API**:
   The server will be running at `http://localhost:3000`.

## Deployed Link
[Click here to view the deployed application](https://new-server-m1wu.onrender.com/) -->




# 📊 State Statistics Management API

Full REST Implementation using Express.js  
In-Memory Data Storage (No Database)

---

## 🚀 Project Overview

This project is a complete REST API built using Node.js and Express.js to manage statistical data of Indian states.

---

## 🎯 Objective

This assignment evaluates:

- Understanding of REST architecture
- Correct usage of HTTP methods
- Dynamic route handling
- Data manipulation using arrays
- Proper HTTP status codes
- Difference between PUT and PATCH
- Resource deletion logic

⚠️ No database used  
⚠️ No authentication  
⚠️ No validation libraries  
⚠️ All operations modify in-memory array dynamically  

---

## 🛠 Tech Stack

- Node.js
- Express.js
- CORS
- JavaScript (ES6)

---

## 📂 Folder Structure

```
state-statistics-api/
│
├── server.js
├── package.json
├── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/state-statistics-api.git
```

### 2️⃣ Navigate to Folder

```bash
cd state-statistics-api
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start Server

```bash
node server.js
```

Server runs at:

```
http://localhost:3000
```

---

## 📌 Base URL

```
http://localhost:3000
```

---

## 📊 Data Structure

Each state follows this structure:

```json
{
  "id": 1,
  "name": "Gujarat",
  "population": 63872399,
  "literacyRate": 78.03,
  "annualBudget": 243965,
  "gdp": 21000000
}
```

---

# 🌐 API Routes Documentation

---

## 🟢 GET Routes

### 1️⃣ GET /states

**Description:**  
Returns all states.

**Status Code:**  
200 OK

---

### 2️⃣ GET /states/:id

**Description:**  
Returns state by ID.

**Example:**

```
GET /states/3
```

**If Found:**  
200 OK

**If Not Found:**  
404 Not Found

```json
{
  "message": "State not found"
}
```

---

### 3️⃣ GET /states/highest-gdp

**Description:**  
Returns state with highest GDP.

**Logic Used:**  
Array.reduce()

**Status:**  
200 OK

---

## 🔵 POST Route

### 4️⃣ POST /states

**Description:**  
Adds a new state.

**Request Body Example:**

```json
{
  "name": "New State",
  "population": 123456,
  "literacyRate": 75.5,
  "annualBudget": 100000,
  "gdp": 5000000
}
```

**Behavior:**

- Generates unique ID automatically
- Pushes new object into array

**Status:**  
201 Created

---

## 🟡 PUT Routes

PUT replaces the entire resource unless route is specific.

### 5️⃣ PUT /states/:id

Replaces entire state (except id).

- Status: 200 OK  
- If not found: 404 Not Found  

---

### 6️⃣ PUT /states/:id/budget

Replaces annualBudget only.

**Example:**

```json
{
  "annualBudget": 260000
}
```

Status: 200 OK

---

### 7️⃣ PUT /states/:id/population

Replaces population only.

Status: 200 OK

---

## 🟠 PATCH Routes

PATCH partially updates resource.

### 8️⃣ PATCH /states/:id/literacy

Updates literacyRate only.

---

### 9️⃣ PATCH /states/:id/gdp

Updates gdp only.

---

### 🔟 PATCH /states/:id

Updates only provided fields.

**Example:**

```json
{
  "annualBudget": 280000
}
```

Only provided fields are updated.

---

## 🔴 DELETE Routes

### 1️⃣1️⃣ DELETE /states/:id

Deletes state by ID.

- If found → 204 No Content  
- If not found → 404 Not Found  

---

### 1️⃣2️⃣ DELETE /states/name/:stateName

Deletes state by name (case-insensitive).

**Example:**

```
DELETE /states/name/gujarat
```

---

### 1️⃣3️⃣ DELETE /states/low-literacy/:percentage

Deletes all states where:

```
literacyRate < percentage
```

**Response:**

```json
{
  "deletedCount": 2
}
```

---

## 📌 HTTP Status Codes Used

| Code | Meaning |
|------|----------|
| 200  | Success |
| 201  | Created |
| 204  | No Content |
| 404  | Not Found |

---

## 🧠 Concepts Demonstrated

- RESTful API Design
- Route Parameters
- Array methods (find, filter, reduce)
- Auto ID generation
- PUT vs PATCH difference
- Resource deletion logic
- Proper status code usage

---

## 🧪 Postman Documentation

🔗 Postman Collection Link:  
(Add your Postman link here)

Includes:

- All 13 routes
- Sample requests
- Sample responses

---

## 🌍 Deployment

🔗 Render Deployment Link:  
(Add your Render link here)

---

## 👩‍💻 Author

Anisha Chhajer

---

## 📌 Important Notes

- Data resets when server restarts (in-memory storage)
- No database used
- No authentication implemented
- No validation libraries used





# E-Commerce Product API

## Objective
The objective of this project is to build a RESTful API using Node.js and Express.js that manages product data for an e-commerce platform.  

This API demonstrates:
- GET, POST, and PUT methods
- Dynamic route parameters
- Filtering logic
- Proper REST principles
- Correct HTTP status codes
- In-memory JSON data handling (No database used)

---

## Tech Stack

- Node.js
- Express.js
- CORS
- Render (Deployment)

---

## List of Implemented Routes

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | /products | Retrieve all products |
| GET | /products/:id | Retrieve a product by ID |
| GET | /products/category/:categoryName | Retrieve products by category |
| POST | /products | Add a new product |
| PUT | /products/:id | Replace entire product (except ID) |
| PUT | /products/:id/stock | Update only stock |
| PUT | /products/:id/price | Update only price |

---

## How to Run

1. npm install
2. node indexx.js

Server runs on:
http://localhost:3000

---

## Deployed Link
[Click here to view the deployed application](https://new-server-2-y5ez.onrender.com/) 
