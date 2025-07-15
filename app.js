
  let currentPage = 0;
  const container = document.getElementById('cardPages');
  const cards = document.querySelectorAll('.container1');
  const totalPages = cards.length;

  document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      container.scrollTo({
        left: currentPage * container.clientWidth,
        behavior: 'smooth'
      });
    }
  });

  document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      container.scrollTo({
        left: currentPage * container.clientWidth,
        behavior: 'smooth'
      });
    }
  });

