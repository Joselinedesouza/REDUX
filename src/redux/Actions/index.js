export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

export const addToFavourites = (companyName) => ({
  type: ADD_TO_FAVOURITES,
  payload: companyName,
});

export const removeFromFavourites = (companyName) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: companyName,
});

export const fetchJobsBySearch = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: SET_SEARCH_RESULTS, payload: data });
      } else {
        alert("Errore nel fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
