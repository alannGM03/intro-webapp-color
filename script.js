document.addEventListener('DOMContentLoaded', function() {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const colorBox = document.getElementById('colorBox');
    const hexCode = document.getElementById('hexCode');
    const colorPicker = document.getElementById('colorPicker');

    function updateColor() {
        const red = parseInt(redRange.value);
        const green = parseInt(greenRange.value);
        const blue = parseInt(blueRange.value);

        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

        colorBox.style.backgroundColor = rgbColor;
        hexCode.textContent = hexColor.toUpperCase();

        // Actualizar los valores de los inputs numéricos
        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;

        // Actualizar el color picker
        colorPicker.value = hexColor;
    }

    function updateRangeFromInput() {
        const red = parseInt(redInput.value) || 0;
        const green = parseInt(greenInput.value) || 0;
        const blue = parseInt(blueInput.value) || 0;

        redRange.value = red;
        greenRange.value = green;
        blueRange.value = blue;

        updateColor();
    }

    function updateColorFromPicker() {
        const hex = colorPicker.value;
        const red = parseInt(hex.slice(1, 3), 16);
        const green = parseInt(hex.slice(3, 5), 16);
        const blue = parseInt(hex.slice(5, 7), 16);

        redRange.value = red;
        greenRange.value = green;
        blueRange.value = blue;

        updateColor();
    }

    redRange.addEventListener('input', updateColor);
    greenRange.addEventListener('input', updateColor);
    blueRange.addEventListener('input', updateColor);

    redInput.addEventListener('input', updateRangeFromInput);
    greenInput.addEventListener('input', updateRangeFromInput);
    blueInput.addEventListener('input', updateRangeFromInput);

    colorPicker.addEventListener('input', updateColorFromPicker);

    updateColor();  // Para que inicie con la primera tonalidad
});
