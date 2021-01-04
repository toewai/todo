const toDo = require('../models/todo.model');
exports.findAll = function(req, res) {
toDo.findAll(function(err, todo) {
  if (err)
  res.send(err);
  console.log('res', todo);
  res.send(todo);
});
};
exports.create = function(req, res) {
const new_toDo = new toDo(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
toDo.create(new_toDo, function(err, todo) {
  if (err)
  res.send(err);
  res.json({error:false,message:"To Do added successfully!",data:todo});
});
}
};
exports.findById = function(req, res) {
toDo.findById(req.params.id, function(err, todo) {
  if (err)
  res.send(err);
  res.json(todo);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    toDo.update(req.params.id, new toDo(req.body), function(err, employee) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'To Do List successfully updated' });
});
}
};
exports.delete = function(req, res) {
toDo.delete( req.params.id, function(err, employee) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'To Do Task successfully deleted' });
});
};