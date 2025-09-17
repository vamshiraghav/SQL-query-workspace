import { Stack } from "@mui/material";
import { QueryEditor } from "./QueryEditor";
import { QueryResults } from "./QueryResults";

export function QueryWorkbench({ query, setQuery, rows, elapsedMs, onRun, onCopy }) {
    return (
        <Stack spacing={2}>
            <QueryEditor value={query} onChange={setQuery} onRun={onRun} onCopy={onCopy} />
            <QueryResults rows={rows} elapsedMs={elapsedMs} height={520}/>
        </Stack>
    );
}