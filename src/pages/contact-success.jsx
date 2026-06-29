import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import { useRouter } from 'next/router';

export default function ContactSuccess() {
    const router = useRouter();
    const { name } = router.query;

    return (
        <>
            <Head>
                <title>Contact Successful - Yassin Ezaouibi</title>
                <meta
                    name="description"
                    content="Thank you for contacting me. I'll be in touch soon!"
                />
            </Head>
            <SimpleLayout
                title="Thanks for getting in touch!"
                name={name}
                intro="I appreciate your message and will respond as soon as possible. In the meantime, feel free to explore my projects or read more on my Articles."
            />
        </>
    )
}
