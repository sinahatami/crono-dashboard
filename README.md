# Crono Dashboard - Frontend Developer Assignment

[**Live Preview**](https://sinahatami.github.io/crono-dashboard/)

This project is a high-fidelity, interactive replica of a dashboard UI, built as a take-home assignment for a frontend developer position. The implementation was completed over 2-3 working days in early October 2025.

## Features

- A pixel-perfect, responsive replica of the provided design.
- All static components from the design are fully implemented with a high degree of visual accuracy.
- **Interactive Signals Widget:**
  - Fetches mock data from a `signals.json` file.
  - Clicking the "Action" button reveals a tooltip with "Complete" and "Delete" options.
  - Selecting an action correctly decreases the unread signals counter in real-time.
- **Interactive Sidebar:** The sidebar can be collapsed and expanded.
- **Responsive Design:** The layout gracefully adapts to smaller screen sizes.

## Tech Stack

- **Framework:** React
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS for utility-first styling.
- **Icons:** React Icons
- **Deployment:** GitHub Pages

## How to Run Locally

1.  Clone the repository:
    ```bash
    git clone [https://github.com/sinahatami/crono-dashboard.git](https://github.com/sinahatami/crono-dashboard.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd crono-dashboard
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
5.  Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.

## Deployment

This project has been configured for easy deployment to GitHub Pages. The live preview link at the top of this README is generated through this process.

To re-deploy, simply run the following command:

```bash
npm run deploy
```
