export const controller = 'usuario/'

export enum AuthEndPoint {
        login =  controller + "login/",
        postRefreshToken =  controller + "token/refresh/",
        registro = controller + "registra_usuarios/",
        list_colaboradores = controller + "list_usuarios/",
        changeStatusEmployee = controller + "update_estado_empleado/",
        logOut = controller + "logout/",
        update_contrasenia = controller + "update_contrasenia"
}