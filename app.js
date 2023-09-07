// Enter color receive code:
  var color1 = document.getElementById("color_1");
  var color2 = document.getElementById("color_2");
  var rgbDisplay1 = document.getElementById("rgb_display_1");
 
 
  color1.addEventListener("input", function () {
    var rgb = getRgbFromHex(color1.value);
    rgbDisplay1.textContent = ` RGB is rgb(${rgb})`;
  });

  color2.addEventListener("input", function () {
    var hexValue = color2.value.toUpperCase();
    var hexDisplay1 = document.getElementById("hex_display_1");
    hexDisplay1.textContent = `Hex code is ${hexValue} :`;
  });
  

  // Function to convert HEX to RGB
  function getRgbFromHex(hex) {
    hex = hex.replace(/^#/, "");
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return [r, g, b];
  }



  //=====================================================================
  //Enter code Receive Color:


//   FOR RGB:

  var rgbValue = document.getElementById("rgb_value");
  var rgbBox = document.getElementById("box");

  function update() {
    // Get the RGB value entered by the user
    var rgb = rgbValue.value;

    // Validate the RGB value using a regular expression
    var validRgbPattern = /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/;

    if (validRgbPattern.test(rgb)) {
      rgbBox.style.backgroundColor = rgb;
    } else {
      rgbBox.style.backgroundColor = "transparent";
      alert("Invalid RGB value. Please enter in the format 'rgb(r, g, b)'");
    }
  }




//   FOR HEX CODE:
  var hexInput = document.getElementById("hex_value");
  var hexBox = document.getElementById("hexbox");

  function hexcode() {
    var hexColor = hexInput.value;
    var validHexPattern = /^#[0-9A-Fa-f]{6}$/;

    if (validHexPattern.test(hexColor)) {
      hexBox.style.backgroundColor = hexColor;
    } else {
      hexBox.style.backgroundColor = "transparent";
      alert("Invalid HEX value. Please enter a valid HEX color code (#RRGGBB).");
    }
  }


