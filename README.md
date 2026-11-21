LeadFlow – Lead Management System

A full-stack Lead Management System built using React.js, Spring Boot, and MySQL. LeadFlow helps manage potential customers, track lead statuses, and organize sales activities through a clean and responsive dashboard.

🚀 Features

Dashboard

- Overview of total leads.
- New leads count.
- Contacted leads count.
- Qualified leads count.
- Lost leads count.
- Lead statistics.

Lead Management

- Add new leads.
- View all leads.
- Edit existing lead details.
- Delete leads.
- Manage lead information such as name, email, phone, company, source, and status.

Search and Filtering

- Search leads by name.
- Filter leads by status.
- View all leads using the All Statuses option.

Form Validation

- Required field validation.
- Email format validation.
- Error handling for invalid inputs.
- Backend integration for saving and updating leads.

User Interface

- Responsive dashboard layout.
- Sidebar navigation.
- Mobile-friendly design.
- Clean and modern interface.

🛠️ Technology Stack

Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Lucide React

Backend

- Java 17
- Spring Boot
- Spring Data JPA
- Hibernate
- Gradle
- Lombok
- Bean Validation
- REST APIs

Database

- MySQL
- MySQL Workbench

Development Tools

- Visual Studio Code
- IntelliJ IDEA
- Postman
- Git
- GitHub

📁 Project Structure

Lead-Manager/
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/leadmanager/backend/
│   │       │       ├── controller/
│   │       │       ├── service/
│   │       │       ├── repository/
│   │       │       ├── entity/
│   │       │       └── exception/
│   │       │
│   │       └── resources/
│   │           └── application.properties
│   │
│   ├── build.gradle
│   └── gradlew.bat
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── LeadForm.jsx
│   │   │   ├── LeadTable.jsx
│   │   │   └── StatCard.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   └── Leads.jsx
│   │   │
│   │   ├── services/
│   │   │   └── leadService.js
│   │   │
│   │   ├── App.jsx
│   │   └── App.css
│   │
│   └── package.json
│
└── README.md

Note: The structure above represents the main project components. Additional files may exist in the repository.

⚙️ Prerequisites

Make sure the following software is installed:

- Java Development Kit (JDK 17)
- Node.js and npm
- MySQL Server
- MySQL Workbench
- Git

💾 Database Setup

Step 1: Create MySQL Database

Open MySQL Workbench and execute:

CREATE DATABASE lead_manager_db;

Step 2: Configure Database Credentials

Open:

"backend/src/main/resources/application.properties"

Configure the database properties as follows:

spring.application.name=lead-manager

server.port=8080

spring.datasource.url=${DB_URL:jdbc:mysql://localhost:3306/lead_manager_db}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect

Important: Database credentials are not included in this repository. Configure your own MySQL credentials using environment variables.

🔧 Backend Setup

Step 1: Navigate to Backend

cd backend

Step 2: Configure Environment Variables

Open PowerShell and execute:

$env:DB_URL="jdbc:mysql://localhost:3306/lead_manager_db"
$env:DB_USERNAME="your_mysql_username"
$env:DB_PASSWORD="your_mysql_password"

Replace the placeholder values with your local MySQL credentials.

Step 3: Run Spring Boot Application

.\gradlew.bat bootRun

Backend server will start at:

"http://localhost:8080"

💻 Frontend Setup

Step 1: Open a New Terminal

Navigate to the frontend directory:

cd frontend

Step 2: Install Dependencies

npm install

Step 3: Start Development Server

npm run dev

Frontend application will be available at:

"http://localhost:5173"

🔄 Application Workflow

1. The user opens the LeadFlow dashboard.
2. The dashboard displays lead statistics.
3. The user navigates to All Leads.
4. New leads can be added using the Add New Lead form.
5. Existing leads can be edited or deleted.
6. Leads can be searched by name.
7. Leads can be filtered according to their status.
8. The frontend communicates with the Spring Boot backend through REST APIs.
9. Lead information is stored and managed in the MySQL database.

📊 Lead Status

The application supports the following lead statuses:

Status| Description
NEW| Newly created lead
CONTACTED| Lead has been contacted
QUALIFIED| Potential customer is qualified
LOST| Lead is no longer active

📌 Lead Sources

Leads can be categorized according to their source:

- Website
- Referral
- LinkedIn
- Social Media
- Cold Call
- Other

🧪 Testing

The following functionalities have been tested:

- Adding a new lead.
- Editing existing lead details.
- Deleting leads.
- Searching leads by name.
- Filtering leads by status.
- Required field validation.
- Invalid email validation.
- Backend API integration.
- Database connectivity.

🔐 Security and Configuration

- Database credentials are configured through environment variables.
- Actual database passwords are not committed to GitHub.
- Developers must configure their own local database credentials before running the backend.

🔮 Future Improvements

- User authentication and authorization.
- Role-based access control.
- Lead assignment to sales representatives.
- Follow-up reminders.
- Lead activity history.
- Advanced analytics and reporting.
- Pagination and sorting.
- Deployment to cloud platforms.

👩‍💻 Author

Kashish Kashyap

BSc Information Technology | Full Stack Java Developer

---

⭐ If you find this project useful, consider giving it a star!