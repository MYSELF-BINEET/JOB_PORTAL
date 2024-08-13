# Job Portal

A job portal web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This platform allows users to search and apply for jobs, and employers to post job openings.

## Features

- **User Authentication:**
  - Secure user registration and login using JWT.
  - Role-based access control for job seekers and employers.

- **Job Seeker Features:**
  - Browse and search for jobs by title, location, company, and more.
  - View job details and company profiles.
  - Apply for jobs with an uploaded resume.
  - Save favorite job postings.

- **Employer Features:**
  - Post new job openings with detailed descriptions.
  - Manage job listings (edit, delete).
  - View applications received for job postings.
  - Search and filter applicants.

- **Admin Features:**
  - Manage users (approve, block).
  - Monitor job postings and applications.
  - Generate reports on job postings and user activities.

## Technologies Used

- **Frontend:**
  - React.js with Hooks and Context API for state management.
  - React Router for navigation.
  - Axios for HTTP requests.
  - Material-UI for UI components.

- **Backend:**
  - Node.js with Express.js for server-side logic.
  - MongoDB with Mongoose for database management.
  - JWT for authentication and authorization.
  - Multer for file uploads (resumes, job images).

- **DevOps:**
  - Docker for containerization.
  - Nginx as a reverse proxy.
  - CI/CD pipelines using GitHub Actions.

## Installation

### Prerequisites

- Node.js & npm
- MongoDB (Local or MongoDB Atlas)
- Docker (optional)

### Clone the Repository

```bash
git clone https://github.com/yourusername/job-portal.git
cd job-portal
