export interface QuoteFormData {
  surface: number;
  frequencyPerWeek: number;
  prestationType: string;
}

export class QuoteCalculator {
  static calculateMonthlyEstimate(data: QuoteFormData): number {
    // TODO: logique tarifaire à implémenter
    // Placeholder: base price per m² * frequency * 4.33 weeks/month
    const basePricePerSqm: Record<string, number> = {
      bureaux: 0.15,
      "cabinet-medical": 0.25,
      "cabinet-juridique": 0.18,
      "cabinet-autre": 0.18,
      hotel: 0.22,
      airbnb: 0.20,
      autre: 0.15,
    };

    const rate = basePricePerSqm[data.prestationType] ?? 0.15;
    return Math.round(data.surface * rate * data.frequencyPerWeek * 4.33);
  }

  static formatCurrency(amount: number): string {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }
}
