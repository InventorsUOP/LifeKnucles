type Sections =
  | "Section 1"
  | "Section 2"
  | "Section 3"
  | "Section 4"
  | "Section 5"
  | "Section 6"
  | "Section 7"
  | "Section 8"
  | "Section 9"
  | "Section 10"
  | "Section 11"
  | "Section 12"
  | "Section 13"
  | "Section 14";

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface MapSection {
  sectionName: Sections;
  sectionCenter?: Coordinate;
}
