export const mailTemplate = (name, email, description) => {
  const safeName = escapeHtml(name || "Unknown sender");
  const safeEmail = escapeHtml(email || "No email provided");
  const safeDescription = escapeHtml(description || "No message provided");

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Portfolio Contact</title>
      </head>
      <body style="margin:0; padding:0; background:#030403; font-family:Arial, Helvetica, sans-serif; color:#ffffff;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#030403; padding:32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px; border:1px solid rgba(34,197,94,0.45); background:#070807;">
                <tr>
                  <td style="padding:24px 28px; border-bottom:1px solid rgba(34,197,94,0.25);">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <p style="margin:0 0 8px; color:#22c55e; font-family:'Courier New', Courier, monospace; font-size:11px; font-weight:700; letter-spacing:5px; text-transform:uppercase;">
                            // Portfolio Contact
                          </p>
                          <h1 style="margin:0; color:#ffffff; font-size:28px; line-height:1.15; font-weight:900; text-transform:uppercase;">
                            New Message Received
                          </h1>
                        </td>
                        <td align="right" style="color:#22c55e; font-family:'Courier New', Courier, monospace; font-size:11px; letter-spacing:3px; text-transform:uppercase;">
                          secure.inbox
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:28px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding:0 0 18px;">
                          <div style="border-left:2px solid #22c55e; background:#030403; padding:18px 20px;">
                            <p style="margin:0 0 6px; color:#22c55e; font-family:'Courier New', Courier, monospace; font-size:10px; font-weight:700; letter-spacing:4px; text-transform:uppercase;">
                              // Name
                            </p>
                            <p style="margin:0; color:#ffffff; font-family:'Courier New', Courier, monospace; font-size:16px; line-height:1.5;">
                              ${safeName}
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding:0 0 18px;">
                          <div style="border-left:2px solid #22c55e; background:#030403; padding:18px 20px;">
                            <p style="margin:0 0 6px; color:#22c55e; font-family:'Courier New', Courier, monospace; font-size:10px; font-weight:700; letter-spacing:4px; text-transform:uppercase;">
                              // Email
                            </p>
                            <a href="mailto:${safeEmail}" style="color:#ffffff; font-family:'Courier New', Courier, monospace; font-size:16px; line-height:1.5; text-decoration:none;">
                              ${safeEmail}
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div style="border:1px solid rgba(34,197,94,0.45); background:#000000; padding:20px;">
                            <p style="margin:0 0 12px; color:#22c55e; font-family:'Courier New', Courier, monospace; font-size:10px; font-weight:700; letter-spacing:4px; text-transform:uppercase;">
                              // Message
                            </p>
                            <p style="margin:0; color:#d4d4d8; font-family:'Courier New', Courier, monospace; font-size:15px; line-height:1.75; white-space:pre-wrap;">
                              ${safeDescription}
                            </p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:18px 28px; border-top:1px solid rgba(34,197,94,0.25);">
                    <p style="margin:0; color:#52525b; font-family:'Courier New', Courier, monospace; font-size:10px; letter-spacing:4px; text-transform:uppercase;">
                      ↳ Sent from portfolio contact form · Subhash Ahirwar
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
