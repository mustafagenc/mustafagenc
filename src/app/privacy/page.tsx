import { buttonVariants } from '@/components/ui/button'
import { PUBLIC_MAIL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Find out how I collect, use, and protect your personal information to ensure your privacy is respected.',
  //robots: {
  //  // If no longer want the crawlers to index this page, but we want them to follow
  //  // any url on this page.
  //  // index: false,
  //  follow: true,
  //},
}

export default function Page() {
  return (
    <section>
      <div className='mb-5'>
        <h1 className='title'>Privacy Policy</h1>
        <p className='text-muted-foreground'>
  This Privacy Policy explains how I collect, use, and protect the personal information you provide through the contact form on my website.
        </p>
      </div>

      <div className='mb-8 space-y-5'>
        <div>
          <h2 className='text-xl font-bold'>Information I Collect</h2>
          <p className='text-muted-foreground'>
            When you fill out the contact form, I may collect your name, email address, and any other details you provide.
          </p>
        </div>
        <div>
          <h2 className='text-xl font-bold'>How I Use Your Information</h2>
          <p className='text-muted-foreground'>
            I use the information you submit to respond to your inquiries and communicate with you as necessary.
          </p>
        </div>
        <div>
          <h2 className='text-xl font-bold'>Data Sharing and Protection</h2>
          <p className='text-muted-foreground'>
            I take reasonable measures to protect your personal data from unauthorized access, alteration, or disclosure. I utilize secure servers to store your data.
          </p>
        </div>
        <div>
          <h2 className='text-xl font-bold'>Contact Details</h2>
          <p className='text-muted-foreground'>
            If you have any questions or concerns about the privacy policy,
            please contact us at this email address:{' '}
            <a
              href={`mailto:${PUBLIC_MAIL}`}
              className='text-muted-foreground hover:text-foreground font-medium underline underline-offset-4 hover:transition'
            >
              {PUBLIC_MAIL}
            </a>{' '}
            or through the contact form.
          </p>
        </div>
      </div>

      <Link
        href='/contact'
        className={buttonVariants({
          variant: 'secondary',
        })}
      >
        Contact me
      </Link>
    </section>
  )
}
