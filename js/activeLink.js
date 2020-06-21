function linkAtivo(tag) {
  const listaMenu = document.getElementById('lista-menu');
  let linkItem = listaMenu.getElementsByTagName('a');

  for (let i = 0; i < linkItem.length; i++) {
    linkItem[i].classList.remove('active');
  }

  tag.classList.add('active');
}
