export type Exercise = { name: string };

export type Activity = {
  id: string;
  type: string;
  exercise: Exercise;
  time: number;
  status?: string;
};

export type ActivityInputToAddActivity = {
  id?: string;
  type: string;
  exercise: Exercise;
  time: number;
  status?: string;
};

export type ActivityParametersInputToEditActivity = {
  exercise?: Exercise;
  time?: number;
  status?: string;
};

export type ActivityProps = Activity & { style?: any; edit?: boolean };

export type Circuit = {
  id: string;
  type: string;
  plan: Activity[];
  name?: string;
};

export type CircuitInputToAddCircuit = {
  id?: string;
  type: string;
  plan: Activity[];
  name?: string;
};

export type Training = {
  id: string;
  type: string;
  plan: Circuit[];
  name?: string;
};

export type AddCircuit = (
  previousTraining: Training,
  newCircuit?: CircuitInputToAddCircuit
) => Training;

export type PopList = {
  anchorOrigin: any,
  transformOrigin: any,
  options: Array<String>,
  optionsCall?: Array<Function>
};