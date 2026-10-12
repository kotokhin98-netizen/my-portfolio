// Анимация печатающегося текста на главной странице
const textElement = document.querySelector('.typing-text');
if (textElement) {
  const words = ['Разработчик', 'Студент', 'DevOps Энтузиаст'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      textElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      textElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
  type();
}

// Анимация прогресс-баров при загрузке страницы навыков
const bars = document.querySelectorAll('.bar');
bars.forEach(bar => {
  const width = bar.style.width;
  bar.style.width = '0';
  setTimeout(() => {
    bar.style.width = width;
  }, 300);
});

// Демонстрация обновления (для 3-го коммита)
const updateNote = document.getElementById('update-note');
if (updateNote) {
  updateNote.textContent = '✅ Сайт успешно обновлен через CI/CD!';
}
