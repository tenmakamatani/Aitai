export abstract class Id {
  readonly value: string;

  constructor(_value: string) {
    this.value = _value;
  }

  isEqualTo(other: Id) {
    return this.value === other.value;
  }
}
