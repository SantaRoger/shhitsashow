export interface TourDate {
  event: string;
  dates: string; // human-readable display string
  startDate: string; // ISO 8601 (YYYY-MM-DD) — required for Event schema
  endDate?: string; // ISO 8601
  location: string; // display string, e.g. "Columbus, Ohio"
  city?: string;
  region?: string;
  recurring: string | null;
  isJoke?: boolean; // gag entries are shown but kept out of structured data
}

export const tourDates: TourDate[] = [
  {
    event: "Master Claus Academy",
    dates: "March 13-15, 2026",
    startDate: "2026-03-13",
    endDate: "2026-03-15",
    location: "Columbus, Ohio",
    city: "Columbus",
    region: "Ohio",
    recurring: null,
  },
  {
    event: "American Clown Academy",
    dates: "April 26 - May 2, 2026",
    startDate: "2026-04-26",
    endDate: "2026-05-02",
    location: "Atlanta, GA",
    city: "Atlanta",
    region: "GA",
    recurring: null,
  },
  {
    event: "Stall #3",
    dates: "Tuesday Morning After Breakfast",
    startDate: "",
    location: "",
    recurring: null,
    isJoke: true,
  },
  {
    event: "Kentucky Highland Festival",
    dates: "May 29 - July 19, 2026",
    startDate: "2026-05-29",
    endDate: "2026-07-19",
    location: "Eminence, KY",
    city: "Eminence",
    region: "KY",
    recurring: "Every Weekend",
  },
  {
    event: "Arkansas Renaissance Festival",
    dates: "August 29 - October 4, 2026",
    startDate: "2026-08-29",
    endDate: "2026-10-04",
    location: "Vernon, AR",
    city: "Vernon",
    region: "AR",
    recurring: "Every Weekend",
  },
];
