/*
 * GET contact page.
 */
exports.contact = function(req, res){
  res.render('contact', { title: 'Ninjacode.tv' });
};