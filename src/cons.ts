type Cons<T, U> = {
  readonly car: T;
  readonly cdr: U;
};

export class ConsBuilder<T, U> {
  private car: T | undefined = undefined;
  private cdr: U | undefined = undefined;

  public build(): Cons<T, U> {
    return {
      car: this.car as T,
      cdr: this.cdr as U,
    };
  }

  public withCar(value: T) {
    this.car = value;
    return this;
  }

  public withCdr(value: U) {
    this.cdr = value;
    return this;
  }
}

export default Cons;
