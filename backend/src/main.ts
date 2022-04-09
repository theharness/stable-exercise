import listMail from "./listMail"

type AppSyncEvent = {
  info: {
    fieldName: "listMail";
  };
};

export const handler = async (event: AppSyncEvent) => {
  switch (event.info.fieldName) {
    case "listMail":
      return listMail();
    default:
      return null;
  }
};
