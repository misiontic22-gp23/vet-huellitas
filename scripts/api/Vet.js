class Vet extends Entity {
  constructor() {
    super("vet/");
    this.setEntityName('Vet');
    this.setEntitySetName('Vets');
    this.setEntityMetadata(VetMetadata);
    this.setEntitySetMetadata(VetSetMetadata);
  }
}