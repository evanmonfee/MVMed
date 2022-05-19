
# MVMed Project


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

  

## Details

- Create a drug model (json database)
- Create CRUD api end point with json-server (https://github.com/typicode/json-server)
-  Consume the API with Angular App and create the UI for create, update and delete operations on the sample model.
- List all drugs on the main dashboard page.

## Installation & Run

**Dependencies:** 
 `ng-bootstrap` via npm
  `json-server` via npm

**To run**, hit in the angular CLI:

 1. `npm install` 
 2. `ng serve --open` 
 3. Navigate to `json-mock` folder, and run `json-server --watch db.json`
 
## Output Screenshots

**1. On Page Load - Fetch the list of drugs**
![On Page Load](https://i.imgur.com/DLn6aaV.png)

**2. Delete the Drug:** 
Deleting Fentanyl: Step 1 (Select the drug to delete and confirm the same.)
![enter image description here](https://i.imgur.com/Qiw1vE7.png)

Deleting Fentanyl: Step 2 (Deleted successfully.)
![enter image description here](https://i.imgur.com/RRCSK91.png)

**3. Adding a New Drug:** 

 Adding a New Drug: Step - 1 (Enter the drug details)
![enter image description here](https://i.imgur.com/4WHyrwp.png)

 Adding a New Drug: Step - 2 (Confirm the changes entered)
![enter image description here](https://i.imgur.com/pgVS3Oh.png)

 Adding a New Drug: Step - 1 (Saved Successfully)

![enter image description here](https://i.imgur.com/IA41QW8.png)