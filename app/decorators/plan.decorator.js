const planDecorator = async (plans) =>{
  
  const mappedItem = plans.map((el)=>{

    const features = el.plan_features.map((el)=>{
      return {
        id: el.id,
        name: el.feature.name,
      };
    });

    return {
      id: el.id,
      name: el.name,
      sku: el.sku,
      features,
    };
  });
  return await Promise.all(mappedItem);
};

module.exports = {
  planDecorator,
};