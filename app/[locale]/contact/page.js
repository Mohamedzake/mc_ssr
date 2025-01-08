import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className=" flex bg-primary-20 justify-center p-24 mt-60">
      <h1>{t("contactTitle")}</h1>
      {/* <p>{t("contactDescription")}</p> */}
    </div>
  );
}
