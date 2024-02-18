// src/controllers/InquiryUserController.js

const { InquiryUsersModel } = require("../models");
const { logger } = require("../utils/logger");
const { Our_Email } = require("../utils/common");
const { transporter } = require("../utils/mailer");

async function getAllInquiryUsers(req, res, next) {
  try {
    if (req.user.userName.toLowerCase() !== "admin") {
      return res.status(403).json({
        status: 403,
        error: "Forbidden: Only admin can view lotteries.",
      });
    }
    const InquiryUsers = await InquiryUsersModel.findAll();
    return res.status(200).json(InquiryUsers);
  } catch (error) {
    logger().error("Error getting all Inquiry Users:", error);
    return res
      .status(500)
      .json({ status: 500, error: "Internal Server Error" });
  }
}

async function createInquiryUser(req, res, next) {
  try {
    logger().info("Creating User With Email");
    const { email } = req.body;

    if (!email) {
      logger().info("No Email Provided");
      return res.status(400).json({
        status: 400,
        error: "Email is required.",
      });
    }

    const duplicateEmailCheck = await InquiryUsersModel.findOne({
      where: {
        email: email,
      },
    });

    if (duplicateEmailCheck) {
      logger().info("Duplicate Email Found");
      return res.status(400).json({
        status: 400,
        error: "User Already Exist With This Email",
      });
    }

    await InquiryUsersModel.create({
      email,
    });
    logger().info("User Created");

    const welcomeMailOptions = {
      from: Our_Email,
      to: email,
      subject: "Welcome to lotto central: Play Big, Win Bigger!",
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
          <meta http-equiv="Content-type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="format-detection" content="date=no">
          <meta name="format-detection" content="address=no">
          <meta name="format-detection" content="telephone=no">
          <meta name="x-apple-disable-message-reformatting">
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap" rel="stylesheet">
          <title>Welcome to lotto central: Play Big, Win Bigger!</title>
          <style type="text/css" media="screen">
            /* Linked Styles */
            body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#f6f6f5; -webkit-text-size-adjust:none }
            a { color:#66c7ff; text-decoration:none }
            p { padding:0 !important; margin:0 !important }
            img { -ms-Comfortaapolation-mode: bicubic; /* Allow smoother rendering of resized image in Comfortaanet Explorer */ }
            .mcnPreviewText { display: none !important; }
            .cke_editable,
            .cke_editable a,
            .cke_editable span,
            .cke_editable a span { color: #000001 !important; }
            /* Mobile styles */
            @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
              .mobile-shell { width: 100% !important; min-width: 100% !important; }
              .bg { background-size: 100% auto !important; -webkit-background-size: 100% auto !important; }
              .text-header,
              .m-center { text-align: center !important; }
              .center { margin: 0 auto !important; }
              .container { padding: 0px 10px 10px 10px !important }
              .td { width: 100% !important; min-width: 100% !important; }
              .m-br-15 { height: 15px !important; }
              .p12-20 { padding: 12px 20px !important; }
              .p20-0{ padding: 20px 0px !important; }
              .p10-0{ padding: 10px 0px !important; }
              .p0-10{ padding: 0px 10px !important; }
              .pb10 { padding-bottom: 10px !important; }
              .pb30 { padding-bottom: 30px !important; }
              .pt20 { padding-top: 20px !important; }
              .m-block { display: block !important; }
              .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }
              .fluid90 img { width: 90% !important; max-width: 90% !important; height: auto !important; }
              .column,
              .column-top,
              .column-empty,
              .column-empty2,
              .column-dir-top { float: left !important; width: 100% !important; display: block !important; }
              .column-empty { padding-bottom: 10px !important; }
              .column-empty2 { padding-bottom: 20px !important; }
              .content-spacing { width: 15px !important; }
              .m-td,
              .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }
            }
          </style>
          
        </head>
        <body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#E5E5E5; -webkit-text-size-adjust:none;">
          <!--*|IF:MC_PREVIEW_TEXT|*-->
          <!--[if !gte mso 9]><!-->
          <span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;"></span>
          <!--<![endif]-->
            <!--*|END:IF|*-->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#F5F5F5">
              <tr>
                <td align="center" valign="top">
                  <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell" bgcolor="#0e0c31">
                    <tr>
                      <td class="td container">
                        <!--------------------------TOP STARTS---------------------------->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td background="https://res.cloudinary.com/duoalyur6/image/upload/v1707145380/spiral-pGqM0oVr_okca10.png" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; margin:0; font-weight:normal; padding:20px 0px 20px 0px; background: url(https://lottocentral.in/assets/spiral-pGqM0oVr.png); background-position: center; background-size: cover; background-repeat: no-repeat;">
                              <!--------------------------Header----------------------------->
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td>
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <th class="column-top" width="145" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                              <td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:center;">
                                                <a href="https://lottocentral.in/" target="_blank" class="link-white" style="color:#000000; text-decoration:none; font-weight:700;">
                                                  <img src="https://res.cloudinary.com/duoalyur6/image/upload/v1707145330/lotto-central-mfyjWcWq_piy6e9.png" width="166" height="74" mc:edit="image_1" style="max-width:166px;" border="0" alt="logo"/>    
                                                </a>
                                              </td>
                                            </tr>
                                          </table>
                                        </th>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                              <!----------------------- END Header -------------------------->
                              <!-------------------------- Hero ----------------------------->
                              <div mc:repeatable="Select" mc:variant="Hero">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding:60px 30px 0px 30px;">
                                  <tr>
                                    <td style="color:#fbd852; font-family: 'Comfortaa', Arial, Helvetica, sans-serif; font-size:36px; font-weight:700; line-height:140%; text-align:center;">
                                      <div mc:edit="text_35">Get ready to play big and <br>
                                        win bigger with <span style="color: #f631ba">lotto central</span>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="color:#ffffff; font-family: 'Comfortaa', Arial, Helvetica, sans-serif; font-size:28px; font-weight:400; line-height:150%; text-align:center; padding: 15px 0;">
                                      <div mc:edit="text_35">We're thrilled to have you on board <br>
                                        as we gear up for our exciting launch.</div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th class="column-top" style="font-size: 0px; line-height:300px; padding:0; margin:0; font-weight:normal; vertical-align:top; padding: 20px 0;">
                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                          <td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:center;">
                                            <img src="https://res.cloudinary.com/duoalyur6/image/upload/v1707896468/eye_uwuiuh.png" width="300" height="232.5" mc:edit="image_1" style="max-width:300px;" border="0" alt="logo"/>
                                          </td>
                                        </tr>
                                      </table>
                                    </th>
                                  </tr>
                                  <tr>
                                    <td style="color:#ffffff; font-family: 'Comfortaa', Arial, Helvetica, sans-serif; font-size:24px; font-weight:400; line-height:160%; text-align:center; padding-top: 15px;">
                                      <div mc:edit="text_35">
                                        <span style="color: #f631ba;">Keep Your Eyes Open</span><br>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="color:#ffffff; font-family: 'Comfortaa', Arial, Helvetica, sans-serif; font-size:16px; font-weight:400; line-height:160%; text-align:center; padding-bottom: 15px;">
                                      <div mc:edit="text_35">
                                        <span> AND YOUR INBOX REFRESHED</span>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </div>
                              <!------------------------ END Hero --------------------------->
                            </td>
                          </tr>
                        </table>
                        <!----------------------------END TOP----------------------------->
                        <!--------------------------- Howto ------------------------------>
                        <div mc:repeatable="Select" mc:variant="Howto">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding:10px 30px;">
                            <tbody>
                              <tr>
                                <td valign="top" style="border-collapse:collapse;">
                                </td>
                              </tr>
                              <tr>
                                <td style="color:#fbd852; font-family: 'Comfortaa', Arial, Helvetica, sans-serif; font-size:24px; font-weight:700; line-height:140%; text-align:center; padding: 20px 0; padding-bottom: 40px;">
                                  <div mc:edit="text_35">Participate in iconic Australian lotteries like Powerball, Oz Lotto, Set for Life, and more, from the comfort of your home!</div>
                                </td>
                              </tr>
                              <tr mc:hideable>
                                <td align="left" style="padding-bottom: 40px;">
                                  <table border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                      <td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:center; padding-bottom: 15px;">
                                        <img src="https://res.cloudinary.com/duoalyur6/image/upload/v1708262941/powerball_1_c81xay.png" width="160" class="flexibleImage" style="-ms-Montserratpolation-mode:bicubic;border:0;outline:none;text-decoration:none;height:auto;max-width:160px;"/>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="color:#ffffff; font-family: 'Montserrat', Arial, Helvetica, sans-serif; font-size:18px;font-weight:bold;line-height:150%; text-align:center;">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                          <tr>
                                            <td style="color:#ffffff; font-family: 'Montserrat', Arial, Helvetica, sans-serif; font-size:18px;font-weight:400;line-height:150%; text-align:center;">
                                              <div mc:edit="text_35">Chase monumental jackpots and unforgettable prizes with Powerball, Australia's favorite lottery game.</div>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                      <!--------------- END Button ------------------>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr mc:hideable>
                                <td align="left" style="padding-bottom: 40px;">
                                  <table border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                      <td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:center; padding-bottom: 15px;">
                                        <img src="https://res.cloudinary.com/duoalyur6/image/upload/v1707919684/oz_quuh5i.png" width="160" class="flexibleImage" style="-ms-Montserratpolation-mode:bicubic;border:0;outline:none;text-decoration:none;height:auto;max-width:160px;"/>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="color:#ffffff; font-family: 'Montserrat', Arial, Helvetica, sans-serif; font-size:18px;font-weight:bold;line-height:150%; text-align:center;">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                          <tr>
                                            <td style="color:#ffffff; font-family: 'Montserrat', Arial, Helvetica, sans-serif; font-size:18px;font-weight:400;line-height:150%; text-align:center;">
                                              <div mc:edit="text_35">Experience the excitement of Oz Lotto, where generous rewards and multiple divisions await lucky players like you.</div>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                      <!--------------- END Button ------------------>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr mc:hideable>
                                <td align="left" style="padding-bottom: 20px;">
                                  <table border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                      <td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:center; padding-bottom: 15px;">
                                        <img src="https://res.cloudinary.com/duoalyur6/image/upload/v1707898611/set_j2vkze.png" width="160" class="flexibleImage" style="-ms-Montserratpolation-mode:bicubic;border:0;outline:none;text-decoration:none;height:auto;max-width:160px;"/>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="color:#ffffff; font-family: 'Montserrat', Arial, Helvetica, sans-serif; font-size:18px;font-weight:bold;line-height:150%; text-align:center;">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                          <tr>
                                            <td style="color:#ffffff; font-family: 'Montserrat', Arial, Helvetica, sans-serif; font-size:18px;font-weight:400;line-height:150%; text-align:center;">
                                              <div mc:edit="text_35">Set for Life offers you this incredible chance for financial security and freedom</div>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                      <!--------------- END Button ------------------>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!------------------------- END Howto -------------------------->
                        <!--------------------------- MIDDLE --------------------------->
                        <div mc:repeatable="Select" mc:variant="Middle">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td class="headerContent" style="border-collapse:collapse;color:#202020;font-family:arial;font-size:34px;font-weight:bold;line-height:100%;padding:0;text-align:center;vertical-align:middle;">
                                  <img src="https://res.cloudinary.com/duoalyur6/image/upload/v1708197630/sparkle_hhqpvi.png" width="500" height="350" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;" id="headerImage campaign-icon" mc:label="header_image" mc:edit="header_image" mc:allowdesigner mc:allowtext/>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!------------------------- END MIDDLE --------------------------->
                        <!---------------------------- FOOTER ---------------------------->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td style="padding: 20px 30px 0px 30px;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr mc:hideable>
                                  <td align="left">
                                    <table border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td valign="top" style="border-collapse:collapse;">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="color:#fbd852; font-family: 'Comfortaa', Arial, Helvetica, sans-serif; font-size:20px; font-weight:700; line-height:140%; text-align:center; padding: 0 0 20px 0;">
                                          <div mc:edit="text_35">BUT WAIT, THERE'S MORE!</div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="color:#ffffff; font-family: 'Comfortaa', Arial, Helvetica, sans-serif; font-size:18px; font-weight:400; line-height:140%; text-align:center; padding-bottom: 10px;">
                                          <div mc:edit="text_35">At lotto central, we believe in making your experience even more exhilarating with exciting giveaways and promotions, adding extra excitement to your lottery journey.</div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="color:#ffffff; font-family: 'Comfortaa', Arial, Helvetica, sans-serif; font-size:18px; font-weight:400; line-height:140%; text-align:center; padding: 15px 0;">
                                          <div mc:edit="text_35">Stay tuned for updates and get ready to embark on a journey turning your dreams into reality.</div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="padding: 20px 0px;">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr mc:hideable>
                                              <td align="center">
                                                <table border="0" cellspacing="0" cellpadding="0">
                                                  <tr>
                                                    <td width="120" class="text-button p12-20" style="background:#fbd852; color:#000000; font-family: 'Comfortaa', Helvetica, sans-serif; font-size:16px; line-height:32px; padding:4px 0px; font-weight:700; text-align:center; border-radius: 20px;">
                                                      <div mc:edit="text_5">
                                                        <a href="https://lottocentral.in/" target="_blank" class="link-white" style="color:#000000; text-decoration:none; font-weight:700;"><span class="link-white" style="color:#000000; text-decoration:none; font-weight:700; border-radius: 20px;">VISIT US</span></a>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!-------------------------- END FOOTER -------------------------->
                        <!------------------------------------ Footer Start----------------------------------->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center" valign="top" style="border-collapse:collapse;padding-top:20px;">
                              <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                                <tbody>
                                  <tr>
                                    <td align="center" valign="top" style="border-collapse:collapse;">
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" style="display:inline;border-collapse:collapse">
                                        <tbody>
                                          <tr>
                                            <td valign="top" style="border-collapse:collapse;padding-right:0;">
                                              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
                                                <tbody>
                                                  <tr>
                                                    <td align="center" valign="middle" style="border-collapse:collapse;padding-top:5px;padding-right:10px;padding-bottom:5px;">
                                                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse:collapse">
                                                        <tbody>
                                                          <tr>
                                                            <td align="center" valign="middle" width="24" style="border-collapse:collapse; padding-right:10px;">
                                                              <a href="https://www.facebook.com/lottocentral.in" target="_blank">
                                                                <img src="https://res.cloudinary.com/duoalyur6/image/upload/v1707921586/facebook_3_skusao.png" alt="facebook" style="line-height:100%;display:block;border:0;height:auto;outline:none;text-decoration:none;" height="24" width="24">
                                                              </a>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" style="display:inline;border-collapse:collapse">
                                        <tbody>
                                          <tr>
                                            <td valign="top" style="border-collapse:collapse;padding-right:10px;">
                                              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
                                                <tbody>
                                                  <tr>
                                                    <td align="center" valign="middle" style="border-collapse:collapse;padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:9px;">
                                                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse:collapse">
                                                        <tbody>
                                                          <tr>
                                                            <td align="center" valign="middle" width="24" style="border-collapse:collapse;">
                                                              <a href="https://www.tiktok.com/@lottocentral" target="_blank">
                                                                <img src="https://res.cloudinary.com/duoalyur6/image/upload/v1707922195/tiktok_2_k6usku.png" alt="tiktok" style="line-height:100%;display:block;border:0;height:auto;outline:none;text-decoration:none;" height="24" width="24">
                                                              </a>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" style="display:inline;border-collapse:collapse">
                                        <tbody>
                                          <tr>
                                            <td valign="top" style="border-collapse:collapse;padding-right:10px;">
                                              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
                                                <tbody>
                                                  <tr>
                                                    <td align="center" valign="middle" style="border-collapse:collapse;padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:9px;">
                                                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse:collapse">
                                                        <tbody>
                                                          <tr>
                                                            <td align="center" valign="middle" width="24" style="border-collapse:collapse;">
                                                              <a href="https://www.instagram.com/lottocentral" target="_blank">
                                                                <img src="https://res.cloudinary.com/duoalyur6/image/upload/v1707922195/insta_4_auhsfg.png" alt="Instagram" style="line-height:100%;display:block;border:0;height:auto;outline:none;text-decoration:none;" height="24" width="24">
                                                              </a>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <!-------------------------------- Two Columns Start----------------------->
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" class="pl0 pr0 pt10" style="padding: 10px 30px 10px 30px;">
                                <tr>
                                  <td style="padding: 0 30px;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td align="center" valign="top" style="border-collapse:collapse;">
                                          <table border="0" cellpadding="10" cellspacing="0" id="templateFooter" style="border-top:0; width: 100%;">
                                            <tr>
                                              <td valign="top" class="footerContent" style="border-collapse:collapse;">
                                                <table border="0" cellpadding="10" cellspacing="0" width="100%">
                                                  <tr>
                                                    <td>
                                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr mc:hideable>
                                                          <td align="center">
                                                            <table border="0" cellspacing="0" cellpadding="0">
                                                              <tr>
                                                                <!----------------- Button -------------------->
                                                                <td class="img" style="color:#ffffff; font-family: 'Montserrat', Arial, Helvetica, sans-serif; font-size:15px; font-weight:400; line-height:200%; text-align:center;">
                                                                  <div mc:edit="text_35">
                                                                    Need help? Contact us on
                                                                    <a href="mailto:hello@lottocentral.in" target="_blank" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#ffffff; text-decoration: underline;">
                                                                      hello@lottocentral.in 
                                                                    </a>
                                                                    <br>
                                                                    or visit
                                                                    <a href="https://lottocentral.in/" target="_blank" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#ffffff; text-decoration: underline;">
                                                                      www.lottocentral.in
                                                                    </a>
                                                                  </div>
                                                                </td>
                                                              </tr>
                                                            </table>
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <div mc:repeatable="Select" mc:variant="Middle">
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding-bottom: 40px;">
                                    <tbody>
                                      <tr>
                                        <td class="headerContent" style="border-collapse:collapse;color:#202020;font-family:arial;font-size:34px;font-weight:bold;line-height:100%;padding:0;text-align:center;vertical-align:middle;">
                                          <img src="https://res.cloudinary.com/duoalyur6/image/upload/v1707145329/footlog_xkqjjf.png" width="96" height="114" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;" id="headerImage campaign-icon" mc:label="header_image" mc:edit="header_image" mc:allowdesigner mc:allowtext/>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </table>
                              <!-------------------------------- Two Columns End----------------------->
                            </td>
                          </tr>
                        </table>
                        <!-------------------------------------- END Footer ---------------------------------->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(welcomeMailOptions);
    logger().info("Welcome Mail sent successfully");

    const notifyMailOptions = {
      from: email,
      to: Our_Email,
      subject: "New Sign Up",
      text: `New user signed up with email: ${email}`,
    };

    await transporter.sendMail(notifyMailOptions);
    logger().info("Notification Mail sent successfully");

    return res
      .status(201)
      .json({ status: 200, message: "User Signed Up Successfully" });
  } catch (error) {
    logger().error("Error creating Inquiry user:", error);
    return next(error);
  }
}

module.exports = {
  getAllInquiryUsers,
  createInquiryUser,
};
