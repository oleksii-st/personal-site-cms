export interface GeneratePreviewURLOptions {
  locale: string;
  token: string;
}
export const formatPreviewURL = (
  collection: string,
  doc: Record<string, unknown>,
  options: GeneratePreviewURLOptions,
): string => {
  return `${process.env.PAYLOAD_PUBLIC_APP_URL}/preview?url=${encodeURIComponent(
    `${collection}/${doc.id}?locale=${options.locale}&token=${options.token}&draft=true`,
  )}`;
};
