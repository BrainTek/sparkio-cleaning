import { QuoteFormData } from "./Types"

export type DiscountCondition = {
    field: keyof QuoteFormData
    operator: string
    value: any
}

export type DiscountRule = {
    name: string
    condition: DiscountCondition
    extraCondition?: DiscountCondition
    value: number
}

export class RuleEngine {
    static evaluateCondition(
        data: QuoteFormData,
        field: keyof QuoteFormData,
        operator: string,
        value: any
    ) {
        const fieldValue = data[field]

        switch (operator) {
            case ">=":
                return fieldValue >= value
            case ">":
                return fieldValue > value
            case "equals":
                return fieldValue === value
            default:
                return false
        }
    }

    static calculateDiscount(
        data: QuoteFormData,
        rules: DiscountRule[],
        maxCap: number
    ) {
        let totalDiscount = 0

        rules.forEach(rule => {
            const mainCondition = this.evaluateCondition(
                data,
                rule.condition.field,
                rule.condition.operator,
                rule.condition.value
            )

            const extraCondition = rule.extraCondition
                ? this.evaluateCondition(
                    data,
                    rule.extraCondition.field,
                    rule.extraCondition.operator,
                    rule.extraCondition.value
                )
                : true

            if (mainCondition && extraCondition) {
                totalDiscount += rule.value
            }
        })

        return Math.min(totalDiscount, maxCap)
    }
}
