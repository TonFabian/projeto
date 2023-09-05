function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./vscode/assets/assets/whats-light.png")
  } else {
    img.setAttribute("src", "./vscode/assets/assets/whats.png")
  }

  // pegar a tag img

  //se tiver light mode, adicionar a imagem light
  // substituir a imagem
}
