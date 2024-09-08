import { FormData } from "@/app/WildFireAlert";
import React, { SetStateAction, useMemo } from "react";
import { Polygon } from "react-native-maps";
import MapFireIndicator from "./FireMarkers";
import sections from "./SectionCoordinates";

// Define constants outside the component
const noFireStrokeColor = "#00FF00";
const fireStrokeColor = "#FF0000";

const MapSections = ({
  formData,
  setFormData,
}: {
  formData: FormData;
  setFormData: React.Dispatch<SetStateAction<FormData>>;
}) => {
  const fireSectionsSet = useMemo(
    () => new Set<Sections>(["Section 3", "Section 7"]),
    []
  );

  const handleSectionClick = (sectionName: Sections) => {
    setFormData((currentData) => ({
      ...currentData,
      markedSections: currentData.markedSections.includes(sectionName)
        ? currentData.markedSections.filter((entry) => entry !== sectionName)
        : [...currentData.markedSections, sectionName],
    }));
  };

  const calculateCenter = (coordinates: Coordinate[]): Coordinate => {
    const numberOfPoints = coordinates.length;
    const totalLatitude = coordinates.reduce(
      (sum, coord) => sum + coord.latitude,
      0
    );
    const totalLongitude = coordinates.reduce(
      (sum, coord) => sum + coord.longitude,
      0
    );

    return {
      latitude: totalLatitude / numberOfPoints,
      longitude: totalLongitude / numberOfPoints,
    };
  };

  const renderedSections = useMemo(
    () =>
      sections.map((entry) => {
        const isFireSection = fireSectionsSet.has(entry.name as Sections);
        const sectionCenter = calculateCenter(entry.coordinates);

        return (
          <React.Fragment key={entry.name}>
            <Polygon
              coordinates={entry.coordinates}
              tappable={true}
              onPress={() => handleSectionClick(entry.name as Sections)}
              strokeColor={isFireSection ? fireStrokeColor : noFireStrokeColor}
              fillColor={
                isFireSection
                  ? "rgba(255, 0, 0, 0.5)"
                  : formData.markedSections.includes(entry.name as Sections)
                  ? "rgba(255, 0, 0, 0.2)"
                  : "rgba(0, 255, 0, 0.2)"
              }
            />
            {isFireSection && (
              <MapFireIndicator
                fireSection={{
                  sectionName: entry.name as Sections,
                  sectionCenter,
                }}
              />
            )}
          </React.Fragment>
        );
      }),
    [formData.markedSections, fireSectionsSet]
  );

  return <>{renderedSections}</>;
};

export default MapSections;
