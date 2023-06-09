export interface IProduct {
    id: number;
    url: string;
    title: string;
    typeOfMeasurement: string;
    amount: number;
    barcode: number;
    manufacturer: string;
    brand: string;
    description: string;
    price: {
        sum: number;
        typeOfCurrency: string;
    };
    keywords: string[];
}

export interface IFilterItem {
    keywords?: string[];
    manufacturer?: string[];
    brand?: string[];    
}

export interface PriceFilterItem{
  startPrice?: number;
  endPrice?: number;
}

export interface InfoAboutPurchase{
  info: {
      id: number;
      amount: number;
  }
}