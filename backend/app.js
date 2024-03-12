mongoose.connect(

    "mongodb+srv://paakkinen:<password>@atlascluster.ft5ndi5.mongodb.net/"
    
    );
    app.use(function (req, res, next) {

        next(createError(404));
        
        });
        
        app.use(function (err, req, res, next) {
        
        res.locals.message = err.message;
        
        res.locals.error = req.app.get("env") === "development" ? err : {};
        
        res.status(err.status || 500);
        
        res.send("error");
        
        });
        
        const port = 3001;
        
        app.listen(port, () => {
        
        console.log(`Example app listening on port ${port}`);
        
        });
        
        module.exports = app