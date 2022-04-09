import ActionDetails from "./ActionDetails";

type MailItem = {
  id: string
  businessRecipient: string | null
  forward: ActionDetails | null
  from: string
  imageUrl: string
  individualRecipient?: string
  scan: ActionDetails | null
  shred: ActionDetails | null
  timestamp: number
};

export default MailItem;