class Dueno extends Entity {
  constructor() {
    super("dueno/");
    this.setEntityName('Dueno');
    this.setEntitySetName('Duenos');
    this.setEntityMetadata(DuenoMetadata);
    this.setEntitySetMetadata(DuenoSetMetadata);
  }
}