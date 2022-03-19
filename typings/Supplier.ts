export interface Tag {
    text: string
    color?: string
    hint?: string
}

export interface Supplier {
    inn: string,
    ogrn: string,
    name: string,
    rating: string,
    financeTotal: string,
    financeStatus: string,
    financeEfficiency: string,
    financeCondition: string,
    juridicalTotal: string,
    juridicalTaxBehaviour: string,
    juridicalHonesty: string,
    juridicalDirector: string,
    juridicalCourts: string,
    experienceTotal: string,
    experienceSize: string,
    experienceStability: string,
    experienceSustainability: string,
    experienceSupplier: string,
    contacts?: {
        phone?: string,
        email?: string,
    }
    tags?: Tag[]
}

export type SupplierDoc = Supplier & { _id: string }