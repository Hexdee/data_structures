class User {

    static helloEmail = "hello@company.com";

    static checkValidEmail(email) {
        console.log("Hmmm, the email looks good!");
    }

    static loginHelloEmail() {
        this.checkValidEmail(this.helloEmail);
    }
}
User.loginHelloEmail()

