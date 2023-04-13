class MainController{
    async main_page(req, res) {
        res.render('../../main/index.html', {
            date: "some"
        });
    }
}

module.exports = new MainController();