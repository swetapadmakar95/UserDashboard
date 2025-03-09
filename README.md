
# User Dashboard Assessment
    This is an Angular application that demonstrates a dynamic user dashboard with the following features:

    - Lazy-Loaded Popup form for adding users
    - Dynamic Table of users (Name, Email, Role)
    - Chart.js Pie Chart to show distribution of user roles
    - RxJS BehaviorSubject for real-time data updates
    - Form Validation for user input

## Overview
    The goal is to build a user dashboard with the ability to add new users via a lazy-loaded modal form and display a dynamic pie chart representing the distribution of user roles. The chart and table both update automatically when a new user is added.

## Features
1. **Lazy Loading**
    - UserFormComponent is dynamically imported only when needed.
    - Chart.js initialization is handled in the chart component.

2. **User Table**
- Displays Name, Email, Role.
- Updates automatically when a user is added or modified.

3. **Add User Modal**
- Template-driven form with basic validation (Name, Email, Role).
- Modal closes on submission, triggering table and chart updates.

4. **Pie Chart**
- Built with Chart.js, showing distribution of roles (Admin, Editor, Viewer, etc.).
- Updates in real time when new users are added.

5. **RxJS State Management**
- BehaviorSubject in UserService manages user data.
- Components subscribe to users$ for live updates.

6. **Filtering (Optional)**
- A simple search input can filter the user table by name, email, or role.

**Tech Stack**
- Angular (14+)
- RxJS for asynchronous state management
- ngx-bootstrap for modal functionality
- Chart.js for pie chart
- ng2-charts (optional) or direct Chart.js usage
- TypeScript for strong typing
- SCSS for styling

**Installation**
**Clone the repository:**

- git clone https://github.com/your-username/user-dashboard.git
- cd user-dashboard

**Install dependencies:**
- npm install
**(Optional) Remove SSR packages if not needed:**
- npm uninstall @angular/platform-server

**Usage:**
**Run the development server**
-ng serve
**Open the app in your browser**
- https://localhost:4200

**Add a new user:**
- Click “Add User” to open the lazy-loaded modal.
- Fill out Name, Email, and Role.
- Click “Save” to add the user to the table and update the pie chart.

**View the pie chart:**
- The pie chart automatically updates to show the distribution of roles.
  
**Search (Optional):**
- If you added a search input, type in a query to filter the table by Name, Email, or Role.
