💼 CAREER-CODE: A Job Portal System
A comprehensive job portal platform that bridges the gap between job seekers and employers. It provides full CRUD operations for job postings, secure user authentication, and a smooth job application process.

🔗 Live URL: https://job-portal-522ac.web.app

🌟 Project Purpose
This project is built to evaluate technical skills, creativity, and problem-solving ability while delivering an efficient recruitment and job application experience.

💡 Key Features
Responsive Design: Mobile-first, compatible with all screen sizes.

Authentication System: Email/password, Google login, account recovery, and protected routes.

Job Management: Create, update, delete, and view job posts.

Job Search & Filters: Search by title, filter by job type, experience level, and salary range.

Job Applications: Apply with detailed forms and manage application history.

Employer Tools: Review applications, update jobs, and manage listings.

Error Handling: User-friendly messages and loaders.

Session Management: Secure sessions using JWT tokens.

🖌️ Application Pages
Public Pages
Home (/): Lists active jobs with deadlines and details.

Protected Pages
All Jobs (/jobs): Browse, search, filter, and sort job posts.

Job Details (/jobs/details/:id): View job info and apply.

Add Job (/add-jobs): Post a job as an employer.

Apply for a Job (/application/apply/:id): Submit an application.

My Applications (/application/me): View and manage submitted jobs.

My Job Posts (/my-jobs): Manage employer’s job listings.

Review Applications (/my-jobs/:id): Review and update applicant statuses.

Update Job (/jobs/update/:id): Edit posted jobs.

📂 Architecture
Navbar: Logo, navigation, user info, auth controls.

Footer: Company info, links, and socials.

Dynamic Routing: Pages rendered via routes.

🛠️ Technologies Used
Frontend: React.js, Tailwind CSS, DaisyUI

Backend: Node.js, Express.js

Database: MongoDB

Authentication: Firebase Auth, Google Sign-in

Deployment: Firebase (Frontend), [Vercel or others for backend]

Version Control: GitHub

✅ Features Checklist
🔐 Authentication System
Email/password + Google Auth

Password recovery

Protected routes

📄 Job Functionality
Full CRUD

Search & filter (type, level, salary)

Sort by deadline

📝 Application Process
Job-specific application form

View/withdraw applications

🧰 Employer Tools
Post/edit/delete jobs

Review applications (Rejected, Shortlisted, Hired, Scheduled)

🔒 Security
JWT-based auth

API authorization

Input validation and sanitization

📜 Best Practices Followed
🧹 Code Quality
Modular and reusable components

Clean code, proper naming, and comments

DRY principle followed

Consistent naming conventions (camelCase, PascalCase)

🚦 Error Handling
Friendly frontend error messages

Proper backend HTTP error responses

Validation for edge cases

🔐 Security
JWT for secure sessions

Input validation to prevent XSS/SQLi

Auth checks on sensitive routes

🖌️ Responsive Design
Mobile-first layout

Scalable with Tailwind grid system

Web accessibility standards

📂 Project Organization
Clear folder structure

Descriptive commits

Complete README documentation

⚡ Performance Optimization
Lazy loading components

Efficient state management (React Query)

Optimized rendering

🌐 Deployment
No runtime errors on deploy

Live updates with CI/CD

Secured with .env for sensitive config