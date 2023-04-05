console.log("This is the statring App .js file ")

//Email sending

const mailer = require("nodemailer")


let transport = mailer.createTransport(
{
  service :'gmail',
  auth:{
    user : 'shivamraiias@gmail.com',
    pass:'veffhsbzoxunwadw',
  }
}
);

let messageObj = {

    from : "shivamraiias@gmail.com",
    to:"shivamrai714714@gmail.com",
    subject:"Email sending in 2023 , by using 2factor auth : AppPassword (16 letter unique code in place of password )",
    text:`This is shivam , Rai trying to send mail in  2023 
     And allow Less secure apps is completely disabled from the Gamil SMTP  Service , 
     So  we need to  use to the Google  " google app password" and then crate a 16 digit code which is the password , for sending the email to the users  service , Refer stackoverflow Video`,
}

transport.sendMail(messageObj , ( error , info ) =>{
    if(error){
        console.log(error)
    }else
    {
       console.log("Email Sent successfully ");
       console.log(info.response);
    }


} );