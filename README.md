# Test pkg

Commands:

```sh
# local folder
deno run main
deno run -N main.ts

# other folder
deno run -N path/to/sample-deno-pkg/main.ts

# remote
deno run --reload -N https://raw.githubusercontent.com/oscar6echo/sample-deno-pkg/refs/heads/main/main.ts
# test with various import styles in util.ts
```
