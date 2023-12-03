module.exports = {
   isAuthenticated: function (req, res, next) {
      if (req.isAuthenticated()) {
         return next();
      }
      req.flash('error_msg', 'Belum Punya akun??, Daftar terlebih dahulu');
      res.redirect('/users/login');
   },
   notAuthenticated: function (req, res, next) {
      if (!req.isAuthenticated()) {
         return next();
      }
      res.redirect('/docs');
   }
};
