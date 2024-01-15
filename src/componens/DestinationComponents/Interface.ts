export interface RegionCard {
  img: string;
  date: string;
  title: string;
  location: string;
  comments: string;
}

export interface RegionCards {
  [key: string]: RegionCard[];
}
export interface HeaderItemProps {
  active: boolean;
  onClick: () => void;
}
