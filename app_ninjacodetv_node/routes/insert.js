/*
 * GET insert news page.
 */
exports.news = function(req, res){
  res.render('insert', { title: 'Ninjacode.tv' });
};