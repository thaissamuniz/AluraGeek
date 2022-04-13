function groupBy(list, grouping) {
    return list.reduce((acc, current) => {
        const group = (acc[current[grouping]] || []);
        group.push(current);
        acc[current[grouping]] = group;
        return acc;
    }, {});
}

export {
    groupBy
}