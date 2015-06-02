$(document).ready(function(){
    
    // Click Button
    $('button').click(function(){
    
        // Store Input
        var zip = $('input').val();
        console.log(zip);

        // GET WEATHER
        $.simpleWeather({
            zipcode: zip,
            success: function(weather){

    Get Condition Code
    var currentCode = weather.code;
    console.log(currentCode);
    
    if ( currentCode >= 30 && currentCode <= 36 ) {
          
      $('[data-role="page"]').addClass('sunny');
      
    }
    
    // Homescreen
    $('[data-role="content"] .temp').text( weather.temp + weather.units.temp );
    $('[data-role="content"] .city').text( weather.city + ' , ' + weather.region );
    
   //Check first console.log(weather.image);
    
    $('.weather-image').attr('src', weather.image);
    
    //Check first console.log(weather);
    
  }, 
  
  error: function(error) {
      console.log(error);
  }
  
});// end weather
        
});//end click
    
    // Clear Input on Click
    $('input:text').click(function(){
        $('input').val('');
    });// end clear input    
    
});// end document




