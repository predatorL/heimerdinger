module.exports = app => {
    const {controller} = app;
    app.resources('sms', '/admin/sms', controller.sms)
}
