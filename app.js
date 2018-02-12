//const request=require('request');
const yargs =require('yargs');
const request=require('request');
const geocode=require('./geocode/geocode');
const weather=require('./weather/weather.js');
const argv=yargs.options({
  a:{
    demand:true,
    alias:'address',
    describe:'adress to fetch weather for',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

//console.log(argv);
geocode. geoAddress(argv.address,(errorMessage, results)=>{
  if(errorMessage)
  {
    console.log(errorMessage);
  }else{
  console.log(results.address);
  weather.getWeather(results.latitude,results.longitude,(error,results)=>{
      if(error)
      {
        console.log(error);
      }else{
      console.log(`Temperature: ${results.temperature}`);
      console.log(`Apparent Temperature: ${results.apparent}`);
    }
    });

}
});
