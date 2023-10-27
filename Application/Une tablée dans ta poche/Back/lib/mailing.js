//on importe la librairie nodemailer
const nodeMailer = require('nodemailer');
//on importe l'api de google
const { google } = require("googleapis");
//on récupère l'objet d'authentification du proprio du gmail à brancher
const OAuth2 = google.auth.OAuth2;

module.exports = (mailTo, subject, title, text) =>{
    
    //on instancie l'authentification qu'on pourra utiliser dans le transport du mail
    const oauth2Client = new OAuth2(
        '646217771134-bnfvcnkoc3hqd6s6rds9vlfqmlltrut6.apps.googleusercontent.com', // client Id
        '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', // client secret
        "https://developers.google.com/oauthplayground" // Redirect URL
    )
    
    //envoi des identifications client.
    oauth2Client.setCredentials({
        refresh_token: '1//042GyIyLzhBYHCgYIARAAGAQSNwF-L9Irq-IJ_d2zyh6lizEE3orsgQ8Olk0sMhTvw4IgTyQ2vThu5VqiUdT65h1gT-YapYfIQPw'
    })
    
    console.log(oauth2Client);
    
    //création du transport du mail pret à partir (préparation)
    let transporter = nodeMailer.createTransport({
          service: 'gmail',
          auth: {
            type: 'OAuth2',
            user: 'haller.sebastien@gmail.com',
            clientId: "646217771134-bnfvcnkoc3hqd6s6rds9vlfqmlltrut6.apps.googleusercontent.com", // client Id
            clientSecret: "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",
              refreshToken: '1//042GyIyLzhBYHCgYIARAAGAQSNwF-L9Irq-IJ_d2zyh6lizEE3orsgQ8Olk0sMhTvw4IgTyQ2vThu5VqiUdT65h1gT-YapYfIQPw',
              accessToken: "ya29.A0AVA9y1s0MiiO4-M7Ovg2kF1ejaLAZec6zp1OzeDdLs_wusa8CmoI2AeABoPYtona-aXYie1p4AtI_C4cU0m-LHA9HeWanCqrMn_JB0U-96AASDaUQXkdaqQsrQsTo9Q-2uxNLmW6-8nyGZQBbKI_vqsOisD0YUNnWUtBVEFTQVRBU0ZRRTY1ZHI4RzBLb2tKUng1Z0NLM3h2VG05T0pQdw0163"
        }

      });
      
      //modèle du mail
      let mailOptions = {
          from: '"Une Tablée dans ta poche" <blabla@gmail.com>', // sender address
          to: mailTo, // list of receivers
          subject: subject, // Subject line
          text: '', // plain text body
          html: '<b>'+title+'</b><p>'+text+'<p>' // html body
      };
    
        
    //envoi du mail avec une callback pour voir si ça a réussi
    transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.log('ça rate');
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              //res.render('index');
    });
    
}