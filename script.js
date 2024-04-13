document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("taxForm");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("close-btn");
  const resultDiv = document.getElementById("result");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const errorIcons = document.querySelectorAll(".error-icon");
    errorIcons.forEach((icon) => (icon.style.display = "none"));

    const age = document.getElementById("selAge").value;
    const income = parseFloat(document.getElementById("income").value);
    const extraIncome = parseFloat(
      document.getElementById("extraIncome").value
    );
    const deductions = parseFloat(document.getElementById("deductions").value);
    if (!income) {
      document.getElementById("incomeError").innerHTML= "Please enter the income";
      document.getElementById("incomeError").style.display = "block";
      return;
    }
    if (!extraIncome) {
      document.getElementById("extraIncomeError").innerHTML= "Please enter the extra income";
      document.getElementById("extraIncomeError").style.display = "block";
      return;
    }
    if (age==" ") {
      document.getElementById("ageError").innerHTML= "Please select the Age";
      document.getElementById("ageError").style.display = "block";
      return;
    }
    if (!deductions) {
      document.getElementById("deductionsError").innerHTML= "Please enter the deductions";
      document.getElementById("deductionsError").style.display = "block";
      return;
    }

    let taxRate = 0;
    if (age === "<40") {
      taxRate = 0.3;
    } else if (age === ">=40 & <60") {
      taxRate = 0.4;
    } else if (age === ">60") {
      taxRate = 0.1;
    }
    const totalIncome = income + extraIncome - deductions;
    const taxableAmount = Math.max(totalIncome - 8, 0);
    const taxAmount = taxRate * taxableAmount;
    console.log(taxAmount,taxRate,taxableAmount,totalIncome);
    resultDiv.innerHTML = `<p><strong>Your overall income will be </strong></p><p> ${totalIncome.toFixed(
      2
    )}</p><p> after all deductions</p>
   `;
    modal.style.display = "block";
  });
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
