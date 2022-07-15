import UniqueEntityId from "../../../@shared/domain/unique-entity-id.vo";
export type CategoryProps = {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};
export class Category {
  public readonly id: UniqueEntityId;
  constructor(readonly props: CategoryProps, id?: UniqueEntityId) {
    this.id = id || new UniqueEntityId();
    this.props.description = this.props.description ?? null;
    this.props.is_active = this.props.is_active ?? true;
    this.props.created_at = this.props.created_at ?? new Date();
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string | undefined {
    return this.props.description;
  }

  get isActive(): boolean | undefined {
    return this.props.is_active;
  }

  get createdAt(): Date | undefined {
    return this.props.created_at;
  }

  private set description(value: string | undefined) {
    this.props.description = value ?? null;
  }

  private set isActive(value: boolean | undefined) {
    this.props.is_active = value ?? true;
  }
}
