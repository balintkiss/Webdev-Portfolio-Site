document.getElementById('home-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  document.getElementById('main-one').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  document.getElementById('main-two').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('services-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  document.getElementById('main-four').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  document.getElementById('main-five').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('service-btn').addEventListener('click', function() {
  document.getElementById('main-four').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('home-footer').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  document.getElementById('main-one').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('services-footer').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  document.getElementById('main-four').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-footer').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  document.getElementById('main-five').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('aboutus-footer').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  document.getElementById('main-two').scrollIntoView({ behavior: 'smooth' });
});

ű