import { useLanguage } from '../i18n/LanguageContext'
import { useVisitorStats } from '../hooks/useVisitorStats'

export function Footer() {
  const { t } = useLanguage()
  const visitors = useVisitorStats()

  return (
    <footer className="border-t border-neutral-200 py-10 dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-sm text-neutral-500 dark:text-neutral-400">
        <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row">
          <p>{t.footer.left}</p>
          <p className="text-neutral-400">{t.footer.right}</p>
        </div>
        <p className="text-xs text-neutral-400 dark:text-neutral-500">
          {visitors === null
            ? t.footer.visitorsLoading
            : t.footer.visitors.replace('{count}', visitors.toLocaleString())}
        </p>
      </div>
    </footer>
  )
}
