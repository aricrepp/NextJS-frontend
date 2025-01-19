## Getting Started

### First, install all dependancies:

```bash
npm install
```

### Then, setup a .env.local file in the root of your project

In the .env.local file, be sure to include the variable and the Path:Port which your backend is running. For example:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

nooro-todo-frontend \
├── node_modules/\
│ &nbsp;&nbsp;&nbsp;&nbsp;├── subfolders\
├── public/\
│ &nbsp;&nbsp;&nbsp;&nbsp;├── subfolders\
├── src/\
│ &nbsp;&nbsp;&nbsp;&nbsp;├── subfolders\
├── **.env.local** <--- This file \
├── .gitignore \
├── next.config.ts \
├── package.json \
├── tsconfig.json \
├── tailwind.config.js/ts \
└── README.md

### Next, run the development server:

```bash
npm run dev
```

### Lastly, open the app

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.
