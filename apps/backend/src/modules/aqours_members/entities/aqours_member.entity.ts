import { Expose } from 'class-transformer';

type ExposeProperty = 'nameWithIcon';

export class AqoursMember {
  grade: number;
  icon: string;
  id: number;
  name: string;

  constructor(omit: Omit<AqoursMember, ExposeProperty>) {
    Object.assign(this, omit);
  }

  @Expose()
  get nameWithIcon(): string {
    return `${this.name}${this.icon}`;
  }
}
