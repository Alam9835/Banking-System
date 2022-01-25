let transferButton = document.getElementById("transferBtn");
transferButton.addEventListener("click", () => {
  let addAmount = document.getElementById("addAmount");
  let money = localStorage.getItem("money");
  if (money == null) {
    moneyObj = [];
  } else {
    moneyObj = JSON.parse(money);
  }

  moneyObj.push(addAmount.value);
  localStorage.setItem("money", JSON.stringify(moneyObj));
  addAmount.value = "";
  showAmount();
});



const showAmount = () => {
  let money = localStorage.getItem("money");
  if (money == null) {
    moneyObj = [];
  } else {
    moneyObj = JSON.parse(money);
  }

  let html = "";
  moneyObj.forEach((element, index) => {
    html += ` <div class="noteCard">

              <tr>
                <th scope="row"> ${index + 1}</th>
                  <td><button type="button" class="btn btn-secondary btn-md">

                  <span class="badge">$</span>${element}
                  </button></td>
                  <td><button id="${index}" class="btn btn-success fa btn-md">Done</button></td>
                  <td><button id="${index}" onclick="deleteHistory(this.id)" class="btn btn-danger fa btn-md">Delete</button></td>
              </tr>


             </div>   `;
  });

  let notesElm = document.getElementById("transationAmountSection");
  if (moneyObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = ``;
  }
};



const deleteHistory = (index) => {
  let money = localStorage.getItem("money");
  if (money == null) {
    moneyObj = [];
  } else {
    moneyObj = JSON.parse(money);
  }
  moneyObj.splice(index, 1);
  localStorage.setItem("money", JSON.stringify(moneyObj));
  showAmount();
};

showAmount();
