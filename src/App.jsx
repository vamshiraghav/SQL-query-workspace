import { useMemo, useState } from 'react'
import './App.css'
import { PageHeader } from './Pageheader'
import { Grid } from '@mui/material'
import { QueryWorkbench } from './QueryWorkBench'
import { SidePanel } from './SidePanel'
import { EMPLOYEES } from './data'


export default function App() {
  const [query, setQuery] = useState("SELECT * FROM employees ORDER BY last_name;");
  const [rows, setRows] = useState(EMPLOYEES);
  const [elapsedMs, setElapsedMs] = useState(1295);
  const [history, setHistory] = useState([]);


  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(query);
    } catch (e) { }
  };


  const runQuery = () => {
    const started = performance.now();
    let data = [...EMPLOYEES];


    const lower = query.toLowerCase();
    if (lower.includes("where") && lower.includes("salary") && lower.includes(">")) {
      const match = lower.match(/salary\s*>\s*(\d+)/);
      if (match) {
        const thr = Number(match[1]);
        data = data.filter((r) => r.salary > thr);
      }
    }
    if (lower.includes("order by last_name")) {
      data.sort((a, b) => a.last_name.localeCompare(b.last_name));
    } else if (lower.includes("order by employee_id")) {
      data.sort((a, b) => a.employee_id - b.employee_id);
    } else if (lower.includes("order by salary desc")) {
      data.sort((a, b) => b.salary - a.salary);
    }


    const elapsed = Math.floor(Math.random() * 1000) + 400; // add a fake network parse delay
    setElapsedMs(elapsed);
    setRows(data);
    setHistory((h) => [{query,time:Date.now()}, ...h].slice(0, 20));
  };


  const handleUseQuery = (sql) => setQuery(sql);


  const subtitle = useMemo(
    () => `Demo application with mock data`,
    []
  );


  return (
    <Grid container justifyContent={'space-between'} spacing={2} >
      <Grid item size={12} >
        <PageHeader subtitle={subtitle} />
      </Grid>

      <Grid container size={12} spacing={2} justifyContent={'space-between'} alignItems={'flex-start'} >
        <Grid item size={8} >
          <QueryWorkbench
            query={query}
            setQuery={setQuery}
            rows={rows}
            elapsedMs={elapsedMs}
            onRun={runQuery}
            onCopy={handleCopy}
          />
        </Grid>
        <Grid item size={4}  >
          <SidePanel onUseQuery={handleUseQuery} history={history} />
        </Grid>
      </Grid>
    </Grid>
  );
}
