import {
    Paper,
    Typography,
    TextField,
    Stack,
    Button,
    IconButton,
    Tooltip,
} from "@mui/material";

import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

export function QueryEditor({ value, onChange, onCopy, onRun }) {
    return (
        <Paper variant="outlined" sx={{ p: 2 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                <Typography variant="subtitle2" color="text.secondary">
                    SQL Query Editor
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Tooltip title="Copy">
                        <IconButton size="small" onClick={onCopy}>
                            <ContentCopyRoundedIcon fontSize="small"  /> Copy 
                        </IconButton>
                    </Tooltip>
                    <Button onClick={onRun} variant="contained" startIcon={<PlayArrowRoundedIcon />}>
                        Run Query
                    </Button>̧
                </Stack>
            </Stack>
            <TextField
                value={value}
                onChange={(e) => onChange(e.target.value)}
                multiline
                minRows={6}
                fullWidth
                placeholder="SELECT * FROM employees ORDER BY last_name;"
            />
        </Paper>
    );
}