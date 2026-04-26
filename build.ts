const shared = {
    entrypoints: ['src/index.ts'],
    sourcemap: 'inline' as const,
    minify: true,
    external: ['@colorhythm/zeroperl-ts']
};

await Promise.all([
    Bun.build({
        ...shared,
        outdir: 'dist/esm',
        format: 'esm',
        target: 'browser',
        naming: '[name].js',
    }),

    Bun.build({
        ...shared,
        outdir: 'dist/cjs',
        format: 'cjs',
        target: 'node',
        naming: '[name].cjs',
    }),
]);

export {};
