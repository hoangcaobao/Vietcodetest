# STEP UP WORKSPACE
### STEP 1: DOWNLOAD VISUAL STUDIO CODE AND GIT
- Click to   https://code.visualstudio.com/ and https://git-scm.com/downloads, then choose the suitable versions to your computer and dowload them
- After finish dowloading, follow the guide to set up VScode and Git for your computer

### STEP 2: CLONE GIT
- Open command prompt or power shell in your computer
- Type: git clone https://github.com/hoangcaobao/Vietcodetest.git
- Now you have necessary files to run my sever and api

### STEP 3: OPEN FOLDER IN VISUAL STUDIO CODE
- After finishing clone git, type: cd Vietcodetest
- Now you are in Vietcodetest foler, then type: code .
- Waiting about 5s the VScode will open on your screen with Vietcodetest folder

### STEP 4: DOWLOAD NECESSARY THIRD-PARTIES LIBRARY
- Using keystroke Ctrl+Shift+` to open terminal inside VScode
- Make sure path still point in Vietcodetest folder, after that type: npm init
- After that terminal will ask you some questions, you can enter and use default values or you can change values for your purposes
- This command line will create 2 files json that contain information about projects 
- After that you use this command in termianl to dowload libraries: npm install <libraries_name>
- Here is the name of librearies you need to download:
    1. nodemon
    2. ejs
    3. mongoose
    4. morgan
    5. express
    6. body-parser

### STEP 5: RUN CODE
- Once again, make sure terminal still point in Vietcodetest folder, then type: nodemon app
- Go to chrome and search: http://localhost:3000/

### STEP 6: READ USING_API.md file
- Congratulation on setting up workspace sucessfully, now open USING_API.md file to understand the way to use my sever and api
