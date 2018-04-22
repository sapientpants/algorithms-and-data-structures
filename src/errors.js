/**
 * Error to be thrown when a method is called with an illegal argument
 * value.
 * @class IllegalArgumentException
 * @constructor
 */
export class IllegalArgumentException extends Error {
  constructor(message) {
    super(message);
  }
}

/**
 * Error to be thrown when an attempt is made to access an indexed collection
 * and the given index is < 0 or > size - 1.
 * @class IndexOutOfBoundsError
 * @constructor
 */
export class IndexOutOfBoundsError extends Error {
  constructor(index) {
    super(`index out of bounds: ${index}`);
  }
}
