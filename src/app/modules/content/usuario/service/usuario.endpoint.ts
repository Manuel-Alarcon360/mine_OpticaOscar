export const controller = 'usuario/'

export enum UsuarioEndPoint {
  registro = controller + "registra_usuarios/",
  list_colaboradores = controller + "list_usuarios/",
  changeStatusEmployee = controller + "update_estado_empleado/",
  list_groups = controller +  "list_groups_available/",
  updated_empleado = controller + "update_empleado/",
  update_contrasenia = controller +  "update_contrasenia/",
  firma_empleado = controller + "obtener_firma_digital/",
  post_controller_empleado = controller + "post_controller_empleado/"
}
