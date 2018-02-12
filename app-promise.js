//const request=require('request');
const yargs =require('yargs');
const request=require('request');
const axios =require('axios');

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
  var encodedAddress = encodeURIComponent(argv.address);
 var geocodeUrl=  `https://maps.googleapis.com/Laps/api/geocode/json?address=${encodedAddress}`;

 axios.get(geocodeUrl).then((response)=>{
   console.log(response.data);
 }).catch((e)=>{
    if(e.code===404){
      console.log('Unable to connect to API servers');
    }
   //console.log(e);
 });
