
const counters = document.querySelectorAll('.count');

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');

    const updateCount = () => {
      const current = +counter.innerText.replace(/\D/g, ''); // Remove non-numeric chars
      const increment = Math.ceil(target / 100);

      if (current < target) {
        counter.innerText = `${(current + increment).toLocaleString()}`;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = `${target.toLocaleString()}+`;
      }
    };

    updateCount();
  });
};

// Trigger animation when section is visible
const section = document.querySelector('.impact-section');
const isMobile = window.innerWidth <= 768;
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.disconnect(); // Run only once
    }
  },
  { threshold: isMobile ? 0.1 : 0.5 } // Lower threshold for mobile
);

observer.observe(section);






//owl-carousel initialization
$(document).ready(function () {
  var owl = $("#client-carousel");
  owl.owlCarousel({
    // items: 4,        
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }

  });

  // Custom navigation events
  $("#next").click(function () {
    owl.trigger('next.owl.carousel');
  });

  $("#prev").click(function () {
    owl.trigger('prev.owl.carousel');
  });
});






