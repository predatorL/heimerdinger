module.exports = app => {
    const {controller} = app;
    app.resources('email', '/admin/email', controller.email)
}
