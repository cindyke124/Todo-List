## Overview

"Todo List" is an event scheduler where users can add and view their events, including title, description, due date, and status (new, in progress, or done).

## Dependencies

### Backend: 
Django              3.1  
django-cors-headers 3.7.0  
djangorestframework 3.12.1   
pluggy              1.4.0  
pytest              8.1.1  
pytest-django       4.8.0   
ruff                0.4.1  
tomli               2.0.1  

### Frontend:
bootstrap@5.3.3  
react-dom@17.0.2  
react-redux@7.2.6  
react-scripts@5.0.1  
react@17.0.2  
reactstrap@8.10.1  
redux-thunk@2.4.0  
redux@4.2.1  
thunk@0.0.1  
yup@0.32.11  

## Lcoal Run
### Backend
```
python manage.py runserver
```
You can access backend at: http://127.0.0.1:8000/todos/

### Frontend:
```
npm start
```
You can access frontend at: http://localhost:3000/

### API Document
https://geode-bead-565.notion.site/Todo-API-Document-e0f1505de4284b69a6afee52cf7ccbbe?pvs=4

## Usage
+ The user must enter all spaces of the form, including title, description, deadline, and status before submitting.
+ After the form is submitted, the most recently created to-do list will be displayed at the top of the form immediately.
+ The color of the columns relates to the status of the to-do item.
<img width="735" alt="Screenshot 2024-04-20 at 10 45 17 PM" src="https://github.com/cindyke124/gwh_coding_challenge/assets/152237584/42c0e4b2-3e8c-4d2c-9324-07f3f42fe42f">


## Technology Stack
Django REST Framework  
React.js  
Redux  
SQLite  
Python  
JavaScript  
HTML  
CSS  

## Project Structure
```
.  
|-- frontend/  
|   |-- public/  
|   |   |-- indexx.html  
|   |-- src/  
|   |   |-- redux/  
|   |   |   |-- action/ 
|   |   |   |   |-- todoActions.js
|   |   |   |   |-- todoThunks.js
|   |   |   |-- reducer/
|   |   |   |   | -- rootReducer.js
|   |   |   |   | -- storeConfig.js
|   |   |-- views/
|   |   |   |-- Todo/
|   |   |   |   |-- index.js
|   |   |   |   |-- TodoForm.js
|   |   |-- App.js
|   |   |-- index.js
|-- gwh_coding_challenge/
|   |-- apps/
|   |   |-- Todo/
|   |   |   |-- migrations/
|   |   |   |-- models.py
|   |   |   |-- serializers.py
|   |   |   |-- urls.py 
|   |   |   |-- test.py
|   |   |   |-- views.py                    
|   |-- manage.py
|   |-- pyproject.toml

```
