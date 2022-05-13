export const sortArray = (field) => {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}