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

export type ColorsExtended = Colors[];
