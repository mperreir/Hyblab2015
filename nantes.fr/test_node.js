var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyblab_tweens',
  database : 'tweens_hyblab'
});
connection.connect();

  var post = {id: 5, sex: 'salam'};
  var strQuery = connection.query('INSERT INTO gender SET ?', post, function(err,result)
  {
  	if(err)	{
  		throw err;
  	}else{
  		console.log(strQuery.sql);
  	}
  });