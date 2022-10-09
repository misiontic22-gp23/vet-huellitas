class Cita extends Entity {
  constructor() {
    super("cita/");
    this.setEntityName('Cita');
    this.setEntitySetName('Citas');
    this.setEntityMetadata(CitaMetadata);
    this.setEntitySetMetadata(CitaSetMetadata);
  }
}