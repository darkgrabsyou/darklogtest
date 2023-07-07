$(document).ready(function() {
  $('#tracked-image').on('load', function() {
    var ip = '';
    var userAgent = navigator.userAgent;

    fetch('https://api.ipify.org/?format=json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        ip = data.ip;
        var message = 'IP: ' + ip + '\nConsole: ' + userAgent;

        // Display the message to the user
        alert(message);
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  });
});

function generateCustomImage(userId, parameter) {
  // Generate a custom image based on the provided parameter and the user ID.
  // Replace this with your custom image generation logic.
  // Return the URL of the generated image.
  return `https://example.com/custom-images/${userId}-${parameter}.jpg`;
}

$(document).ready(function() {
  $('#tracked-image').on('load', function() {
    var userId = '1101898235804647447'; // Replace with the actual user ID
    var parameter = 'dark'; // Replace with the desired parameter

    var customImageUrl = generateCustomImage(userId, parameter);
    if (!customImageUrl) {
      console.error('Failed to generate the custom image.');
      return;
    }

    // Update the image source with the custom image URL
    $(this).attr('src', customImageUrl);
  });
});
