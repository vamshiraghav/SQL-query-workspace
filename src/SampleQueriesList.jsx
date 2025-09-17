import { Button, Chip, Divider, List, ListItem, ListItemText, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { SAMPLE_QUERIES } from "./data";

export function SampleQueriesList({ onUse }) {
    return (
        <List dense>
            {SAMPLE_QUERIES.map((q, idx) => (
                <React.Fragment key={idx}>
                    <ListItem
                        secondaryAction={
                            <Button size="small" variant="outlined" onClick={() => onUse(q.sql)} >
                                Use Query
                            </Button>
                        }

                        sx={{

                            alignItems: 'flex-start',
                            '& .MuiListItemSecondaryAction-root': {
                                top: 13,         
                                transform: 'none',

                            }
                        }}

                    >
                        <ListItemText
                            primary={
                                <Stack direction="row" spacing={1} alignItems="center" margin={1}>
                                    <Typography variant="subtitle2">{q.title}</Typography>
                                    <Chip size="small" label={q.tag} />
                                </Stack>
                            }
                            secondary={
                                <Paper backgroundColor="transparent" elevation={0} sx={{ p: 1, backgroundColor: '#f5f5f5' }} >
                                    <Typography variant="caption" color="text.secondary"   >
                                        {q.sql}
                                    </Typography>
                                </Paper>
                            }
                        />
                    </ListItem>
                    {idx < SAMPLE_QUERIES.length - 1 && <Divider component="li" />}
                </React.Fragment>
            ))}
        </List>
    );
}