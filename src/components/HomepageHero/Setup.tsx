import Link from 'next/link'
import { LinkPreview } from '@/components/ui/link-preview'
import { FlipWords } from '@/components/ui/flip-words'
import { Button } from '@/components/ui/button'
import styles from '@/components/HomepageHero/SetupHero.module.scss'
import { MotionWrapperFlash } from '@/components/MotionWrapper/Flash'
import { useLocale } from '@/hooks'

interface Props {
}
export function SetupHero(props: Props) {
  const { t, currentLocale } = useLocale()

  return (
    <div className={styles.container}>
      {/* <div className={styles.tilesBox}></div> */}
      <div className={styles.content}>
        <div className={styles.badgeContainer}>
          <a
            className={styles.badge}
            href="https://github.com/pdsuwwz/nextjs-nextra-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('badgeTitle')}
          </a>
        </div>
        <h1 className={styles.headline}>
          <MotionWrapperFlash className="flex items-center">
            <span className="icon-[emojione-v1--lightning-mood]"></span>
          </MotionWrapperFlash>
          {' '}
          Canyon
          {' '}
        </h1>
        <div className={styles.subtitle}>
          Canyon makes automated test coverage collection
          {' '}
          <FlipWords
            words={[
              'Fast',
              'Simple',
              'Modern',
              'Flexible',
              'Easy',
              'Functional',
              'Efficient',
              'Scalable',
              'Reusable',
            ]}
          />
          <br />
          with a technology stack that includes
          {' '}
          <LinkPreview
            url="https://nextjs.org"
          >
            Istanbul
          </LinkPreview>
          ,
          {' '}
          <LinkPreview
            url="https://tailwindcss.com"
          >
            Playwright
          </LinkPreview>
          , and
          {' '}
          <LinkPreview
            url="https://ui.shadcn.com"
          >
            E2E Testing
          </LinkPreview>
          {', '}
          <LinkPreview
            url="https://ui.aceternity.com"
          >
            Aceternity UI
          </LinkPreview>
        </div>
        <div className="flex justify-center pt-10">
          <div className="max-w-[500px] flex flex-wrap gap-[20px] max-sm:justify-center">
            <Button
              asChild
              size="lg"
              className="font-bold group max-sm:w-[100%]"
            >
              <Link
                href={`/${currentLocale}/introduction`}
              >
                Get Started
                <span className="w-[20px] translate-x-[6px] transition-all group-hover:translate-x-[10px] icon-[mingcute--arrow-right-fill]"></span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-bold group max-sm:w-[100%]"
            >
              <Link
                href="https://github.com/pdsuwwz/nextjs-nextra-starter"
                target="_blank"
              >
                Github
                <span className="ml-[6px] icon-[mingcute--github-line]"></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
