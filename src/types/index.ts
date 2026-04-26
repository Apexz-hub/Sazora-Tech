export type ServiceSlug = "website" | "discord-server" | "discord-bot" | "whatsapp-bot";

export interface ServicePackage {
  name: string;
  price: string;
  description: string;
}

export interface Service {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  packages: ServicePackage[];
  discordChannel: string;
  webhookEnvKey: string;
  color: number;
}

export interface OrderFormData {
  nama: string;
  discordUser: string;
  email: string;
  whatsapp: string;
  jenisJasa: ServiceSlug;
  paket: string;
  detail: string;
  budget: string;
  deadline: string;
  metodePembayaran: string;
  referensi: string;
  catatan: string;
}

