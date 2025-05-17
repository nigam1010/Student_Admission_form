# Admission-Form API

A lightweight REST API for collecting and managing student admission forms, built with **Node .js**, **Express 5**, and **MongoDB** (via Mongoose).

## ✨ Features

- **POST /api/students** — register a single student
- **GET /api/students** — list all students
- **POST /api/students/bulk** — upload a CSV and create many students at once
- Duplicate-check on `email` & `phone`
- Simple `.env` config (Mongo URI, port, etc.)
- CSV → JSON streaming with `csv-parser`
- XLSX export endpoint (download the whole collection)

## 🏗️ Project structure

backend/

├── controllers/        # Route handlers (studentController.js)

├── models/             # Mongoose schema (student.js)

├── config/db.js        # DB connection helper

├── server.js           # Entry point

└── .env.example        # Sample environment variables

```
bash
CopyEdit
## 🚀 Quick start

1. **Clone & install**
   ```bash
   git clone https://github.com/<you>/admission-form.git
   cd admission-form/backend
   npm install            # installs deps from requirements.txt
   cp .env.example .env   # then add your Mongo URI

```

1. **Run dev server**
    
    ```bash
    bash
    CopyEdit
    npm run dev            # nodemon reloads on save
    # or
    npm start              # plain node
    
    ```
    
    The API defaults to [**http://localhost:5000**](http://localhost:5000/).
    
2. **Hit the endpoints**
    
    
    | Method | Route | Body / Params | Purpose |
    | --- | --- | --- | --- |
    | POST | `/api/students` | JSON student object | Add one student |
    | GET | `/api/students` | – | List students |
    | POST | `/api/students/bulk` | `multipart/form-data`, field `file` (CSV) | Bulk import |
    | GET | `/api/students/export` | – | Download XLSX |

## 🧪 Testing the API

```bash
bash
CopyEdit
curl -X POST http://localhost:5000/api/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com","phone":"9999999999"}'

```

## 🛠️ Built With

- [Express](https://expressjs.com/) 5
- [Mongoose](https://mongoosejs.com/)
- [csv-parser](https://www.npmjs.com/package/csv-parser)
- [xlsx](https://www.npmjs.com/package/xlsx)
- [dotenv](https://github.com/motdotla/dotenv)
- [nodemon](https://nodemon.io/) (dev only)

## 📄 License

This project is licensed under the ISC License – see the [LICENSE](https://www.notion.so/LICENSE) file for details.

```
yaml
CopyEdit
---

### **requirements.txt**

```

body-parser

cors

csv-parser

dotenv

express

file-saver

mongod

mongoose

xlsx

nodemon ; dev

> Note: GitHub will treat this like a Python requirements file, but it’s perfectly valid to keep a plain-text dependency list here for quick npm install $(cat requirements.txt) or reference. If you prefer the conventional Node way, you can omit this file and rely solely on package.json.
>

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
