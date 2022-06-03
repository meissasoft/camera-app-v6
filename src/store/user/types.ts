export type userState = {
  data: any;
  status: string;
  error: string | undefined;
};

export interface IPanRequest {
  panNumber: string;
  dob: string;
}
