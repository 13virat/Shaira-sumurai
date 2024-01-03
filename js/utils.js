function collision({ object1, object2 }) {
    return (
      object1.position.y + object1.height >= object2.position.y &&//bottom
      object1.position.y <= object2.position.y + object2.height &&//up
      object1.position.x <= object2.position.x + object2.width &&//left
      object1.position.x + object1.width >= object2.position.x//right
    )
  }
  