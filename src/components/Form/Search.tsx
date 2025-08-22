import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400, bgcolor: "transparent", border: "1px solid var(--color-primary)" }}
      variant="outlined"
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "var(--color-primary)" }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton type="button" sx={{ p: "10px", color: "var(--color-primary)" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
