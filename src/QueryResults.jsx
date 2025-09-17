import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableContainer,
  TablePagination,
} from "@mui/material";

export function QueryResults({ rows = [], elapsedMs = 0, height = 520 }) {
  const columns = ["employee_id", "first_name", "last_name", "department", "salary", "hire_date"];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const maxPage = rowsPerPage > 0 ? Math.max(0, Math.ceil(rows.length / rowsPerPage) - 1) : 0;
    if (page > maxPage) setPage(0);
  }, [rows.length, rowsPerPage, page]);

  const paginatedRows = useMemo(() => {
    if (rowsPerPage < 0) return rows; // "All"
    const start = page * rowsPerPage;
    return rows.slice(start, start + rowsPerPage);
  }, [rows, page, rowsPerPage]);

  if (rows.length === 0) {
    return <div>No data</div>;
  }

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
        <Typography variant="subtitle2" color="text.secondary">
          Query Results
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip size="small" label={`${rows.length} rows`} />
          <Chip size="small" label={`${elapsedMs}ms`} />
        </Stack>
      </Stack>

      <TableContainer sx={{ maxHeight: height }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((c) => (
                <TableCell key={c} sx={{ whiteSpace: "nowrap" }}>
                  {c}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((r) => (
              <TableRow key={r.employee_id} hover>
                {columns.map((c) => (
                  <TableCell key={c}>{r[c]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <TablePagination
          component="div"
          count={rows.length}
          page={page}
          onPageChange={(_e, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
          rowsPerPageOptions={[5, 10, 25, 50, { label: "All", value: -1 }]}
          showFirstButton
          showLastButton
          labelRowsPerPage="Rows"
        />
      </Box>
    </Paper>
  );
}
