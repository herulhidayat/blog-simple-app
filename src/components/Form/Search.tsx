import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";

interface ISearch {
  defaultValue?: string
  callbackSearch: (v:any) => void
}

export default function Search({ callbackSearch, defaultValue }: ISearch) {
  const [searchValue, setSearchValue] = useState<string>("")

  const handleEnterSearch = (event:any) => {
    if(event.key == "Enter") {
      event.preventDefault()
      callbackSearch(searchValue)
    }
  }

  useEffect(() => {
    if(defaultValue) setSearchValue(defaultValue)
  }, [defaultValue])

  return (
    <Paper
      // component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400, bgcolor: "transparent", border: "1px solid var(--color-primary)" }}
      variant="outlined"
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "var(--color-primary)" }}
        placeholder="Search..."
        value={searchValue}
        inputProps={{ "aria-label": "search" }}
        onKeyUp={handleEnterSearch}
        onChange={(e:any) => setSearchValue(e.target.value)}
      />
      <IconButton type="button" sx={{ p: "10px", color: "var(--color-primary)" }} aria-label="search" onClick={() => {callbackSearch(searchValue)}}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
