
// visualizar ordenado
/*export default (Post, { text, sortBy, startNota, endNota }) =>{
    return Post.filter(Post => {
        const textMatch =
            Post.Nombre.toLowerCase().includes(text.toLowerCase()) ||
            Post.Asignatura.toLowerCase().includes(text.toLowerCase());
 
     //   const startNotaMatch = typeof startNota !== 'char' || startNota <= Post.Nota;
      //  const endNotaMatch = typeof endNota !== 'char' || Post.Nota <= endNota;
 
        return textMatch && startNotaMatch && endNotaMatch;
    })((Post1, Post2) => {
        if (sortBy === 'Nombre') {
            return Post1.Nombre.localeCompare(Post2.Nombre);
        } else if (sortBy === 'Nota') {
            return Post1.Nota < Post2.Nota ? -1 : 1;
        }
    });
}*/