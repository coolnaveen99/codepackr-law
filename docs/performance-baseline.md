# Performance Baseline (Phase 30)

## Targets

- Application shell stays lightweight as catalogues grow
- Large topic / judgment collections load on demand
- Filters and search remain responsive on mid-range phones

## Practices

1. **Lazy-load** large topic and judgment modules (existing dynamic imports pattern)
2. **Memoize** filter/search results (`useMemo`) on home and tool lists
3. **Virtualize** long lists when row counts exceed ~200 interactive rows
4. **Avoid** loading the entire draft catalogue into expensive first-paint paths
5. **Web Workers** only for proven heavy local document processing

## Measurement

- Production build size review after major data additions
- Manual mobile pass on tool-heavy pages
- Do not regress `npm run build` time without documentation

## Offline interaction

Shell SW must not cause the UI to present stale legal content as current. Offline banner remains visible when disconnected.
