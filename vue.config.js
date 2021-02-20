module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "CRM 1.0 Repair Cartriges";
                return args;
            })
    }
}