export type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export function validateContactForm(value: Partial<ContactForm>) {
  return Boolean(
    value.name?.trim() &&
      value.email?.includes("@") &&
      value.message?.trim(),
  );
}
