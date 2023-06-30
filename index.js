function newImage(image, source, left, bottom) {
    image = document.createElement('img')
    image.src = source
    image.style.position = 'fixed'
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
    return image
}


newImage('greenCharacter', 'assets/green-character.gif', '100px', '100px')
newImage('pineTree', 'assets/pine-tree.png', '450px', '200px')
newImage('tree', 'assets/tree.png', '200px', '300px')
newImage('pillar', 'assets/pillar.png', '350px', '100px')
newImage('crate', 'assets/crate.png', '150px', '200px')
newImage('well', 'assets/well.png', '500px', '425px')


function newItem(image, source, left, bottom) {
    let item = newImage(image, source, left, bottom)
    item.addEventListener("click", function () {
        item.remove()
    })
}

newItem('sword', 'assets/sword.png', '500px', '405px')
newItem('staff', 'assets/staff.png', '600px', '100px')
newItem('shield', 'assets/shield.png', '165px', '185px')

//hard

