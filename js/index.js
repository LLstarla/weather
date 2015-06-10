// Get The Weather ------- CUSTOM
    // Click Button
    $('button').click(function(){
    
        // Store Input
        var zip = $('input').val();
        console.log(zip);

        // GET WEATHER
        $.simpleWeather({
            zipcode: zip,
            success: function(weather){
                
   // Homescreen
    $('.cust-temp').text( weather.temp + weather.units.temp );
    $('.cust-city').text( weather.city + ' , ' + weather.region );
    $('.cust-weather-image').attr('src', weather.image);
    $('.cust-high').text( weather.high + weather.units.temp);
    $('.cust-low').text( weather.low + weather.units.temp);
    $('.cust-rise').text( weather.sunrise);
    $('.cust-set').text( weather.sunset);
    },  
           
        });// end weather
        
    });//end click
    
    // Clear Input on Click
    $('input:text').click(function(){
        $('input').val('');
    });// end clear input    
    



// Get The Weather ------- CHENEY
$.simpleWeather({
  location: '99004', 
  unit: 'f', 
  success: function( weather ) {
    
    // Homescreen
    $('[data-role="content"] .temp1').text( weather.temp + weather.units.temp );
    $('[data-role="content"] .city1').text( weather.city + ' , ' + weather.region );
    $('.weather-image1').attr('src', weather.image);
    $('[data-role="content"] .high1').text( weather.high + weather.units.temp);
    $('[data-role="content"] .low1').text( weather.low + weather.units.temp);
    $('[data-role="content"] .rise1').text( weather.sunrise);
    $('[data-role="content"] .set1').text( weather.sunset);
    }, 
  
  error: function(error) {
      console.log(error);
  }
  
});

// Get The Weather ------- SPOKANE
$.simpleWeather({
  location: '99201', 
  unit: 'f', 
  success: function( weather ) {
    
   // Homescreen
    $('[data-role="content"] .temp2').text( weather.temp + weather.units.temp );
    $('[data-role="content"] .city2').text( weather.city + ' , ' + weather.region );
    $('.weather-image2').attr('src', weather.image);
    $('[data-role="content"] .high2').text( weather.high + weather.units.temp);
    $('[data-role="content"] .low2').text( weather.low + weather.units.temp);
    $('[data-role="content"] .rise2').text( weather.sunrise);
    $('[data-role="content"] .set2').text( weather.sunset);
    }, 
  
  error: function(error) {
      console.log(error);
  }
  
});

// Get The Weather ------- SEATTLE
$.simpleWeather({
  location: '98102', 
  unit: 'f', 
  success: function( weather ) {
    
    // Homescreen
    $('[data-role="content"] .temp3').text( weather.temp + weather.units.temp );
    $('[data-role="content"] .city3').text( weather.city + ' , ' + weather.region );
    $('.weather-image3').attr('src', weather.image);
    $('[data-role="content"] .high3').text( weather.high + weather.units.temp);
    $('[data-role="content"] .low3').text( weather.low + weather.units.temp);
    $('[data-role="content"] .rise3').text( weather.sunrise);
    $('[data-role="content"] .set3').text( weather.sunset);
    }, 
  
  error: function(error) {
      console.log(error);
  }
  
});




