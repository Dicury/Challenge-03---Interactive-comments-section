function transformScoreArray(operation, array, idPassado) {
  const newArray = array?.map((comentario) => {
    if (comentario.id === idPassado) {
      if (operation === "adicionar") {
        comentario.score = comentario.score + 1;
      }
      if (operation === "subtrair") {
        comentario.score = comentario.score - 1;
      }
    }
    return comentario;
  });
  return newArray;
}

export default transformScoreArray;
