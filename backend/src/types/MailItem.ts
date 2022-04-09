import ActionDetails from "./ActionDetails";

type MailItem = {
  id: string
  businessRecipient?: string
  forward?: ActionDetails
  from: string
  imageUrl: string
  individualRecipient?: string
  scan?: ActionDetails
  shred?: ActionDetails
  timestamp: number
};

export default MailItem;