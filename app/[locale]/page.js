import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className=" flex bg-primary-20 justify-center p-24 mt-60">
      <h1>{t("title")}</h1>
      {/* <Link href="/cabin">{t("about")}</Link> */}
    </div>
  );
}
