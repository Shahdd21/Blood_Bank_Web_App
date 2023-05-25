// window.addEventListener('scroll', rightTolift = () =>{
// //    var main = document.querySelector('.middle_group1_img');
//    var main1 = document.querySelector('.middle_group2_content_title');
//    var main2 = document.querySelector('.middle_group2_content1');
//    var main3 = document.querySelector('.middle_group2_content2');
//    var main4 = document.querySelector('.middle_group2_content3');
//    var img3 = document.querySelector('.middle_group3_img');


//     var windowHeight= window.innerHeight;
//     // var revealtop = main.getBoundingClientRect().top;
//     var revealtop = main1.getBoundingClientRect().top;
//     var revealtop = main2.getBoundingClientRect().top;
//     var revealtop = main3.getBoundingClientRect().top;
//     var revealtop = main4.getBoundingClientRect().top;
//     var revealtop = img3.getBoundingClientRect().top;
//     var revealPoint = 200;

//     if(revealtop < windowHeight - revealPoint)
//     { 
//         // main.classList.add('rightTolift') 
//         main1.classList.add('rightTolift') 
//         main2.classList.add('rightTolift')
//         main3.classList.add('rightTolift') 
//         main4.classList.add('rightTolift') 
//         img3.classList.add('rightTolift') 
// }
// else{

//     //    main.classList.remove('rightTolift')
//        main1.classList.remove('rightTolift')
//        main2.classList.remove('rightTolift')
//        main3.classList.remove('rightTolift')
//        main4.classList.remove('rightTolift')
//        img3.classList.remove('rightTolift')
// }
// })

// window.addEventListener('scroll', leftToRight = () =>{
//     // var main = document.querySelector('#l');
//     // var main2= document.querySelector('#l2');
//      var img =document.querySelector('.middle_group2_img');
//      var title =document.querySelector('.middle_group3_content1');
//      var title2 =document.querySelector('.middle_group3_content2');

//      var windowHeight= window.innerHeight;
//     //  var revealtop = main.getBoundingClientRect().top;
//     //  var revealtop = main2.getBoundingClientRect().top;
//      var revealtop = img.getBoundingClientRect().top;
//      var revealtop = title.getBoundingClientRect().top;
//      var revealtop = title2.getBoundingClientRect().top;

//      var revealPoint = 200;
 
//      if(revealtop < windowHeight - revealPoint)
//      { 
//         //  main.classList.add('leftToRight') 
//         //  main2.classList.add('leftToRight')
//      img.classList.add('leftToRight')
//      title.classList.add('leftToRight')
//      title2.classList.add('leftToRight')

//  }
//        else{
//         // main.classList.remove('leftToRight')
//         // main2.classList.remove('leftToRight')
//         img.classList.remove('leftToRight')
//         title.classList.remove('leftToRight')
//         title2.classList.remove('leftToRight')

//  }
//  })
const navLinks = document.querySelectorAll ('nav a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    
    link.style.textShadow = '2px 2px 2px #717171';
    link.style.fontWeight = 'bold';
  });

  link.addEventListener('mouseout', () => {
    link.style.textDecoration = 'none';
    link.style.textShadow = 'none';
    link.style.fontWeight = 'bold';
  });
});




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