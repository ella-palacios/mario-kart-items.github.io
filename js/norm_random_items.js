const NormalItems = ['banana', 'triple bananas', 'green shell', 'triple green shells', 'red shell', 'triple red shells', 'blue shell', 
                      'bob-omb', 'mushroom', 'triple mushrooms', 'golden mushroom', 'bullet', 'squid', 'lightning', 'star', 'fire flower', 
                      'boomerang flower', 'pirahna plant', 'sonic speaker', 'super eight', 'coin', 'king boo'];
function NormalRandomItems(){
    const normItemSize = NormalItems.length;
    const numNormItems = Math.floor(Math.random() * (normItemSize +1); 
    const itemsCopy = [...NormalItems];

    const itemsUsed = [];
    for (let i = 0; i < numNormItems; i++){
      const randomIndex = Math.floor(Math.random() * itemsCopy.length);
      itemsUsed.push(itemsCopy[randomIndex]);
      itemsCopy.splice(randomIndex, 1);
    }
  return itemsUsed;
}
