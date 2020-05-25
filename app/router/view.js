module.exports = app => {
    const {controller, router} = app;

    // router.redirect('/', '/app', 302);
    router.get('/app', controller.view.index);
}
