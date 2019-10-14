  window.addEventListener("load", startPage);


  function startPage() {
      // console.log("start page function")
  }

  const v1 = [88, 3, 67];
  const v2 = [75, 23, 8, 52];
  const v3 = [96, 11, 18, 33];


  const omkreds = Math.PI * 100;

  //  // console.log(omkreds, total, faktor);

  function animer(values, diagram) {
      const offset = [0];
      let total = 0;
      values.forEach(v => total += v);

      const faktor = omkreds / total;

      diagram.forEach((cirkel, i) => {
          //// console.log(cirkel, i)
          offset.push(values[i] + offset[i]);
          // // console.log(offset);
          cirkel.style.strokeDasharray = values[i] * faktor + " " + omkreds;
          cirkel.style.strokeDashoffset = -offset[i] * faktor;
      })
      console.log(total);
  }

  document.querySelector(".button1").addEventListener("click", show1);
  document.querySelector(".button2").addEventListener("click", show2);
  document.querySelector(".button3").addEventListener("click", show3);


  document.querySelector(".RM1-container").addEventListener("click", showRM1);
  document.querySelector(".RM2-container").addEventListener("click", showRM2);
  document.querySelector(".RM3-container").addEventListener("click", showRM3);

  function show1() {
      const diagram = document.querySelectorAll("#diagram1 circle");

      document.querySelector(".diagram-container1").style.display = "block";
      setTimeout(() => animer(v1, diagram), 100);

  }

  function show2() {

      const diagram = document.querySelectorAll("#diagram2 circle");

      document.querySelector(".diagram-container2").style.display = "block";

      setTimeout(() => animer(v2, diagram), 100);

  }

  function show3() {
      const diagram = document.querySelectorAll("#diagram3 circle");

      document.querySelector(".diagram-container3").style.display = "block";
      //  setTimeout(animer3, 100);
      setTimeout(() => animer(v3, diagram), 100);


  }

  function showRM1() {
      document.querySelector(".question1-answer-container").style.display = "block";
      document.querySelector(".question2-answer-container").style.display = "none";
      document.querySelector(".question3-answer-container").style.display = "none";

  }

  function showRM2() {
      document.querySelector(".question2-answer-container").style.display = "block";
      document.querySelector(".question1-answer-container").style.display = "none";
      document.querySelector(".question3-answer-container").style.display = "none";
  }

  function showRM3() {
      document.querySelector(".question3-answer-container").style.display = "block";
      document.querySelector(".question1-answer-container").style.display = "none";
      document.querySelector(".question2-answer-container").style.display = "none";
  }




  /* burger menu */

  const toggler = document.querySelector('.menu__toggler');
  const menu = document.querySelector('.mobile-menu-dropdown');
  const atags = document.querySelector('.atags-mobile-menu');

  splash();
  footer();

  toggler.addEventListener('click', () => {
      toggler.classList.toggle('active');
      atags.classList.toggle('fade-in-left');
      menu.classList.toggle('active');
  });

  (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-46156385-1', 'cssscript.com');
  ga('send', 'pageview');


  function splash() {
      document.querySelector(".overskrift1").textContent = "Rådet for sikker Trafik";
      document.querySelector(".overskrift2").textContent = "Det er ikke op til os, det er op til dig! ";
  }

  function footer() {
      document.querySelector(".foelg").textContent = "Følg rådet for Sikker Trafik på de sociale medier";
      document.querySelector("footer").style.backgroundColor = "#28292C";



  }
