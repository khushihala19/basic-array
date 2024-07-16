 let array = [];

        function renderTable() {
            const tableBody = document.querySelector("#array-table tbody");
            tableBody.innerHTML = ""; 
            array.forEach((element, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index}</td>
                    <td>${element}</td>
                    <td>
                        <button onclick="editElement(${index})">Edit</button>
                        <button onclick="deleteElement(${index})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }

        document.getElementById("array-form").onsubmit = function(event) {
            event.preventDefault();
            const elementInput = document.getElementById("element");
            const indexInput = document.getElementById("index");
            const element = elementInput.value;
            const index = parseInt(indexInput.value);
            if (index === -1) {
                array.push(element);
            } else {
                array[index] = element;
                indexInput.value = "-1"; 
            }
            elementInput.value = ""; 
            renderTable();
        };

        function editElement(index) {
            document.getElementById("element").value = array[index];
            document.getElementById("index").value = index;
        }

        function deleteElement(index) {
            array.splice(index, 1);
            renderTable();
        }
        renderTable();