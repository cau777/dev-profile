export const getMyAge = () => {
  return new Date(new Date() - new Date(2005, 0, 20)).getFullYear() - 1970
}