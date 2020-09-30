window.onload = () => {
  let begin = document.getElementById("start");
  let year11 = document.getElementById("year-2011");
  let year14 = document.getElementById("year-2014");
  let year18 = document.getElementById("year-2018");
  let year20 = document.getElementById("year-2020");

  //IDs of year bottom year indicator
  let timeline = document.getElementById("yearsUl");
  //Get ID of every button for each year
  begin.addEventListener("click", nextYear);
  document.getElementById("nextBtn2011").addEventListener("click", nextYear);
  document.getElementById("nextBtn2014").addEventListener("click", nextYear);
  document.getElementById("nextBtn2018").addEventListener("click", nextYear);
  document.getElementById("nextBtn2020").addEventListener("click", nextYear);

  function nextYear() {
    if (this.id === "start") {
      year11.setAttribute("style", "display:grid;");
      timeline.setAttribute("style", "display:block;");
      begin.setAttribute("style", "display:none;");
    } else if (this.id === "nextBtn2011") {
      year14.setAttribute("style", "display:grid;");
      year11.setAttribute("style", "display:none;");
      timeline.children[0].classList.remove("active");
      timeline.children[1].classList.add("active");
    } else if (this.id === "nextBtn2014") {
      year18.setAttribute("style", "display:grid;");
      year14.setAttribute("style", "display:none;");
      timeline.children[1].classList.remove("active");
      timeline.children[2].classList.add("active");
    } else if (this.id === "nextBtn2018") {
      year20.setAttribute("style", "display:grid;");
      year18.setAttribute("style", "display:none;");
      timeline.children[2].classList.remove("active");
      timeline.children[3].classList.add("active");
    } else {
      year11.setAttribute("style", "display:grid;");
      year20.setAttribute("style", "display:none;");
      timeline.children[3].classList.remove("active");
      timeline.children[0].classList.add("active");
    }

    //   let test = document.getElementsByClassName("yearsul");
    //   for (let i = 0; i < test.length; i++) {
    //     const yearsUl = test[i];
    //     let time11 = yearsUl.children[0].textContent;
    //     let time14 = yearsUl.children[1].textContent;
    //     let time18 = yearsUl.children[2].textContent;
    //     let time20 = yearsUl.children[3].textContent;
    //   }
    // }
  }
};
