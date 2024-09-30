$('form').on('submit', (e) => {
  e.preventDefault();
  const tarefa = $('#tarefa').val();
  if (tarefa !== '') {
    $('ul').append(`<li>${tarefa}</li>`);
    $('#tarefa').val('');
  }
});

$('ul').on('click', 'li', function() {
  $(this).toggleClass('line');
});
