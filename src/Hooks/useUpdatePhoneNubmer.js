const useUpdatePhoneNubmer = (phoneNumber) => {
const appVerifier = new firebase.auth.RecaptchaVerifier(...);
firebase.auth().currentUser.updatePhoneNumber(phoneNumber, appVerifier)
  .then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then complete
    // verification by calling confirmationResult.confirm(code).
    ...
    return confirmationResult.confirm(smsCode);
  }).then((userCredential) => {
    // Phone set on the user.
  }).catch((error) => {
    // Error occurred.
  });
}