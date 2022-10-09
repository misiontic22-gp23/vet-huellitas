class Historia extends Entity {
  constructor() {
    super("historia/");
    this.setEntityName('Historia');
    this.setEntitySetName('Historias');
    this.setEntityMetadata(HistoriaMetadata);
    this.setEntitySetMetadata(HistoriaSetMetadata);
  }
}