type Cons<T, U> = {
  readonly car: T;
  readonly cdr: U;
};

export function cons<T, U>(car: T, cdr: U): Cons<T, U> {
  return { car, cdr };
}

export default Cons;
