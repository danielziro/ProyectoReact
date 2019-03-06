export const filterText = (text = '') => ({
    type: 'FILTER_TEXT',
    text
});
 
export const startNota = (startNota) => ({
    type: 'START_Nota',
    startNota
});
 
export const endNota = (endNota) => ({
    type: 'END_Nota',
    endNota
});
 
export const sortBy = (sortType) => ({
    type: 'SORT_BY',
    sortType
});
 
const filtersReducerDefaultState = {
    text: '',
    sortBy: '',
    startNota: undefined,
    endNota: undefined
};
 
export const clear = () => ({
    type: 'CLEAR',
    defaultFilter: filtersReducerDefaultState
});