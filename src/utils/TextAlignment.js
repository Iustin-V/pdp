export const TextAlignment = (text) => {
  if (!text) {
    return;
  }
  return text.split("\n").reduce((total, line) => [total, <br />, line]);
};
