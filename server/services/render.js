
exports.homeRoutes = function(req, res){
    res.render('index');
}

exports.autor = function(req, res){
    res.render('autor');
}

exports.add_autor = function(req, res){
    res.render('add_autor');
}

exports.update_autor = function(req, res){
    res.render('update_autor');
}