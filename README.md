# Moringa Email Automation

## Author
 
- [Lydia Makini](https://github.com/lydiah2015)

## description 

- Automate sending of batch  status emails to students with respective scores and recommendations.

## Requirements
- node v10+

## Setup 
- clone the project from github: `git clone <link>`

#### install node dependencies
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

## usage
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

## Bugs and support
- If you find a bug you open an issue.

## License 
- licensed under MIT open source license

