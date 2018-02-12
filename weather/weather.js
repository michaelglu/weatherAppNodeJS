var request=require('request');
var getWeather=(lat,long,callback)=>{
  request({
    url:`https://api.darksky.net/forecast/36acbc3c7b9014e87fe0aa0064cb21a8/${lat},${long}`,
    json:true
  },(error,response,body)=>{
    if(error)
    {
      callback('Unable to connect to weather servers');
    }
    else if(response.statusCode===400)
    {
      callback('Unable to fetch weather');
    }
    else if (response.statusCode===200){
    callback(undefined, {temperature: body.currently.temperature,apparent:body.currently.apparentTemperature});
  }
  });

};
module.exports={
  getWeather
};
