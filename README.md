# Test pkg

Commands:

```sh
# local folder
deno run main
deno run -N main.ts

# other folder
deno run -N path/to/sample-deno-pkg/main.ts

# remote
REMOTE_SCRIPT=https://raw.githubusercontent.com/oscar6echo/sample-deno-pkg/refs/heads/main/main.ts
REMOTE_DENO_JSON=https://raw.githubusercontent.com/oscar6echo/sample-deno-pkg/refs/heads/main/deno.json

# does not work if imports do not use fully qualified urls
deno run --reload -N $REMOTE_SCRIPT

# remote - manual selection of config with path (e.g. from one level up)
# works
deno run --config ./sample-deno-pkg/deno.json --reload -N $REMOTE_SCRIPT

# remote - manual selection of config with url
# does not works (--config accepts a path not a url, it seems)
deno run --config $REMOTE_DENO_JSON --reload -N $REMOTE_SCRIPT
```
