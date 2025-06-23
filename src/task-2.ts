interface ProductTask2 {
    readonly id: number;          
    title: string;
    description?: string;          
  }
  
  const product: ProductTask2 = {
    id: 1,
    title: "Tablet",
    description: "Compact and fast",
  };
  
  console.log(`Product: ${JSON.stringify(product)}`);
  