import * as React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { categoriesData } from "../../redux/actions/categoryActions";

export default function Grouped() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  if (selectedCategory){
    console.log(selectedCategory.name)
  }
  
  const myCategoryData = useSelector((state) => state.categoryData);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(categoriesData());
  }, [dispatch]);

  const options = myCategoryData.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  const handleCategoryChange = (event, value) => {
    setSelectedCategory(value);
  };

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}
      sx={{ width: 300 }}
      onChange={handleCategoryChange}
      value={selectedCategory}  // Ensure the value is provided
      isOptionEqualToValue={(option, value) => option.id === value.id} // Custom equality check
      renderInput={(params) => (
        <TextField {...params} label="With categories" />
      )}
    />
  );
}
