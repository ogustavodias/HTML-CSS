function initCalc() {
  const button = document.querySelector(
    "#main-card .container .detail-line .button"
  );
  button.addEventListener("click", calcDate);

  function calcDate() {
    const inputs = Array.from(
      document.querySelectorAll("#main-card .container input")
    );
    let dateString = "";
    let output;
    inputs
      .slice()
      .reverse()
      .forEach((item, index) => {
        output = document.querySelector(
          `span[data-js="${item.getAttribute("id")}"]`
        );
        if (index !== inputs.length - 1) {
          dateString += `${item.value}/`;
        } else {
          dateString += `${item.value}`;
        }
      });
    const currentYear = new Date();
    const yearsOutput = new Date(dateString);
    console.log(currentYear.getFullYear() - yearsOutput.getFullYear());
  }
}

initCalc();
