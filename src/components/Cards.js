import { useState } from 'react';
import Card from './Card';
const Cards = () => {
  const [items, setItems] = useState(
    [
      { id: 1, img: 'img/11.png', stat: '' },
      { id: 1, img: 'img/11.png', stat: '' },
      { id: 2, img: 'img/2.png', stat: '' },
      { id: 2, img: 'img/2.png', stat: '' },
      { id: 3, img: 'img/3.jpg', stat: '' },
      { id: 3, img: 'img/3.jpg', stat: '' },
      { id: 4, img: 'img/4.jpg', stat: '' },
      { id: 4, img: 'img/4.jpg', stat: '' },
      { id: 5, img: 'img/5.jpg', stat: '' },
      { id: 5, img: 'img/5.jpg', stat: '' },
      { id: 6, img: 'img/6.jpg', stat: '' },
      { id: 6, img: 'img/6.jpg', stat: '' },
      { id: 7, img: 'img/7.jpg', stat: '' },
      { id: 7, img: 'img/7.jpg', stat: '' },
      { id: 8, img: 'img/8.png', stat: '' },
      { id: 8, img: 'img/8.png', stat: '' },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  const checkCard = (current) => {
    if (items[current].id === items[prev].id) {
      items[current].stat = 'correct';
      items[prev].stat = 'correct';
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = 'wrong';
      items[prev].stat = 'wrong';
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = '';
        items[prev].stat = '';
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    if (prev === -1) {
      items[id].stat = 'active';
      setItems([...items]);
      setPrev(id);
    } else {
      checkCard(id);
    }
  };

  return (
    <div className='container'>
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Cards;
