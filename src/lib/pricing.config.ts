import { QuoteFormData } from "./Types";

export const pricingConfig = {
    segments: {
        "cabinet-medical": {
            vat: 0.2,
            basePricePerM2: 2,
        },
        "cabinet-juridique": {
            vat: 0.2,
            basePricePerM2: 2,
        },
        "cabinet-autre": {
            vat: 0.2,
            basePricePerM2: 2,
        },
        "hotel": {
            vat: 0.2,
            basePricePerM2: 3,
        },
        "airbnb": {
            vat: 0.2,
            basePricePerM2: 3,
        },
        "autre": {
            vat: 0.2,
            basePricePerM2: 2.5,
        },
    },

    discounts: [
        {
            name: "Volume Discount",
            condition: {
                field: "surface" as keyof QuoteFormData, // Type assertion to ensure it's a valid field
                operator: ">=",
                value: 1000,
            },
            value: 0.1,
        },
        {
            name: "Frequency Discount",
            condition: {
                field: "frequencyPerWeek" as keyof QuoteFormData,
                operator: ">=",
                value: 3,
            },
            extraCondition: {
                field: "segment" as keyof QuoteFormData,
                operator: "===",
                value: "premium",
            },
            value: 0.05,
        },
        {
            name: "High Frequency",
            condition: {
                field: "frequencyPerWeek" as keyof QuoteFormData,
                operator: ">=",
                value: 3
            },
            value: 0.05,
        },
        {
            name: "Very High Frequency",
            condition: {
                field: "frequencyPerWeek" as keyof QuoteFormData,
                operator: ">=",
                value: 5
            },
            value: 0.1,
        },
        {
            name: "Large Surface",
            condition: {
                field: "surface" as keyof QuoteFormData,
                operator: ">",
                value: 200
            },
            value: 0.1,
        },
        {
            name: "Enterprise Boost",
            condition: {
                field: "segment" as keyof QuoteFormData,
                operator: "equals",
                value: "B2B",
            },
            extraCondition: {
                field: "frequencyPerWeek" as keyof QuoteFormData,
                operator: ">=",
                value: 5,
            },
            value: 0.15,
        },
    ],

    maxDiscountCap: 0.25,
}
