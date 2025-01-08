import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations();

  return (
    <div className=" flex bg-primary-20 justify-center p-24 mt-60">
      <h1>{t("aboutTitle")}</h1>
      {/* <p>{t("aboutDescription")}</p> */}
    </div>
  );
}
