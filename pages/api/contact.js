import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    let html = `<table style="width:100%"`;
    for (const key in body) {
      html += `<tr>
      <th>${key.replace(/^\w/, (c) => c.toUpperCase())}</th>
      <td>${body[key]}</td>
    </tr>`;
    }
    html += "</table>";

    try {
      let info = await transporter.sendMail({
        from: body.email,
        to: "bar@example.com, baz@example.com",
        subject: "REQUEST: Contact Form Submission",
        text: html,
        html: html,
      });

      console.log("Message sent: %s", info.messageId);

      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {}
  }
}
