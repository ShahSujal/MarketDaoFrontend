export type TModalMessage = {
    loadModalTitle: string;
    loadModalDescription: string;
    errorTitle: string;
    errorDescription: string;
    loadingTitle: string;
    loadingDescription: string;
    successTitle: string;
    successDescription: string;
    cancelTitle: string;
    cancelDescription: string;
    notFoundTitle: string;
    notFoundDescription: string;
    redirectUrl: string;
    buttonText: string | React.JSX.Element;
  };
export const defaultModalMessage: TModalMessage = {
    loadModalTitle: "",
    loadModalDescription: "",
    errorTitle: "",
    errorDescription: "",
    loadingTitle: "",
    loadingDescription: "",
    successTitle: "",
    successDescription: "",
    cancelTitle: "",
    cancelDescription: "",
    notFoundTitle: "",
    notFoundDescription: "",
    redirectUrl: "",
    buttonText: "",
  };