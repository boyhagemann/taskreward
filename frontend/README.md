


Flow

1. Get or create a User
-----------------------

- is there a cookie?
  yes : find the user and attach
  no :
    - is there a user with this ip address / session ID?
      yes : attach this user
      no : create a new user

2. Get or create a Lead
-----------------------

- is there a Lead for this task and user?
  yes: do nothing
  no: create one with the User

3. Then redirect to the Lead page for this User
-----------------------------------------------
