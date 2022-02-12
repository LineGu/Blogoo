module.exports = {
    resolveSnapshotPath: (testPath, snapshotExtension) =>
        testPath
            .replace('components/', 'test/__snapshots__/components/')
            .replace('containers/', 'test/__snapshots__/containers/') + snapshotExtension,

    resolveTestPath: (snapshotFilePath, snapshotExtension) =>
        snapshotFilePath
            .replace('test/__snapshots__/components/', 'components/')
            .replace('test/__snapshots__/containers/', 'containers/')
            .slice(0, -snapshotExtension.length),

    testPathForConsistencyCheck: 'components/some.test.ts',
};
