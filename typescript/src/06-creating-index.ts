function createIndex<T>(list: T[], key: keyof T): Record<string, T[]> {
    const DEFAULT_INDEX: Record<string, T[]> = {};

    return list.reduce((index, item) => {
        const indexKey = String(item[key]);
        const existKey = Boolean(index[indexKey]);

        if (!existKey) {
            index[indexKey] = [];
        }

        index[indexKey].push(item);

        return index;
    }, DEFAULT_INDEX);
}
