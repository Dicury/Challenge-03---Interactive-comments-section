function filterArray(array, idPassado) {
  const newArray = array.filter((comentario) => comentario.id !== idPassado);
  return newArray;
}

export default filterArray;
