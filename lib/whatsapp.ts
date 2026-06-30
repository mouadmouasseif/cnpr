export const WHATSAPP_PHONE = "212664860246";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function buildReservationMessage(activity: string) {
  return [
    "Bonjour CNPR, je souhaite faire une reservation.",
    `Activite: ${activity}`,
    "",
    "Merci de me confirmer les disponibilites.",
  ].join("\n");
}
