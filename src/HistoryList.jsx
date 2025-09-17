import React from "react";
import { Box, Button, Divider, List, ListItem, ListItemText, Paper, Stack, Typography } from "@mui/material";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";

export function HistoryList({ items, onUse }) {
    if (!items.length) {
        return (
            <Box sx={{ p: 2 }}>
                <Typography variant="body2" color="text.secondary">
                    No history yet. Run a query to see it here.
                </Typography>
            </Box>
        );
    }
    return (
        <List
            sx={{
                overflow: 'auto',
                maxHeight: 675,
            }}
        >
            {items.map(({ query: sql, time }, idx) => (
                <React.Fragment key={idx}>
                    <ListItem
                        secondaryAction={
                            <Button size="small" variant="outlined" onClick={() => onUse(sql)} alignItems="flex-start">
                                Use Query
                            </Button>
                        }

                        sx={{

                            alignItems: 'flex-start',
                            '& .MuiListItemSecondaryAction-root': {
                                top: 3,
                                transform: 'none',

                            }
                        }}
                    >
                        <ListItemText
                            primary={
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <HistoryRoundedIcon fontSize="small" />
                                    <Typography variant="subtitle2">Previous query</Typography>
                                </Stack>
                            }
                            secondary={<>
                                <Paper backgroundColor="transparent" elevation={0} sx={{ p: 1, backgroundColor: '#f5f5f5' }} >
                                    <Typography variant="caption" color="text.primary"   >
                                        {sql}
                                    </Typography>
                                    <br />

                                </Paper>
                                <Typography variant="caption" color="text.secondary"   >
                                    {new Date(time).toString()}
                                </Typography>
                            </>
                            }
                        />
                    </ListItem>
                    {idx < items.length - 1 && <Divider component="li" />}
                </React.Fragment>
            ))}
        </List>
    );
}