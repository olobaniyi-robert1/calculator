        let display = document.getElementById("display");

        function press(val) {
            display.value += val;
        }

        function calculate() {

            display.value = eval(display.value);
        }


        function clearDisplay() {
            display.value = "";
        }
        function backspace() {
            display.value = display.value.slice(0, -1)
        }
        function convcelsuis() {
            display.value = (display.value * 1.8) + 32

        }
        function convfahren() {
            display.value = (display.value - 32) * 5 / 9

        }
