const request=require('request');

var weatherreport=(result,callback)=>
{
request({
  url:`https://api.darksky.net/forecast/61227b3f32f8a8e234f1e69f78f3dc19/${result.lat},${result.lng}`,
  json:true
},
(error,message,body) =>
{
if(error)
{
  callback('Cannot access google servers');
}
else if(message.statusCode===400)
{
  callback('Incoreect format');
}
else {
callback(undefined,{
  temp:body.currently.temperature,
  appaerentTemp:body.currently.apparentTemperature
});
}
});
};

module.exports=
{
  weatherreport
}
