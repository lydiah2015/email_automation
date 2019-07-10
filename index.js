const CsvParser = require("./csvParser");
const EmailTemplate = require("./emailTemplate");
const Mailer = require("./mailer");


var csvParser = new CsvParser();

var emailTemplate = new EmailTemplate();

var mailer = new Mailer();

csvParser.getJsonArray(emailTemplate.filePath).then(
    (jsonArray)=>{
        mailer.createBasicTransporter();
        for(var i=0; i<jsonArray.length; i++){
            var emailBody= emailTemplate.createEmailTemplate(jsonArray[i]);
            var mailObj = {
                body:emailBody,email:jsonArray[i]["Email"],
                subject:emailTemplate.subject,
                from:emailTemplate.from
            };
            mailer.sendMail(mailObj);
        }
    },
    (error)=>{
        console.log(error);
    }
)

