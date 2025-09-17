import { Box, Typography } from "@mui/material";

export function PageHeader() {
    return (
        <Box justifyContent={'center'} >
            <Typography variant="h5" fontWeight={700} gutterBottom>
                SQL Query Runner
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Execute SQL queries and view results in real time (demo with mock data).
            </Typography>
        </Box>
    );
}