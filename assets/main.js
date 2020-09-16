window.onload = () => {
  let begin = document.getElementById("start");
  let year11 = document.getElementById("year-2011");
  let year14 = document.getElementById("year-2014");
  let year18 = document.getElementById("year-2018");
  let year20 = document.getElementById("year-2020");

  begin.addEventListener("click", nextYear);
  document.getElementById("nextBtn2011").addEventListener("click", nextYear);
  document.getElementById("nextBtn2014").addEventListener("click", nextYear);
  document.getElementById("nextBtn2018").addEventListener("click", nextYear);
  document.getElementById("nextBtn2020").addEventListener("click", nextYear);

  function nextYear() {
    if (this.id === "start") {
      year11.setAttribute("style", "display:block;");
      begin.setAttribute("style", "display:none;");
    } else if (this.id === "nextBtn2011") {
      year14.setAttribute("style", "display:block;");
      year11.setAttribute("style", "display:none;");
    } else if (this.id === "nextBtn2014") {
      year18.setAttribute("style", "display:block;");
      year14.setAttribute("style", "display:none;");
    } else if (this.id === "nextBtn2018") {
      year20.setAttribute("style", "display:block;");
      year18.setAttribute("style", "display:none;");
    }

    let test = document.getElementsByClassName("yearsul");
    for (let i = 0; i < test.length; i++) {
      const yearsUl = test[i];
      let time11 = yearsUl.children[0].textContent;
      let time14 = yearsUl.children[1].textContent;
      let time18 = yearsUl.children[2].textContent;
      let time20 = yearsUl.children[3].textContent;
    }
  }

  // for (let i = 0; i < nextBtn.length; i++) {
  //   let btn = nextBtn[i]
  //   let year2011 = document.getElementById('year-2011')
  //   btn.addEventListener('click', () => {
  //       var year2014 = document.getElementById("year-2014");
  //       year2014.scrollIntoView();
  //       year2014.style.visibility='visible';
  //       year2014.style.display='block';
  //       year2011.style.display='none';

  //       var year2018 = document.getElementById("year-2018");
  //       year2018.scrollIntoView();
  //       year2018.style.visibility='visible';
  //       year2018.style.display='';

  //     console.log(btn);
  //     console.log('Yes');
  //   });
  // }
};
