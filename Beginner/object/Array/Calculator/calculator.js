<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <div id="display">

    </div>

    <div style="display: flex;">
        <h5 onclick="appendValue(1)">1</h5>
        <h5 onclick="appendValue(2)">2</h5>
        <h5 onclick="appendValue(3)">3</h5>
        <h5 onclick="appendValue(4)">4</h5>
        <h5 onclick="appendValue(5)">5</h5>
        <h5 onclick="appendValue(6)">6</h5>
        <h5 onclick="appendValue(7)">7</h5>
        <h5 onclick="appendValue(8)">8</h5>
        <h5 onclick="appendValue(9)">9</h5>
        <h5 onclick="appendValue(0)">0</h5>

    </div>

    <div style="display: flex;">
        <h5 onclick="appendValue('+')">+</h5>
        <h5 onclick="appendValue('-')">-</h5>
        <h5 onclick="appendValue('*')">*</h5>
        <h5 onclick="appendValue('/')">/</h5>
        <h5 onclick="calculate()">=</h5>
    </div>

    <script>
        var value1 = "";
        var displayTag = document.getElementById("display");
        function appendValue(value) {
            value1 = value1 + value;
            displayTag.innerHTML = "<span>"+value1+"</span>";
            console.log(value1)
        }

        function calculate() {
            console.log(eval(value1));
            displayTag.innerHTML = "<span>"+value1+"</span>";
            // displayTag.innerHTML = `<span>${eval(value1)}"</span>`;

            value1 = "";
        }
    </script>
</body>
</html>