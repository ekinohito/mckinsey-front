export interface Supplier {
    inn: string,
    ogrn: string,
    name: string,
    rating: string,
}

export type SupplierDoc = Supplier & { _id: string }