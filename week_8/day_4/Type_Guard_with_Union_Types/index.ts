type MyUser = {
    type: 'user';
    name: string;
    age: number;
  };
  
  type MyProduct = {
    type: 'product';
    id: number;
    price: number;
  };
  
  type MyOrder = {
    type: 'order';
    orderId: string;
    amount: number;
  };
  
  function handleData(items: (MyUser | MyProduct | MyOrder)[]): string[] {
    return items.map(item => {
      switch (item.type) {
        case 'user':
          return `Hello ${item.name}, you are ${item.age} years old.`;
        case 'product':
          return `Product #${item.id} costs $${item.price}.`;
        case 'order':
          return `Order ${item.orderId} has an amount of $${item.amount}.`;
        default:
          const _exhaustiveCheck: never = item;
          return `Unknown item type`;
      }
    });
  }
  
  const data: (MyUser | MyProduct | MyOrder)[] = [
    { type: 'user', name: 'Alice', age: 30 },
    { type: 'product', id: 101, price: 59.99 },
    { type: 'order', orderId: 'A123', amount: 120.5 }
  ];
  
  console.log(handleData(data));
  