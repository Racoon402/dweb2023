let count = 2;
let selectRowIndex = 1;
let selectColumnIndex = 2;

const table = document.getElementById("recode");

table.addEventListener("click", function (event) {

    const recodeRow = table.querySelectorAll('tr');
    var clickedCell = event.target;

    if (clickedCell.tagName === "TD") {
        selectRowIndex = clickedCell.parentNode.rowIndex; // 행 번호
        selectColumnIndex = clickedCell.cellIndex + 1; // 열 번호
    }
    highlight()
});

function highlight() {
    const recodeRow = table.querySelectorAll('tr');

    if (selectColumnIndex === 1) {
        const selectedRow = recodeRow[selectRowIndex].querySelectorAll('td:first-child');
        const selectedCols = recodeRow[selectRowIndex].querySelectorAll('td');
        for (let i = 1; i < count; i++) {
            const tempRow = recodeRow[i].querySelectorAll('td:first-child');
            tempRow[0].classList.remove('active');
            for (let j = 1; j < 6; j++) {
                const temp = recodeRow[i].querySelectorAll('td');
                temp[j].classList.remove('active');
            }
        }
        selectedRow[0].classList.add("active");
        selectedCols[1].classList.add("active");
        selectColumnIndex++;
    }
    else if (selectColumnIndex >= 7) {
        for (let i = 1; i < count; i++) {
            const tempRow = recodeRow[i].querySelectorAll('td:first-child');
            tempRow[0].classList.remove('active');
            for (let j = 1; j < 6; j++) {
                const temp = recodeRow[i].querySelectorAll('td');
                temp[j].classList.remove('active');
            }
        }
    }
    else {
        const selectedRow = recodeRow[selectRowIndex].querySelectorAll('td:first-child');
        const selectedCols = recodeRow[selectRowIndex].querySelectorAll('td');
        for (let i = 1; i < count; i++) {
            const tempRow = recodeRow[i].querySelectorAll('td:first-child');
            tempRow[0].classList.remove('active');
            for (let j = 1; j < 6; j++) {
                const temp = recodeRow[i].querySelectorAll('td');
                temp[j].classList.remove('active');
            }
        }
        selectedRow[0].classList.add("active");
        selectedCols[selectColumnIndex - 1].classList.add("active");
    }
}

function createTable() {
    const removebutton = document.getElementById("removebutton");
    removebutton.style.display = "block"; // Show the Reset button

    const table = document.getElementById("recode");

    const rowData = [];
    const row = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement("td");
        if (j === 0) {
            cell.textContent = count + "순";
        } else {
            cell.textContent = ""; // Clear the cell content
        }
        row.appendChild(cell);
    }
    table.appendChild(row);

    count++;
    selectColumnIndex = 1;
    selectRowIndex = count - 1;
    highlight();
}

function deleteTableRow() {
    const tableContainer = document.getElementById("recode");
    tableContainer.removeChild(tableContainer.lastElementChild); // Clear the table

    count--;
    if (count === 2) {
        const removebutton = document.getElementById("removebutton");
        removebutton.style.display = "none"; // Hide the Reset button
    }
}

function handleClick(number) {
    const row = table.querySelectorAll('#recode tr');
    const value = row[selectRowIndex].querySelectorAll('td.active');
    value[1].textContent = number;
    selectColumnIndex++;
    highlight();
}

function saveToJson() {
    // 테이블 셀 내용을 추출하여 객체 배열로 변환
    const table = document.getElementById("recode");
    const rows = table.getElementsByTagName("tr");
    const data = [];
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        const rowData = {};
        for (let j = 0; j < cells.length; j++) {
            rowData[`cell${j + 1}`] = cells[j].textContent.trim();
        }
        data.push(rowData);
    }

    // 객체 배열을 JSON 문자열로 변환
    const jsonData = JSON.stringify(data, null, 2);

    // JSON 파일로 다운로드
    const blob = new Blob([jsonData], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "table_data.json";
    a.click();
}
