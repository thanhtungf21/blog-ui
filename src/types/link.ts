export interface ILink {
  _id: string;
  originalUrl: string;
  shortCode: string;
  clicks: number;
  createdAt: string;
  updatedAt: string;
}

export interface IShortenLink {
  originalUrl: string;
  customCode?: string;
}
