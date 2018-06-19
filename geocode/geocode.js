const request=require('request');


var geocodeAddress = (address,callback) =>
{
const encodedAddress=encodeURIComponent(address);

request({
  url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json:true
},(error,response,body)=>
{
  if(error)
  {
    callback('There is an error');
  }
  else if(body.status ==="ZERO_RESULTS")
  {
    callback('No such address exists');
  }
  else if(body.status==="OK"){
    callback(undefined,{
      address:body.results[0].formatted_address,
      lat:body.results[0].geometry.location.lat,
      lng:body.results[0].geometry.location.lng
    });
  }
  else {
    callback("There was some problem");
  }
});
};

module.exports=
{
  geocodeAddress
};
