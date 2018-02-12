//console.log('working');
var getUser=(id,callback)=>{
  var user={
    id :id,
    name:'Michael'
  };
  setTimeout(()=>{
    callback(user);
  },3000);

};
getUser(31,(userObject)=>{
  console.log(userObject);
});
