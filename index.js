
  const menuLinks = document.querySelectorAll('nav ul li a');
  const checkbox = document.getElementById('check');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      checkbox.checked = false; 
    });
  });
