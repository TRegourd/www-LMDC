export const filterArticles = (array, string) => {
  return array.filter((o) => {
    return Object.keys(o).some((k) => {
      if (k !== "tags") {
        return o[k].toLowerCase().includes(string.toLowerCase());
      }
      if (k === "tags") {
        return o[k].some((t) => {
          return t.tag.toLowerCase().includes(string.toLowerCase());
        });
      }
    });
  });
};
