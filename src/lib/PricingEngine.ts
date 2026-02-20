import { pricingConfig } from "./pricing.config"
import { QuoteFormData } from "./Types"
import { RuleEngine } from "./RuleEngine"
export type Result = {
    basePerVisit: number
    monthly: number
    discountRate: number
    discountedMonthly: number
    totalWithVAT: number
}

export class PricingEngine {
    static MAXPerM2 = { 30: 20, 60: 40, 100: 60, 200: 80 };
    static calculate(data: QuoteFormData): Result {
        const segmentConfig = pricingConfig.segments[data.segment]

        const basePerVisit =
            data.surface * segmentConfig.basePricePerM2
        const maxPerSurface = this.MAXPerM2[Object.keys(this.MAXPerM2)
            .map(Number)
            .sort((a, b) => a - b)
            .find(key => key > data.surface) || 200];
        let cappedBasePerVisit = Math.min(basePerVisit, maxPerSurface) // Cap at 10% of surface area price
        if (data.surface > 100) {

            cappedBasePerVisit = Math.min(cappedBasePerVisit, data.surface * 0.125) // Minimum price per visit of 50€
        }

        const weekly = cappedBasePerVisit * data.frequencyPerWeek
        const monthly = Math.min(weekly * 4, 800) // Cap monthly price at 1000€

        const discountRate = RuleEngine.calculateDiscount(
            data,
            pricingConfig.discounts,
            pricingConfig.maxDiscountCap
        )

        const discountedMonthly = monthly * (1 - discountRate)

        const totalWithVAT =
            discountedMonthly * (1 + segmentConfig.vat)

        return {
            basePerVisit: cappedBasePerVisit,
            monthly,
            discountRate,
            discountedMonthly,
            totalWithVAT,
        }
    }
}
