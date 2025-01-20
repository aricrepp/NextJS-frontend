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

//  Types
export type ColorsExtended = Colors[];
