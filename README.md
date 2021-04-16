[![GitHub license](https://img.shields.io/github/license/gkhan205/cwg-react-starter?color=rgb%2868%2C%20204%2C%2017%29)](https://github.com/gkhan205/cwg-react-starter/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/gkhan205/cwg-react-starter?color=rgb%252868%252C%2520204%252C%252017%2529)](https://github.com/gkhan205/cwg-react-starter/stargazers)
![GitHub issues](https://img.shields.io/github/issues-raw/gkhan205/cwg-react-starter?color=rgb%2868%2C%20204%2C%2017%29)

## CWG React Starter

> Pre-configured and Ready to use React Starter App. To save time in settings things up for new project. Almost everything needed is already configured. Just clone and start developing without wasting time in doing same stuffs for every project. You can use it with Create React App as Template 

### `npx create-react-app <app-name> --template cwg-react`

> [Read detailed explanation here](https://codewithghazi.com/best-scalable-react-app-structure-2020/)

### Overview

_Things included in this starter app_

- Folder Structure
- Axios Interceptor
- Redux with Redux-Thunk
- Router with Private Route
- Confugured for SCSS/SASS
- Eslint & Prettier
- Pre-commit Hook
- Absolute Imports

> [Please follow this import style for better code readability](#Imports-style)

### Folder Structure

Big and extensive React application should have well planned and organized project structure. Best way is to use a mix of strategies to achieve better results as I am going to describe next.

Top level project architecture (which is under src/ folder) should be organized by type. No files should be here, just folders. This way it will be clear and understandable. Similar to a home where you have a foundation, walls, roof and etc. Under these walls are rooms, but may be you don't want to go there if you have some work outside like for instance painting walls. Having files in here adding mess. We should keep it clear like this:

```
- src/
  - main/
  - modules/
  - library/
  - resources/
```

---

**Main Folder** : This folder is for main configurations such as Redux Create Store, Axios Instance and Routes

```
- src/main/
  - axios/
    - index.js
  - routes
    - index.js
    - PrivateRoute.js
  - store/
    - index.js
    - mainReducer.ts
```

---

**Modules Folder** : This folder is for Modules/Features of our app, we can treat this as containers. Each module/feature will have all its related files in same folder. We may have some module related components which we will be placing inside `frames` folder and components which are used in more than one module we will keep in common/components to share across the application. Reason for keeping all related files in same folder to increase maintainability and searchability.

```
- src/modules/
  - Dashboard/
    - index.jsx
    - dashboardStyles.scss
    - dashboardActions.js
    - dashboardConstants.js
    - dashboardReducer.js
    - frames/
      - HeaderFrame/
        - index.jsx
        - headerFrameStyles.scss
      - CoolFrame/
        - inex.jsx
        - coolFrameStyles.scss
```

---

**Library Folder** : This folder will keep all our helpers and common files which will be shared across the application. We have 2 major folder in this `common` and `utilities`. If you want to create some api services you can keep it in `api` folder inside `library` folder.

```
- src/library/
  - common
    - components
      - Header
        - index.jsx
        - styles.scss
      - Dropdown
        - index.jsx
        - styles.scss
    - actions
      - AuthActions.js
    - constants
      - StoreConstant.js
      - ImagesConstants.js
      - URLConstants.js
    - reducers
      - AuthReducer.js
  - utilities
    - Validators.js
    - Storage.js
  - api - (optional folder as per requirement create this)
    - AuthApiService.js
```

---

**Resources Folder** : This folder will be used to keep all our static resources such as `images`, `styles (mixins, variable etc)`, `seeds`, `fonts` etc. In current starter pack fonts and seed folder is not created, you can add them as per your need.

```
- src/resources/
  - images/
    - logo.svg
  - styles/
    - variables.scss
    - mixins.scss
  - fonts/
    - Roboto.ttf
  - seed/
    - country.json
```

---

## Imports Style

Order should be as below

```
Imports from node_modules

Absolute Imports

Relative Imports
```

example:

```jsx
import React from 'react';
import { uniqBy } from 'lodash';

import AppNavbar from 'library/common/components/AppNavbar';

import './style.scss';
```
