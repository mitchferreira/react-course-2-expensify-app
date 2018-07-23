// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

// SET_START_DATE
// don't need to explicitly set undefined as a default, undefined is the default by default
export const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

// SET_END_DATE
// don't need to explicitly set undefined as a default, undefined is the default by default
export const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});
