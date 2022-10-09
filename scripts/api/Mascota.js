class Mascota extends Entity {
  constructor() {
    super("mascota/");
    this.setEntityName('Mascota');
    this.setEntitySetName('Mascotas');
    this.setEntityMetadata(MascotaMetadata);
    this.setEntitySetMetadata(MascotaSetMetadata);
  }
}