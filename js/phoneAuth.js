window.onload=function()
{
  firebase.auth().useDeviceLanguage();
  render();
};
function render()
{
  /*window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('otp', {
  'size': 'invisible',
  'callback': function(response) {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});*/
this.autVer = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  this.autVer.render().then(function(widgetId) {
  this.autVer = widgetId;
});
}
