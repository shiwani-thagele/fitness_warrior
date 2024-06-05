import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
      host: smtp.gmail.com,
      port: 465,
      service: gmail,
      auth: {
        user: "shivi2000june@gmail.com ",
        pass: "nndb grlm grqc kfuh",
      },
    })

    const mailOptions = {
        from: "shivi2000june@gmail.com ",
        to: options.email,
        subject: options.subject,
        text: `${options.message} \n\nEmail of User Who Sent The Message: ${options.userEmail}`,
      };
      await transporter.sendMail(mailOptions);
    };

