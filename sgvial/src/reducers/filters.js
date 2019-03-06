const filtersReducerDefaultState = {
    text: '',
    sortBy: '',
    startNota: undefined,
    endNota: undefined
};
 
export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'FILTER_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'START_Nota':
            return {
                ...state,
                startNota: action.startNota
            };
        case 'END_Nota':
            return {
                ...state,
                endNota: action.endNota
            };
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortType
            };
        case 'CLEAR':
            return {
                ...state,
                text: action.defaultFilter.text,
                sortBy: action.defaultFilter.sortBy,
                startNota: action.defaultFilter.startNota,
                endNota: action.defaultFilter.endNota
            };
        default:
            return state;
    }
}