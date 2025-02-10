//  Interfaces
export interface Task {
  id: number;
  title: string;
  completed: boolean;
  color: string;
  createdOn: Date;
  updatedOn: Date;
}

export interface Colors {
  colorName: string;
  color: string;
}

export interface Props {
  params: string;
}

export interface stackDisplayProps {
  stackList: string[];
}

export interface ImageProps {
  width?: number;
}

export interface HeroScrollDownProps {
  idName: string;
}

export interface HeroScrollUpProps {
  idName: string;
  position: string;
  bg: string;
}

export interface HeroScrollToSectionProps {
  idName: string;
  displayName: string;
  position: string;
}

export interface PopupProps {
  message: string;
  duration?: number;
}

//  Types
export type ColorsExtended = Colors[];
