import useNextTranslation from "next-translate/useTranslation";
import { AvailableLocales } from "~/src/locales/available-locales";

export function useTranslation() {
  const { lang } = useNextTranslation();

  return { lang } as { lang: AvailableLocales };
}
