export type InData = {
    inn: number | string,
    ogrn: number | string,
    name: string,
    finance_total: number,
    'property status': number | string,
    effectiveness: number | string,
    'financial condition': number | string,
    size: number | string,
    stability: number | string,
    sustainability: number | string,
    provider_experience: number | string,
    experience_total: number,
    "Tax behavior": number | string,
    Conscientiousness: number | string,
    Director: number | string,
    courts_mark: number | string,
    juridical_total: number,
}
export type OutData = {
    inn: string,
    ogrn: string,
    name: string,
    rating: number,
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
    experienceSupplier: string

}

export default function mapper(v: InData): OutData {
    return {
        inn: v['inn'].toString(),
        ogrn: v['ogrn'].toString(),
        name: v['name'].toString(),
        rating: v['finance_total'] * 0.5 + v['juridical_total'] * 0.3 + v['experience_total'] * 0.2,
        financeTotal: v['finance_total'].toString(),
        financeStatus: v['property status'].toString(),
        financeEfficiency: v['effectiveness'].toString(),
        financeCondition: v['financial condition'].toString(),
        juridicalTotal: v['juridical_total'].toString(),
        juridicalTaxBehaviour: v['Tax behavior'].toString(),
        juridicalHonesty: v['Conscientiousness'].toString(),
        juridicalDirector: v['Director'].toString(),
        juridicalCourts: v['courts_mark'].toString(),
        experienceTotal: v['experience_total'].toString(),
        experienceSize: v['size'].toString(),
        experienceStability: v['stability'].toString(),
        experienceSustainability: v['sustainability'].toString(),
        experienceSupplier: v['provider_experience'].toString()
    
    }
}