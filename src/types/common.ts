export enum EStatus {
    LOADING = "loading",
    ERROR = "error",
    SUCCESS = "success",
    CANCEL = "cancel",
    LOADERROR = "loaderror",
    NOTFOUND = "notfound",
  }
 export type TApiResponse = {
    status: EStatus;
    title: string;
    desciption: string;
  };