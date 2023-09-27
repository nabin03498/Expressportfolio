const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
res.render('index');

});

app.get('/about', (reqnpm , res) => {
    res.render('about');
    
    });
    
app.get('/projects', (req, res) => {
    res.render('projects');
    
    });
    app.get('/contact', (req, res) => {
        res.render('contact');
        
        });
        app.get('/services', (req, res) => {
            res.render('services');
            });
            app.get('/Home', (req, res) => {
                res.render('Home');
                });
    
            app.use(express.static(__dirname + '/css'));
            app.use(express.static(__dirname + '/Logo'));


app.listen(port, () => {
    console.log('Server is running on port ${port}');
});