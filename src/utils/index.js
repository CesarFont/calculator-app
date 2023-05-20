export const classList = (...list) => {
  return list.reduce((prev, item) => {
    if (typeof item === "string") {
      return [...prev, item];
    }
    const listItems = Object.keys(item).reduce((prev, key) => {
      if (item[key]) {
        return [...prev, key];
      }
      return prev;
    }, []);
    return [...prev, ...listItems];
  }, []).join(' ');
};
