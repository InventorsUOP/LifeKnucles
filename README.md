# LifeKnuckles Wildfire Alert App

This project is a **React Native** app designed to provide real-time alerts and notifications for wildfire incidents in the Knuckles mountain region. The app allows users to report, confirm, and track wildfire events, engaging the community and forest officials in swift responses.

## Table of Contents

- [Features](#features)
- [Project Setup](#project-setup)
- [Branching Strategy](#branching-strategy)
- [Naming Conventions](#naming-conventions)
- [Code Quality](#code-quality)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Real-time wildfire alerts and notifications
- Map integration to locate fires
- Role-based actions (report, confirm, accept/decline)
- Notification escalation (app, SMS, and phone call)

---

## Project Setup

Follow these steps to set up the app on your local machine.

### Prerequisites

- **Node.js** (>=20.x.x)
- **Yarn** or **npm**
- **React Native CLI**
- **Android Studio** or **Xcode** (for iOS development)
- **Expo Go App** (for test locally)

### Steps to Clone and Run

1. **Clone the Repository**

   ```bash
   git clone https://github.com/InventorsUOP/LifeKnucles.git
   cd LifeKnules
   ```

2. **Install Dependencies**

   Using Yarn:

   ```bash
   yarn install
   ```

   Or using npm:

   ```bash
   npm install
   ```

3. **Running the App**

   For **Expo go**

   ```
   npm start
   ```

   Scan the QR code using expo go app

   For **iOS**:

   ```bash
   npx react-native run-ios
   ```

   For **Android**:

   ```bash
   npx react-native run-android
   ```

---

## Branching Strategy

Our project follows a **feature-branching strategy** to ensure smooth collaboration and clean code management.

### Key Rules:

1. **Development Branch**:
   - All new features must be branched off from the `develop` branch.
2. **Feature Branch Naming**:

   - Create a feature branch following this pattern:  
     `feature/<developer_name>/<feature_name>`.
   - Example:  
     `feature/john_doe/login-page`

3. **Branching from Master**:
   - **Do not** branch from `master` directly.
   - Branching from `master` is strictly reserved for **release purposes**.
4. **Merging to Master**:

   - Only allowed during release phases, following strict review procedures.

5. **Code Reviews**:
   - All feature branches **must be reviewed** by at least one team member before merging.
   - No direct merges to `develop` or `master` without a review.
6. **Sonar Gate**:
   - All code must pass **SonarQube** scans.
   - Resolve **all SonarQube issues** before merging any branch.

---

## Naming Conventions

Consistency in naming is critical for maintaining readable and understandable code.

### 1. **Page Names**:

- Page names should follow the format:  
  `Login-Page`, `Dashboard-Page`, etc.
- When used in the code, they should be renamed as:  
  `loginPage`, `dashboardPage`.

### 2. **Component Names**:

- Components should follow `PascalCase`.  
  Example:  
  `LoginButton`, `FireAlertModal`.

### 3. **File Names**:

- File names should use the same naming conventions as the components and pages:
  - For a page component: `LoginPage.tsx`
  - For a reusable component: `LoginButton.tsx`

---

## Code Quality

We ensure adherence to coding standards using **SonarQube** to scan for best practices, vulnerabilities, and code smells.

### SonarQube Rules:

- All SonarQube issues must be **resolved** before a branch can be merged.
- Regularly run the SonarQube scanner to maintain code quality:
- Install sonarlint extention for VS Code

---

## Testing [Should be Updated]

### Unit Testing with Jest:

- All new features and bug fixes should include corresponding unit tests.
- Use **Jest** for testing components and logic:

  ```bash
  yarn test
  ```

- Make sure tests pass before submitting a pull request.

### Test Coverage:

- Aim for at least **80% coverage** of unit tests across all files.
- SonarQube will report on test coverage and highlight any untested code.

---

## Contributing

To contribute to this project, follow these steps:

1. **Create a Branch** from `develop` following the [branching strategy](#branching-strategy).
2. Work on your feature.
3. **Ensure** that all SonarQube issues are resolved.
4. Submit a **pull request** for review.
5. Your feature will be reviewed by at least one team member.
6. Once approved, the feature will be merged into `develop`.

### Important:

- **Never branch directly from `master`.**
- **Never merge directly into `master`.** All merges into `master` should only be done during release phases after code review and approval.

---

## License [Should be Updated]

This project is licensed under the [MIT License](./LICENSE).

---

### Issue and Pull Request Templates

To streamline the contribution process, we use standardized issue and pull request templates.

#### Steps to Add:

1. In your project repository, create a folder named `.github`.
2. Inside `.github`, create two files:
   - `ISSUE_TEMPLATE.md`
   - `PULL_REQUEST_TEMPLATE.md`

---

### **Pull Request Template:** [Should be Updated]

Use This Template

### **Issue Template:** [Should be Updated]
