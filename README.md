# React Package Template
Strat a NPM Package based on React, Typescript, Jest, Tslint and Webpack.

1. git clone https://github.com/bqroster/react-base-pckg.git [__your_new_folder_name__]
2. cd react-base-pckg | cd <__your_new_folder_name__>
3. open package.json and update below properties
```javascript
"name": "your package name here",
"description": "your package description here",
"repository": {
  "url": "git+https://github.com/<your_github_account>/<your_repository_name>.git"
},
"author": "your_name <your_email@your_email.com>",
"bugs": {
  "url": "https://github.com/your_github_account/your_repository_name/issues"
},
"homepage": "https://github.com/your_github_ccount/your_repository_name#readme",
```
4. npm install

### Before remove or update any file
Confirm that everything is working as expected
- npm run do-types
- npm run test
- npm run lint
- npm run storybook

### Current Versions
- Node v10.16.0
- NPM 6.9.0

### Author
Jose Burgos <jose@bqroster.com>
