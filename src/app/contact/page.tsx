import { Contact } from '@/components/contact'
import { NewsletterForm } from '@/components/newsletter-form'
import { PUBLIC_MAIL } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Let’s connect! Whether you want to discuss a project, collaborate, or just say hi, feel free to reach out.',
}

export default function Page() {
  return (
    <section>
      <h2 className='title'>Get in touch</h2>
      <div className='prose max-w-full'>
        <p className='font-medium text-zinc-800 dark:text-zinc-300'>
          I&apos;m open to freelance projects and collaborations. If you have a
          project, want to share ideas, or just feel like chatting, let&apos;s
          connect!
        </p>
        <p className='text-muted-foreground font-medium text-zinc-800 dark:text-zinc-300'>
          Feel free to reach out to me at{' '}
          <a
            href={`mailto:${PUBLIC_MAIL}`}
            className='text-muted-foreground hover:text-foreground font-medium underline underline-offset-4 hover:transition'
          >
            {PUBLIC_MAIL}
          </a>{' '}
          or through the contact form below.
        </p>
      </div>

      <Contact />
      <NewsletterForm />
    </section>
  )
}
