export const generateSlug = (text) => {
  return text.toLowerCase().replace(" ", "-");
};

export const generateId = (fileName) => {
  return fileName.replace(/\.md$/, "");
};
