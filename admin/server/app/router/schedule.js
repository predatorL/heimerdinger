module.exports = app => {
    const {controller} = app;
    app.resources('schedule', '/admin/schedule', controller.schedule)
}
