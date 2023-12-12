document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('songs__name');
    const table = document.getElementById('table__songs');
    const resultElement = document.getElementById('result');

    let correctAnswers = 0;
    let enteredSongs = [];
    const totalSongs = 33;

    inputField.addEventListener('input', function () {
        const inputValue = inputField.value;

        if (isCorrectSong(inputValue) && !enteredSongs.includes(inputValue.toLowerCase())) {
            const row = table.insertRow(0);
            const cell = row.insertCell(0);
            cell.textContent = inputValue;

            correctAnswers++;
            enteredSongs.push(inputValue.toLowerCase());
            inputField.value = "";
        }

        updateResult();
    });

    function isCorrectSong(songName) {
        const validSongs = [
            "longshot", "fluctuate", "2all", "conversation", "sidetrack",
            "encore", "basically", "intermission", "mission", "coincide",
            "overlap", "7", "twice", "soundcheck", "postpone", "anything", 
            "glasgow", "oxygen", "emily", "red",
            "heathrow", "outside", "homesick", "kathleen", "cocoon",
            "fallout", "pacifier", "hourglass", "business", "26", "rango", 
            "sidewinder", "tyrants"
        ];

        return validSongs.includes(songName.toLowerCase());
    }

    function updateResult() {
        resultElement.textContent = `Correct Answers: ${correctAnswers}/${totalSongs}`;
    }
});