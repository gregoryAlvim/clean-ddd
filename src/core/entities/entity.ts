import { UniqueEntityID } from './unique-entity-id'

export abstract class Entity<PropsType> {
  private _id: UniqueEntityID
  protected props: PropsType

  get id() {
    return this._id
  }

  protected constructor(props: PropsType, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID()
  }

  public equals(entity: Entity<unknown>) {
    if (entity === this) return true

    if (entity.id === this._id) return true

    return false
  }
}
