export function sliding<T>(input: T[], size: number): T[][] {
  return input
    .reduce((acc, _, index, arr) => {
        if (index + size > arr.length) {
          return acc;
        }
        return acc.concat(
          // @ts-ignore
          [arr.slice(index, index + size)]
        );
      },
      []
    )
}
