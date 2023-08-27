1. run ```npm install```
2. run ```ng serve``` to run app
3. to get 403 fallback page add ```/403``` to the address
4. to get 404 fallback page write somethimg in the address, like ```/gibberish```
5. to see error toaster on create or update user's data: go to ```user-form.component.ts```, line ```99``` change argument to ```false```
5. to see error toaster on delete user: go to ```user-form.component.ts```, line ```129``` change argument to ```false```