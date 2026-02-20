export interface QuoteFormData {
    segment: "bureaux" | "cabinet-medical" | "cabinet-juridique" |
    "cabinet-autre" | "hotel" | "airbnb" | "autre" | ""
    surface: number
    frequencyPerWeek: number
}


export type DiscountCondition = {
    field: keyof QuoteFormData
    operator: ">" | "<" | ">=" | "<=" | "==" | "===" | "!=" | "in"
    value: string | number | boolean
}

export type DiscountRule = {
    name: string
    condition: DiscountCondition
    value: number
    extraCondition?: DiscountCondition
}
