export type FlightDestinationResponse = {
  departureDate: string;
  returnDate: string;
  origin: string;
  destination: string;
  price: {
    total: number;
  }
};

export type AmadeusResponse<T> = {
  meta: {
    count: number;
    currency: string;
  };
  dictionaries: {
    locations: Record<string, { detailedName: string; }>;
  }
  data: T;
}
