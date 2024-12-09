# Kanban Board with Drag-and-Drop Functionality (README)

This project provides a basic Kanban board implementation with drag-and-drop functionality for managing tasks.

# Setup Instructions

1. Prerequisites: Ensure you have Node.js and npm (or yarn) installed on your system.
2. Clone the Repository: Clone this repository using git clone [https://github.com/ssagarssaud/Kanban-Board.git].
3. Install Dependencies: Navigate to the project directory and run npm install (or yarn install) to install all necessary dependencies.
4. Start the Development Server: Run npm run dev (or yarn dev) to start the development server and access the Kanban board locally.

# Technology Choices and Rationale

1. Framework: Next.js - Leverages React for building a dynamic and performant Kanban board.
2. Drag-and-Drop: @dnd-kit/core and @dnd-kit/sortable - Provide a comprehensive library for creating the 3. drag-and-drop functionality for tasks.
3. Styling: Tailwind CSS - Offers a utility-first approach for efficient styling and customization.

# Known Limitations/Trade-offs

1. Data Persistence: This basic implementation doesn't currently persist data. Tasks won't be saved when the browser is refreshed.
2. Limited Functionality: Currently focuses on drag-and-drop between columns. Features like adding/deleting tasks and editing content are not implemented.
3. No Backend: This is a frontend-only application. For features like user management and real-time updates, a backend server would be needed.
   Future Improvements

# Future Improvements

1. Data Persistence: Implement local storage or a database connection to save and restore board data.
2. Enhanced Functionality: Add features for creating, editing, and deleting tasks within the Kanban board.
3. Backend Integration: Integrate a backend server for user authentication, real-time updates, and additional functionality.
4. Accessibility: Improve accessibility by implementing features like keyboard navigation and screen reader support.
   This README provides a basic overview. Feel free to customize and extend this project to build a more robust Kanban board application.
