const featureDecorator = async (feature) =>{
  
  const mappedItem = feature.map((el)=>{

    return {
      id: el.id,
      name: el.name,
    };
  });
  return await Promise.all(mappedItem);
};

module.exports = {
  featureDecorator,
};