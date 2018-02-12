const request=require('request');
var geoAddress =(adress,callback)=>{
  var encodedAddress = encodeURIComponent(adress);

  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${adress}`,
    json:true
  },(error,response,body)=>{
  if(error)
  {
    callback('unable to connect to Google servers');
  }else if(body.status==='ZERO_RESULTS'){
    callback('Unable to find this address');
  }
  else if(body.status==='OK'){
    callback(undefined,{
  address:  body.results[0].formatted_address,
  latitude:body.results[0].geometry.location.lat,
  longitude:body.results[0].geometry.location.lng
  });
}
  });
};
module.exports={
   geoAddress
};
//36acbc3c7b9014e87fe0aa0064cb21a8
