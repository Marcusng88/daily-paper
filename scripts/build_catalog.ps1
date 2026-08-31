$scriptPath = Join-Path $PSScriptRoot "build_catalog.mjs"
& node $scriptPath
if ($LASTEXITCODE -ne 0) {
  throw "Catalog generation failed with exit code $LASTEXITCODE."
}
