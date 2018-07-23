import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt data correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const newText = {
    target: {
      value: "new text"
    }
  };
  wrapper.find("input").simulate("change", newText);
  expect(setTextFilter).toHaveBeenLastCalledWith("new text");
});

test("should sort by date", () => {
  const newSort = {
    target: {
      value: "date"
    }
  };
  wrapper.setProps({ filters: altFilters });
  wrapper.find("select").simulate("change", newSort);
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  const newSort = {
    target: {
      value: "amount"
    }
  };
  wrapper.find("select").simulate("change", newSort);
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
  const testDates = {
    startDate: moment(0),
    endDate: moment(0).add(3, "days")
  };
  wrapper.find("DateRangePicker").prop("onDatesChange")(testDates);
  expect(setStartDate).toHaveBeenCalledWith(testDates.startDate);
  expect(setEndDate).toHaveBeenCalledWith(testDates.endDate);
});

test("should handle date focus changes", () => {
  const calendarFocused = "endDate";
  wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
