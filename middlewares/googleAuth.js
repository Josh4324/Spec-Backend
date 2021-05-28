
module.exports = function GoogleAuth(app, passport){

    app.get('/failed', (req, res) => {
        //send user to login
        res.redirect("http://159.65.48.80/#/login")
      });
      
      // Middleware - Check user is Logged in
      const checkUserLoggedIn = (req, res, next) => {
        // if it fails send user to login page
        req.user ? next(): res.redirect("http://159.65.48.80/#/login");
      }
      
      //Protected Route.
      app.get('/profile', checkUserLoggedIn, (req, res) => {
        res.send(`<h1>${req.user.displayName}'s Profile Page</h1>`)
      });
      
      // Auth Routes
      app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
      
      app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
        function(req, res) {
          res.redirect('/profile');
        }
      );
      
}