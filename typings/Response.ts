export interface ApiResponse<S extends string, T> {
    status: S
    data: T
}

export type OkResponse<T> = ApiResponse<"ok", T>
export type ErrorResponse<T> = ApiResponse<"error", T>

export type OptResponse<T, E> = OkResponse<T> | ErrorResponse<E>