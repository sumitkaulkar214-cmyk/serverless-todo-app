# Serverless To-Do App

A simple Serverless To-Do Application built using AWS services.

## AWS Services Used

- AWS Lambda
- API Gateway
- DynamoDB
- Amazon S3
- IAM

---

# Project Architecture

![Architecture](./images/images%20architecture.png.jpg)

---

# Features

- Add Tasks
- View Tasks
- Serverless Backend
- Static Website Hosting
- Cloud Based Database

---

# Project Structure

```bash
serverless-todo-app/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
```

---

# Frontend

## Home Page

![Home Page](./images/images%20homepage.png.jpg)

---

# API Testing

![API Gateway](./images/images%20api.png.jpg)

---

# DynamoDB Table

![DynamoDB](./images/QV6YkoqkCXqKhkjb78X-J2-fIsY9uKRbz4ImmqEPSL9Zi-KACM8bmxnbi4YghZFnof_3oqSzUAYSeWDnc28ro7EwmgTOF95m2z1daN3t0BCzjvAalGHGW3l5lONUpggR1SkbgXjYBk2sKgg_YKbagOQZdQED82qLR_b13pV4shDVO6BLIUUfGjhDRKeGPrBg.jpg)

---

# Lambda Function

![Lambda](./images/P-g6pqJ2uH13xnSnN-w83XLcdtvoAOJBRaSCyJQUQk0zvY-xpYagsi9zYCx_Vsr4FtGqH95ZHxKVbw4NU86cy7SO3_3aclofSKBc6EN1lKOyyP60MSIk-EVGXfa4wKm6oWFquFWDSYSyEwtMe2pmk_5NhPcvDQrZtwNgZke8_WafGtLqm9AuRr0-P2ter97t.jpg)

---

# S3 Hosting

![S3 Hosting](./images/images%20s3.png.jpg)

---

# Deployment Steps

## 1. Create DynamoDB Table

Create table:

- Table Name: TodoTable
- Partition Key: taskId

---

## 2. Create Lambda Function

Runtime:

```python
Python 3.12
```

---

## 3. Create API Gateway

Methods:

- GET
- POST

---

## 4. Deploy Frontend to S3

Enable:

- Static Website Hosting

---

# Run Project

Open:

```bash
index.html
```

OR deploy to S3.

---

# Author

Sumit Kaulkar