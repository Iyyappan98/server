const EMAIL_TEMPLATE_CONTACT = `
<table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f4f4f4">
  <tr>
    <td align="center">

      <table width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="font-family: Arial, sans-serif;">

        <!-- HEADER -->
        <tr>
          <td align="left" background="https://tlr.stripocdn.email/content/guids/CABINET_0fa486e736790bd0e3fdb2f0eb814a76/images/hectorjrivas1fxmet2u5duunsplash_1.png"
              style="background-size:cover;background-position:center;padding:40px;">

            <a href="https://www.umatailoring.com/" target="_blank">
                    <img height="60" src="https://fyuauea.stripocdn.email/content/guids/CABINET_90e7d85d6cc2ae6bdf1e75505d458e4612f3b64186f5eee6032cccef46452358/images/umatailoringlogo.png" style="display: block">
                  </a>

          </td>
        </tr>

        <!-- BODY -->
        <tr>
          <td style="padding:40px; color:#333; font-size:14px; line-height:22px;">

            <h2>New Enquiry Contact Received</h2>

            <p>Hello Admin,<br><br>
            You have received a new enquiry from the website.</p>

            <hr>

            <p><strong>Name:</strong> {{name}}</p>            
            <p><strong>Phone:</strong> {{phone}}</p>
            <p><strong>Service:</strong> {{service}}</p>            
            <p><strong>Message:</strong> {{message}}</p>
            

            <hr>

            <p>Please contact the customer as soon as possible.</p>

            <p style="font-size:12px;color:#999;">
              This is an automated email from Uma-tailoring Website.
            </p>

          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td background="https://tlr.stripocdn.email/content/guids/CABINET_0fa486e736790bd0e3fdb2f0eb814a76/images/hectorjrivas1fxmet2u5duunsplash_1.png"
              style="background-size:cover;background-position:center;padding:30px;color:#ffffff;">

            <p style="margin:0;font-size:14px;">
              <strong>Uma-tailoring</strong><br>
              Specialists in Aari Work, Bridal Blouses & Designer Suits
            </p>

            <p style="margin:10px 0 0 0;font-size:13px;">
              Email: rgviyer@gmail.com<br>
              Phone: +91-9445535457 || +91-8848507556<br>
              Website: https://www.umatailoring.com/
            </p>

            <p style="margin-top:10px;font-size:12px;">
              © 2026 Uma-tailoring. All Rights Reserved.
            </p>

          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>
`;

module.exports =  EMAIL_TEMPLATE_CONTACT;
