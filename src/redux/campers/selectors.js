export const selectLoading = state => state.campers.loading;

export const selectFilter = state => state.campers.filter;

export const selectAllCampers = state => state.campers.data.items;

export const selectCamper = state => state.campers.camper;

export const selectTotal = state => state.campers.data.total;
