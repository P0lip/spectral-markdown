export default (results, path) => (code, message) => {
  const result = {
    path: path.slice(),
    message,
  };

  if (code in results) {
    results[code].push(result);
  } else {
    results[code] = [result];
  }
};
