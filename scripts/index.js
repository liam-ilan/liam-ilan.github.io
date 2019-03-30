
// a box class for every project
class Box {
  constructor(titleInput, textInput, imgInput, linkInput) {
    // get inputs
    this.title = titleInput
    this.text = textInput
    this.img = imgInput
    this.link = linkInput

    // the wrapper
    let box = document.createElement('a')
    box.className = 'box'
    box.href = this.link

    // the image
    let img = document.createElement('img')
    img.src = this.img
    img.className = 'box-img'

    // the title
    let title = document.createElement('div')
    title.innerHTML = this.title
    title.className = 'box-title'

    // the text
    let text = document.createElement('div')
    text.innerHTML = this.text
    text.className = 'box-text'

    // append all items to the container
    box.appendChild(img)
    box.appendChild(title)
    box.appendChild(text)

    // add the box to boxes
    document.getElementById('boxes').appendChild(box)
  }

}

data = data.map((item) => new Box(item.title, item.description, item.image, item.link))