const request=require('request');
const yargs=require('yargs');

const geocode=require('./geocode/geocode.js')
const weather=require('./weather/weather.js')

const argv=yargs
.options({
  a:{
    demand:true,
    alias:'address',
    describe:'Address to watch weather for',
    string:true
  }
})
.help()
.alias('help','h')
.argv;

//console.log(argv);
geocode.geocodeAddress(argv.a,(errorMessage,result)=>
{
  if(errorMessage)
  {
    console.log(errorMessage);
  }
  else {
      console.log(JSON.stringify(result,undefined,2));
      weather.weatherreport(result,(errorMessage,output)=>
      {
        if(errorMessage)
        {
          console.log(errorMessage);
        }
        else
          {
            console.log('Temprature in '+ result.address+' is '+JSON.stringify(output,undefined,2));
          }
        });
      }
});
