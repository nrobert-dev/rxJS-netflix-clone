export const IS_LOADING = '/actions/IS_LOADING';
export const setIsLoadingActionCreator = (status) => ({
    type: IS_LOADING,
    payload: status
})

export const SET_PREFERENCE = '/actions/SET_PREFERENCE';
export const setPreferenceActionCreator = (movieName, preference) => ({
    type : SET_PREFERENCE,
    payload : {movieName, preference}
});