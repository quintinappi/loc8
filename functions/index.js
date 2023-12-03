const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addSuperuserRole = functions.https.onCall((data, context) => {
  // Check if request is made by an admin
  if (context.auth.token.admin !== true) {
    return { error: "Only admins can add superusers" };
  }
  // Get user and add custom claim (superuser)
  return admin.auth().getUserByEmail(data.email)
    .then((user) => {
        return admin.auth().setCustomUserClaims(user.uid, { isSuperuser: true });
        return { message: `Success! ${data.email} has been made a superuser.` };
    });
        return { message: `Success! ${data.email} has been made a superuser.` };
    });
        return err;