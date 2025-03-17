import Image from 'next/image'
import { CustomHoverCard } from '@/components/custom-hover-card'

export const HeroIntro = () => {
  return (
    <section>
      <div className='flex flex-col gap-y-4 md:flex-row md:items-center md:gap-x-10'>
        <div className='flex-1'>
          <h1 className='title mb-2 no-underline'>
            Hey, I&#39;m <span className='text-primary'>Mustafa</span>{' '}
            <span role='img' aria-label='waving hand'>
              🖖
            </span>
          </h1>
          <p className='subtitle text-muted-foreground mb-6 text-xl font-semibold'>
            Full-Stack Developer.
          </p>

          <div className='my-2 leading-7 font-medium text-pretty text-zinc-800 dark:text-zinc-300'>
            I am an experienced software developer who has been working in the
            field since 2003, with experience in both corporate and freelance
            projects. I specialize in system architecture and developing
            comprehensive software solutions. I am currently working full-time
            at
            <CustomHoverCard
              triggerText='ENKA İnşaat ve Sanayi A.Ş.'
              title='ENKA İnşaat ve Sanayi A.Ş.'
              description="I lead the development of the EGEM project, which provides management of large-scale equipment fleets. This project aims to optimize critical business processes such as equipment tracking, maintenance management, cost analysis, and operational efficiency, thereby increasing the company's project effectiveness."
              dateText='Joined Mar 2019'
              avatarSrc='/images/enka.png'
              avatarFallback='FCC'
            />
            and continue to enrich my experience by working on different
            projects. I also enjoy contributing to software communities.
          </div>
        </div>

        {/* Desktop Profile Image */}
        <div className='hidden md:block'>
          <Image
            className='rounded-full'
            src='/photos/mustafa-genc.jpg'
            alt='Profile photo of Mustafa Genç'
            width={175}
            height={175}
            priority
            sizes='175px'
          />
        </div>
      </div>

      <p className='mt-3 max-w-full leading-7 font-medium text-pretty text-zinc-800 dark:text-zinc-300'>
        With over 20 years of experience, I specialize in languages like{' '}
        <strong>C#</strong>, <strong>Asp.NET</strong>,{' '}
        <strong>TypeScript</strong>, and <strong>PHP</strong>, and databases
        such as <strong>MSSQL</strong> and <strong>MySQL</strong>. I also have
        experience with web development technologies and frameworks.
      </p>

      <p className='mt-3 max-w-full leading-7 font-medium text-pretty text-zinc-800 dark:text-zinc-300'>
        I enjoy building side projects in my free time that help me automate a
        lot of my stuffs. I love writing about my projects, and exploring new
        technologies that enhance my skills and understanding of software
        development.{' '}
      </p>
    </section>
  )
}
