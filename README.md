# Moringa Email Automation

## Author
 
- [Lydia Makini](https://github.com/lydiah2015)

## Description 

- Automate sending of batch  status emails to students with respective scores and recommendations.

## How it works
- It parses an csv file containing details about the student to retreive information such as `email , name, scores, recommendation`
- Then creates a conditional email template of with the corresponding student recommendation(whether or not they will proceed), with a reason.
- It then sends the mails asynchronously using `nodemailer`.

## Requirements
- node v10+

## Setup 
- clone the project from github: `git clone https://github.com/lydiah2015/email_automation.git`

#### Install node dependencies
```bash
cd email_automation
npm install
```

### env setup
- add the following to `.env` at the root of the project.
```
EMAIL=YOUR_EMAIL
PASSWORD=YOUR_PASSWORD 
```

## Usage
- copy the contents of the spreadsheet to `data.csv`.
- run `node index.js`

### test csv
- you can test if the app works with the following csv, save it as `data.csv`.
- replace the names and email with existing ones.
```csv
Student,Email,IP1 /31,IP2 /22, IP3 /22,IP4 /28,Attendance,First recommendation,reason (first recommendation),Final recommendation,reason (final recommendation)
"Mitchelle, Makini",mitchellemakini15@gmail.com,23,19,15,18,99%,No,IP quality and completion,No,IP quality and completion
"Schuyler,Shawdforth",sshawdforth0@ask.com,29,17,19,27,100%,Yes,,Yes,
```
- then run the app to send the emails.

```bash
node index.js
```

## Bugs and support
- If you find a bug you open an issue.

## License 
- licensed under MIT open source license

