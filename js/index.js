

// Get The Weather ------- CHENEY
$.simpleWeather({
  location: '99004', 
  unit: 'f', 
  success: function( weather ) {
    
    // Homescreen
    $('[data-role="content"] .temp1').text( weather.temp + weather.units.temp );
    $('[data-role="content"] .city1').text( weather.city + ' , ' + weather.region );
    $('.weather-image1').attr('src', weather.image);
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
    }, 
  
  error: function(error) {
      console.log(error);
  }
  
});

// // Get The Weather ------- CUSTOM
//    // Click Button
//     $('button').click(function(){
    
//         // Store Input
//         var zip = $('input').val();
//         console.log(zip);

//         // Get The Weather ---------- CUSTOM
// $.simpleWeather({
//     zipcode: zip;
//     success: function(weather){
                
//     $('[data-role="content"] .temp0').text( weather.temp + weather.units.temp );
//     $('[data-role="content"] .city0').text( weather.city + ' , ' + weather.region );
//     $('.weather-image0').attr('src', weather.image);
//     }, 
           
//         });// end weather
        
//     });//end click
    
//     // Clear Input on Click
//     $('input:text').click(function(){
//         $('input').val('');
//     });// end clear input    

// });



