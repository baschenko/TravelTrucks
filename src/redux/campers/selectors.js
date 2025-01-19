export const selectLoading = state => state.campers.isLoading;

export const selectFilter = state => state.filters.name;

export const selectAllCampers = state => state.campers.items;

export const selectCamper = state => state.campers.camper;

export const selectTotal = state => state.campers.total;

export const selectPerPage = state => state.campers.perPage;

export const selectPage = state => state.campers.page;
