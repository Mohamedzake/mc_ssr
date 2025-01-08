import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t("contactTitle")}</h1>
      <p>{t("contactDescription")}</p>
    </div>
  );
}
