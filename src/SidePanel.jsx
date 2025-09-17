import { Box, Divider, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import { SampleQueriesList } from "./SampleQueriesList";
import { HistoryList } from "./HistoryList";
import { useState } from "react";

export function SidePanel({ onUseQuery, history }) {
    const [tab, setTab] = useState(0);
    return (
        <Paper variant="outlined"   >
            <Stack direction="row" alignItems="center" justifyContent="space-between" >
                <Typography variant="subtitle2" color="text.secondary" width={120} sx={{ p: 2 }}>
                    {tab === 0 ? "Sample Queries" : "History"}
                </Typography>
                <Tabs value={tab} onChange={(_, v) => setTab(v)} size="small" aria-label="side panel tabs">
                    <Tab label="Sample" />
                    <Tab label="History" />
                </Tabs>
            </Stack>
            <Divider />
            <Box sx={{ maxHeight: 920}}>
                {tab === 0 ? (
                    <SampleQueriesList onUse={onUseQuery} />
                ) : (
                    <HistoryList items={history} onUse={onUseQuery} />
                )}
            </Box>
        </Paper>
    );
}