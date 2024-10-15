function toggleReadMore(button) {
  const description = button.previousElementSibling;

  if (description.classList.contains('expanded')) {
    description.classList.remove('expanded');
    button.textContent = 'Read More';
    description.style.maxHeight = '1.6em'; // Collapse text
  } else {
    description.classList.add('expanded');
    button.textContent = 'Read Less';
    description.style.maxHeight = 'none'; // Expand text
  }
}