export const selectCatalog = (state) => state.cars.items;
export const selectCar = (state) => state.cars.item;
export const state = (state) => state;
export const selectTotal = (state) => state.cas.total; 

export const selectLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;

export const selectFilter = (state) => state.filters.values;
export const selectNameFilter = (state) => state.filters.location;

export const mapStateToProps = (state) => ({favorites: state.filters.favorites});