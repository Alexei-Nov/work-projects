How to use it:
Add the stylesheet ‘rSlider.css’ and JavaScript ‘rSlider.js’ to your html page.
    <link rel="stylesheet" href="css/rSlider.min.css">
    <script src="js/rSlider.min.js"></script>

Create a normal text input field for the range slider.
    <input type="text" id="slider" class="slider">

Create a new range slider from the text field.
    var mySlider = new rSlider({
        target: '#slider',
        values: [2008, 2009, 2010, 2011, ...],
        range: true // range slider
    });

More configs to customize the range slider.
    var mySlider = new rSlider({
        target: '#slider',
        values: [2008, 2009, 2010, 2011, ...],
        range: true // range slider
        set:    null, // an array of preselected values
        width:    null,
        scale:    true,
        labels:   true,
        tooltip:  true,
        step:     null, // step size
        disabled: false, // is disabled?
        onChange: null // callback
    });

API methods.
    // Returns selected values.
    mySlider.getValue();
    // Disables the range slider
    mySlider.disabled(true);
    // Callback
    mySlider.onChange(function (values) { 
    // argument values represents current values 
    });
    // Sets new values
    mySlider.setValues(10, 20);
    // Destroys the range slider
    mySlider.destroy();