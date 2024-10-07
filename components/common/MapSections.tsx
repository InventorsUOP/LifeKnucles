import { FormData } from "@/app/WildFireAlert";
import React, { SetStateAction, useMemo } from "react";
import { Polygon } from "react-native-maps";
import MapFireIndicator from "./FireMarkers";
import sections from "./SectionCoordinates";
import { useFireAlerts } from "./FireAlertProvider";

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
  const fireAlerts = useFireAlerts();
  const fireSectionsSet = useMemo(() => new Set<Sections>([]), []);
  fireAlerts.forEach((alert) => {
    alert.markedSections.forEach((section) =>
      fireSectionsSet.add(section as Sections)
    );
  });

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

  const choseTheColor = (entry: any) => {
    return formData.markedSections.includes(entry.name as Sections)
      ? "rgba(255, 0, 0, 0.2)"
      : "rgba(0, 255, 0, 0.2)";
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
                isFireSection ? "rgba(255, 0, 0, 0.5)" : choseTheColor(entry)
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
