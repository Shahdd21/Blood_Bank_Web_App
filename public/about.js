const card1 = document.getElementById("card1");
card1.style.position = "absolute";
card1.style.left = "100.5rem";
card1.style.top = "0";
card1.style.transition = "width height 1s";

card1.addEventListener("mouseover", function() {
  card1.style.boxShadow = "1rem 1rem 3em rgba(0, 0, 0, 0.150000006)";
  card1.style.height = "36rem";
  card1.style.width = "46rem";
});

card1.addEventListener("mouseout", function() {
  card1.style.boxShadow = "0 0.5rem 2.5em rgba(0, 0, 0, 0.150000006)";
  card1.style.height = "35rem";
  card1.style.width = "45rem";
});

const card2 = document.getElementById("card2");
card2.style.position = "absolute";
card2.style.left = "50.3rem";
card2.style.top = "0";
card2.style.transition = "width height 1s";

card2.addEventListener("mouseover", function() {
  card2.style.boxShadow = "1rem 1rem 3em rgba(0, 0, 0, 0.150000006)";
  card2.style.height = "36rem";
  card2.style.width = "46rem";
});

card2.addEventListener("mouseout", function() {
  card2.style.boxShadow = "0 0.5rem 2.5em rgba(0, 0, 0, 0.150000006)";
  card2.style.height = "35rem";
  card2.style.width = "45rem";
});


const card3 = document.getElementById("card3");
    card3.style.position = "absolute";
    card3.style.left = "0";
    card3.style.top = "0";
    card3.style.transition = "width height 1s";
    
    card3.addEventListener("mouseover", function() {
      card3.style.boxShadow = "1rem 1rem 3em rgba(0, 0, 0, 0.150000006)";
      card3.style.height = "36rem";
      card3.style.width = "46rem";
    });
    
    card3.addEventListener("mouseout", function() {
      card3.style.boxShadow = "0 0.5rem 2.5em rgba(0, 0, 0, 0.150000006)";
      card3.style.height = "35rem";
      card3.style.width = "45rem";
    });