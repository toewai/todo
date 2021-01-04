var dbConn = require('../../config/db.config');
//Employee object create
var toDo = function(todo){
  this.job = todo.job;
  this.status         = todo.status ? employee.status : 1;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};
toDo.create = function (newToDo, result) {
dbConn.query("INSERT INTO todo set ?", newToDo, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
toDo.findById = function (id, result) {
dbConn.query("Select * from todo where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
toDo.findAll = function (result) {
dbConn.query("Select * from todo", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('ToDo : ', res);
  result(null, res);
}
});
};
toDo.update = function(id, todo, result){
dbConn.query("UPDATE todo SET  WHERE id = ?", [todo.job,todo.status, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
toDo.delete = function(id, result){
dbConn.query("DELETE FROM todo WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= toDo;