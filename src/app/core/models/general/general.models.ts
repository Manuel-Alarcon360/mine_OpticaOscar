export enum SeverityType {
  INFO = 'info',
  DANGER = 'danger',
  WARNING = 'warning'
}

export enum MessageType {
  SUCCESS = 'success',
  ERROR = 'error'
}


export interface PaginatorData<T> {
  results: T[];
  count: number;
  next: null | string;
  previous: null | string;
}

export interface DetalleResponse<T> {
  detail: string;
  data: T;
}
export interface Column {
  field: string;
  header: string;
}
