export type FireAlert = {
  id: string;
  title: string;
  createdAt: string;
  formattedDate: string;
  formattedTime: string;
  description: string;
  markedSections: string[];
  confirmedBy: string[];
  reportedAsSpamBy: string[];
  photos: string[];
  status: string;
};
