import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations();

  return (
    <div>
      <h1>abouuuuuuuuuuuuuuuuuuuuuuuut</h1>
      <h1>{t("aboutTitle")}</h1>
      <p>{t("aboutDescription")}</p>
    </div>
  );
}
