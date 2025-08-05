/*NAVBAR MENUSU İÇİN KODLAR*/

document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var navbar = document.querySelector('.navbar');
  var windowWidth = window.innerWidth;

  if (scrollPosition > 100) {
    navbar.style.boxShadow = '0 5px 50px 0px black';
    navbar.style.borderBottom = '5px solid white';
    navbar.style.background = 'linear-gradient(to right, rgb(17, 121, 178) 0%, #f56100 50%, rgb(17, 121, 178) 100%)';
    navbar.style.animation = 'gradientAnimation 1.5s linear forwards';
    navbar.style.backgroundSize = '200% 100%';
    if (windowWidth >= 768) {
      navbar.style.padding = '40px 0px';
    }

  } else {
    navbar.style.borderBottom = '5px solid rgba(23, 23, 23, 0.453)';
    navbar.style.boxShadow = 'none';
    navbar.style.animation = 'gradientAnimationBack 1s linear forwards';
    if (windowWidth >= 768) {
      navbar.style.padding = '30px 0px';
    }
  }
});

/*LOGO İÇİN KODLAR*/

var navbarBrand = document.querySelector('.navbar-brand');

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    navbarBrand.classList.add('scrolled');
  } else {
    navbarBrand.classList.remove('scrolled');
  }

  var bodyHeight = document.body.scrollHeight - window.innerHeight;

  if (scrollPosition < 20) {
    navbarBrand.classList.add('revert-animate');
  } else {
    navbarBrand.classList.remove('revert-animate');
  }
});

/*CARDLARIN ANİMASYONLA GELMESİ İÇİN KODLAR*/

ScrollReveal().reveal('.card', {
    delay: 200,
    duration: 1000,
    scale: 0.7,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
  reset: true,
});

const emailInput = document.getElementById('emailInput');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

emailInput.addEventListener('input', function () {
  if (emailRegex.test(this.value)) {
    this.setCustomValidity('');
  }
  else {
    this.setCustomValidity('Please enter a valid email address');
  }
});

/*FORM KONTROLÜ İÇİN KODLAR*/

const nameInput = document.getElementById("name");

nameInput.addEventListener("input", function () {
  const inputValue = nameInput.value.trim();

  if (
    inputValue === "" ||
    !/^[a-zA-ZüğışçöÜĞİŞÇÖ]+(\s+[a-zA-ZüğışçöÜĞİŞÇÖ]+){1,2}$/.test(inputValue)
  ) {
    nameInput.setCustomValidity('Enter your name and surname, avoiding special characters and numbers');
  } else {
    nameInput.setCustomValidity('');
  }
});


/* PROJE GRAFİĞİ KODLARI*/

// const ctx = document.getElementById('myChart').getContext('2d');

// new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Cocreaid', 'Ticon', 'Emerge', 'Escola', 'Fit4future', 'Milc', 'C-Evil', 'Techster', 'Plasit Value'],
//     datasets: [{
//       data: [67, 100, 100, 100, 73, 100, 100, 100, 83],
//       borderWidth: 3,
//       backgroundColor: ['#194a73', '#ff9000', '#0d6efd', '#dc3545', '#0dcaf0', '#6f42c1', '#212529', '#20c997'],
//       borderColor: '#bac8d5',
//     }]
//   },
//   options: {
//     indexAxis: 'y', // Set to 'y' for horizontal bar chart
//     maintainAspectRatio: false,
//     scales: {
//       y: { // y-axis is now the horizontal axis
//         ticks: {
//           color: ['#194a73', '#ff9000', '#0d6efd', '#dc3545', '#0dcaf0', '#6f42c1', '#212529', '#20c997'],
//           font: {
//             weight: 'bold',
//             size: 12
//           }
//         },
//         grid: {
//           color: '#ddd'
//         }
//       },
//       x: { // x-axis is now the vertical axis
//         beginAtZero: true,
//         max: 100,
//         stepSize: 20,
//         ticks: {
//           color: '#333',
//           callback: function (value) {
//             return value % 20 === 0 ? value + '%' : '';
//           }
//         },
//         grid: {
//           color: '#fff'
//         }
//       }
//     },
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         backgroundColor: '#222',
//         titleColor: '#fff',
//         bodyColor: '#ccc',
//         callbacks: {
//           label: function (tooltipItem) {
//             return tooltipItem.label;
//           },
//         }
//       }
//     },
//     responsive: true,
//   }
// });
