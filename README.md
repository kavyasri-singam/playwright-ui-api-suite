# 🎯 Fullstack UI + API Integration Test Suite using Playwright

 ![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)
![Playwright](https://img.shields.io/npm/v/playwright.svg?logo=playwright)
![Chromium](https://img.shields.io/badge/Chromium-137.0.7151.27-blue?logo=google-chrome)
![Firefox](https://img.shields.io/badge/Firefox-137.0-blue?logo=firefoxbrowser)
![WebKit](https://img.shields.io/badge/WebKit-18.4-blue?logo=safari)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-blue?logo=github)


## 📌 Project Summary

This project demonstrates an end-to-end **Fullstack QA Automation** suite using Playwright. It integrates **UI testing** with **API validation**, simulating a real-world login flow with post-login API checks.

---

## ✅ Features

- 🔐 UI Login flow tested with Chromium, Firefox, and WebKit
- 🧪 API validation using `https://automationexercise.com/api/verifyLogin`
- 🧩 Combined UI + API test in a single flow
- 📊 HTML test report for detailed results
- 🔄 Easily extendable for more UI/API scenarios

---

## 🛠️ Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- Node.js
- HTML Reporting
- GitHub Actions (for CI/CD)

---

## 🚀 How to Run the Tests

### 1. Install Dependencies

npm install

2. Run All Tests (UI + API)
npx playwright test

3. View HTML Report
npx playwright show-report

🔎 Sample Test Included
✅ UI Login Test (Validates "Logged in as" text)

✅ API POST request to /api/verifyLogin with your credentials

✅ Asserts responseCode: 200 and message

📸 Screenshot 
![Test Report](./screenshot/Screenshot%20(53).png)


🙋‍♀️ Author
KavyaSri Singam

📬 Contact
📧 kadambari1102000@gmail.com
