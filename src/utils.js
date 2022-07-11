import images from './images.json';

const removeAcento = (text) => {
  if (!text) return;
  text = text.toLowerCase();
  text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
  text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
  text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
  text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
  text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
  text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
  return text;
};

export const getAllAstronauts = () => {
  images.map((i) => {
    delete i.background_color;
    delete i.name;
  });
  return images;
};

export const getRandomAstronaut = () => {
  const image = images[Math.floor(Math.random() * images.length)];
  delete image.background_color;
  delete image.name;
  return image;
};

export const getAstronauts = (page, take, search) => {
  const cPage = page || 1;
  const cTake = take || images.length;
  const skip = cPage
    ? cPage === 1
      ? 0
      : (Number(cPage) - 1) * Number(cTake)
    : undefined;

  const filteredList = search
    ? images.filter((i) =>
        i.tags_br.some((c) => removeAcento(c) === removeAcento(search))
      )
    : images;

  const list = filteredList.slice(skip, skip + cTake);
  list.map((i) => {
    delete i.background_color;
    delete i.name;
  });

  return {
    totalCount: images.length,
    hasNextPage: page * take < images.length,
    astronauts: list,
  };
};
