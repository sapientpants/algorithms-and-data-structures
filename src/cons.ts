interface Cons<T, U> {
  readonly car: T;
  readonly cdr: U;
}

export function cons<T, U, V extends Cons<T, U> = Cons<T, U>>(
  car: T,
  cdr: U,
  base = {}
): V {
  return {
    ...base,
    car,
    cdr,
  } as V;
}

export default Cons;
