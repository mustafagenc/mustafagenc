import { CustomHoverCard } from '@/components/custom-hover-card'
import { NewsletterForm } from '@/components/newsletter-form'
import { Separator } from '@/components/ui/separator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Take a look at my professional journey, projects I’ve worked on, and my involvement with the community.',
}

export default function Page() {
  return (
    <>
      <section className='relative flex flex-col justify-center'>
        <h1 className='title flex items-baseline gap-2'>Work</h1>

        <div className='prose max-w-full'>
          <p className='font-medium text-pretty text-zinc-800 dark:text-zinc-300'>
            Since 2003, I've been immersed in the world of software development,
            constantly seeking to expand my knowledge and skills through various
            projects and technologies. This page details my professional
            journey, including my work experiences, education, certifications,
            personal projects, and technical skills, all presented in
            chronological order. Having worked on both corporate and freelance
            projects, I possess a broad range of technical expertise. My passion
            for continuous learning and exploring new technologies is a
            cornerstone of my career.
          </p>
        </div>

        <Separator className='my-6' />

        <div className='space-y-14'>
          <article>
            <h2 className='dark:text-foreground mb-2 text-lg font-semibold text-zinc-900'>
              ENKA İnşaat ve Sanayi A.Ş.
            </h2>
            <div className='mb-6 flex items-center gap-2 text-sm'>
              <span className='text-zinc-600 dark:text-zinc-300'>
                Senior Software Developer
              </span>
              <time className='text-muted-foreground'>
                March 2019 - Present
              </time>
            </div>
            <div className='leading-relaxed font-medium text-pretty text-zinc-800 dark:text-zinc-300'>
              <span>
                I am actively involved as a team leader in the development of
                the{' '}
                <CustomHoverCard
                  triggerText='EGEM'
                  title='Microsoft Learn Student Ambassador'
                  description='Global group of campus leaders who are eager to help fellow students, lead in their tech community.'
                  dateText='Joined April 2024'
                  avatarSrc='/images/microsoft.svg'
                  avatarFallback='MS'
                />{' '}
                project, which provides management of large-scale equipment
                fleets.
              </span>
              <span>
                This project aims to optimize critical business processes such
                as equipment tracking, maintenance management, cost analysis,
                and operational efficiency, thereby increasing the company's
                project effectiveness.
              </span>
            </div>
          </article>
          <article>
            <h2 className='dark:text-foreground mb-2 text-lg font-semibold text-zinc-900'>
              Ekipişi
            </h2>
            <div className='mb-6 flex items-center gap-2 text-sm'>
              <span className='text-zinc-600 dark:text-zinc-300'>
                Senior Software Developer (Self-employed)
              </span>
              <time className='text-muted-foreground'>
                January 2012 - February 2019
              </time>
            </div>
            <div className='prose max-w-full'>
              <ul className='mt-4 list-disc space-y-1 font-medium text-pretty text-zinc-900 dark:text-zinc-200'>
                <li>
                  I gained experience in various projects and technologies.
                </li>
                <li>
                  I developed various projects such as remote education systems,
                  e-commerce platforms, customer management systems and special
                  mobile applications.
                </li>
                <li>
                  In particular, I achieved significant successes in complex
                  projects such as remote education systems integrated with
                  platforms such as BigBlueButton and Microsoft Lync,
                  large-scale e-commerce solutions and in-house tracking
                  systems.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      <NewsletterForm />
    </>
  )
}
