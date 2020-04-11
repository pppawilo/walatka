<!DOCTYPE html>
<html>

<head>
    <title>Walatka (na wybitki) - gra Wielkanocna</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div id="all">
        <h3>Walatka</h1>
            <button type="button" onclick="checkPermission()" class="button" id="startButton">Start</button>
            <div id="scoreP">
                <form id=" form">
                    Imię: <input id="formName" type="text" value="">
                    <br>
                    Wynik: <input id="score" type="number" value="0" readonly>
                    <br>
                    <input type="button" onclick="formSubmit()" value="Zapisz wynik!" class="button" id="scoreButton">
                </form>
            </div>

            <div id="egg">
                &#129370;
            </div>


            <h3>Ostatnie wyniki:</h3>
            <ul>
                <?php
                $data = array_slice(file('wyniki.txt'), -10);

                foreach ($data as $line) {
                    echo "<li>" . $line . "</li>";
                }
                ?>
            </ul>

            <div id=engine>
                <p id="accelerationX">X</p>
                <p id="accelerationY">Y</p>
                <p id="accelerationZ">Z</p>
                <p id="accelerationXfinal">X final</p>
                <p id="accelerationYfinal">Y final</p>
                <p id="accelerationZfinal">Z final</p>
            </div>






    </div>
    <script src="walatka.js"></script>
</body>

</html>