export interface Rsta_integracion {
    id?: number;
    nombre_aplicacion: string;
    token_aplicacion?: string;
}

export interface IntegracionResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Rsta_integracion[];
}