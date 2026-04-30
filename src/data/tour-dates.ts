export interface TourDate {
  event: string;
  dates: string;
  location: string;
  recurring: string | null;
}

export const tourDates: TourDate[] = [
  {
    event: "Master Claus Academy",
    dates: "March 13-15, 2026",
    location: "Columbus, Ohio",
    recurring: null,
  },
  {
    event: "American Clown Academy",
    dates: "April 26 - May 2, 2026",
    location: "Atlanta, GA",
    recurring: null,
  },
  {
    event: "Stall #3",
    dates: "Tuesday Morning After Breakfast",
    location: "",
    recurring: null,
  },
  {
    event: "Kentucky Highland Festival",
    dates: "May 29 - July 19, 2026",
    location: "Eminence, KY",
    recurring: "Every Weekend",
  },
  {
    event: "Arkansas Renaissance Festival",
    dates: "August 29 - October 4, 2026",
    location: "Vernon, AR",
    recurring: "Every Weekend",
  },
];
