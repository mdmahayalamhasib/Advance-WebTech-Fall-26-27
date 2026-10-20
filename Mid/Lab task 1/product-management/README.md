# NestJS Product and Employee Management Backend

This is a backend lab task built with **NestJS**, **TypeORM**, and **PostgreSQL** featuring full CRUD operations for Products and Employees.

## 📌 Features
- **Product Management**: Create, Read, Update, and Delete products (`/products`).
- **Employee Management**: Create, Read, Update, and Delete employees (`/employees`).
- **Database**: PostgreSQL with TypeORM and custom `SnakeNamingStrategy`.
- **Validation**: DTO validation using `class-validator`.

---

## 🚀 Getting Started

### 1. Clone the Repository & Install Dependencies
```bash
git clone <repository-url>
cd product-management
npm install

## Configure Environment Variables
Create a .env file in the root directory based on .env.example and configure your database credentials:
PORT=5001
DB_CLIENT=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_DATABASE=product_management

## Run the Application
# Development mode
npm run start:dev

## 📸 Postman Testing & Screenshots
All Postman API test screenshots are stored in the screenshots/ directory:
01-create.png - Create a product (POST)   
02-get-all.png - Get all products (GET)   
03-get-by-id.png - Get product by ID (GET)   
04-update.png - Update a product (PATCH)   
05-confirm-update.png - Confirm updated product (GET)   
06-delete.png - Delete a product (DELETE)   
07-confirmdelete.png - Confirm deletion (GET)

## 👨‍💻 Author

Name: Md Mahay Alam Hasib
ID: 23-53246-3