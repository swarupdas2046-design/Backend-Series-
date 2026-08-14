const emailTemplate = (user,resetLink) => {
  return `<div>
    <h1>Hey ${user}👋</h1>
    <h3>this is a confirmation email for your reset password</h3>

    <p>please click on this link to reset your password</p>

    <a href="${resetLink}">Reset Password</a>

</div>`;
};


export default emailTemplate