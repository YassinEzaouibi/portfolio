import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import {useRouter} from "next/compat/router";

export default function ThankYou() {
    const router = useRouter();
    const { name } = router.query;

  return (
    <>
      <Head>
        <title>You’re subscribed - Yassin Ezaouibi</title>
        <meta
          name="description"
          content="Thanks for subscribing to my newsletter."
        />
      </Head>
      <SimpleLayout
        title="Thanks for subscribing"
        name={name}
        intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}
