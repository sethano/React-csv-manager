const csvParse = (text) => {
  const result = {
    data: []
  };

  const [...content] = text.split('\n');

  content.forEach((item) => {
    result.data.push(item.split(',').slice(0, 3));
  });

  return result;
};

export default csvParse;
