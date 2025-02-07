document.addEventListener("DOMContentLoaded", function() {
    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    
    function renderBoard() {
        let gameBoard = document.getElementById("tic-tac-toe");
        gameBoard.innerHTML = "";
        board.forEach((cell, index) => {
            let cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            cellDiv.innerText = cell;
            cellDiv.onclick = () => makeMove(index);
            gameBoard.appendChild(cellDiv);
        });
    }

    function makeMove(index) {
        if (board[index] === "") {
            board[index] = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            renderBoard();
        }
    }

    document.getElementById("tic-tac-toe").style.display = "grid";
    document.getElementById("tic-tac-toe").style.gridTemplateColumns = "repeat(3, 100px)";
    document.getElementById("tic-tac-toe").style.gap = "5px";
    document.getElementById("tic-tac-toe").style.margin = "20px auto";

    renderBoard();
});
              
