<!DOCTYPE html>
<html>

<head>
    <title>Walatka (na wybitki) - gra Wielkanocna</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div id="all">
        <h3>Walatka</h1>


            <button type="button" class="button" id="playButton">Atak!</button>
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


            <p>
                <h4>Wyjaśnienie</h4>
                W czasie świątecznych biesiad do zabaw wykorzystywano pisanki i kraszanki.
                Najczęściej były to gry zwane walatką lub wybitką, czy też zabawą na wybitki.
                Polegała ona na toczeniu po stole pisanek albo stukanie się pisankami trzymanymi w ręku.
                Wygrywał ten, czyja pisanka się nie rozbiła.
            </p>
            <p>Po naciśnięciu guzika <em style="color: lime"> Start</em>, złap mocno telefon i zamachnij się jak jajkiem!</p>

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