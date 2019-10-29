'use strict'

{
    const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
        // https://developer.mozilla.org/ja/docs/Learn/HTML/Howto/Use_data_attributes
        const suffix = this.dataset.sizing || '';
        // to set the value
        // https://www.w3schools.com/jsref/met_cssstyle_setproperty.asp
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

}