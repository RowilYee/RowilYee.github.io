import {
  Box,
  Typography,
  TextField,
  Autocomplete,
  Table,
  Stack,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { useState } from "react";

function SalesForm() {
  const oumList = [
    {
      value: "KG",
    },
    {
      value: "LEN",
    },
    {
      value: "PC",
    },
    {
      value: "UNIT",
    },
  ];
  const material = [
    { label: "PVC PIPE" },
    { label: "Lockscreen" },
    { label: "Colgate" },
  ];
  const headers = [
    { header: "Material Description" },
    { header: "Oum" },
    { header: "Quantity" },
  ];

  const [states, setState] = useState([
    { name: "", matDesc: "", quantity: "", oum: "PC" },
  ]);
  const [selectedData, setSelectedData] = useState();

  const handleChange = (e: any) => {
    const value = e.target.value;
    setState({ ...states, [e.target.name]: value });
    console.log(states);
  };

  const handleClick = () => {
    console.log(selectedData);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography fontSize={30}>Sales Invoice</Typography>
      <Box border="solid" display="flex" width="1000px">
        <Stack>
          <TextField
            variant="standard"
            label="Customer Name"
            type="text"
            name="name"
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <Autocomplete
            disablePortal
            options={material}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Material Description"
                name="matDesc"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                size="medium"
                onSelect={handleChange}
              />
            )}
          />
          <TextField
            variant="standard"
            label="Quantity"
            name="quantity"
            type="number"
            onSelect={handleChange}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            select
            label="OUM"
            name="oum"
            defaultValue="PC"
            SelectProps={{
              native: true,
            }}
            variant="standard"
            onChange={handleChange}
          >
            {oumList.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </TextField>
          <button type="button" onClick={handleClick}>
            Save
          </button>
        </Stack>
        <Stack>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {headers.map((d) => {
                    return <TableCell key={d.header}>{d.header}</TableCell>;
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {states.map((row: any) => (
                  <TableRow
                    key={row.matDesc}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{row.matDesc}</TableCell>
                    <TableCell align="right">{row.oum}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Box>
    </Box>
  );
}

export default SalesForm;
