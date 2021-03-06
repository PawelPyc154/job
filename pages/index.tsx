import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const jobOffers = [{ id: 1, name: 'Tester' }]
const JobOffers: NextPage = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {jobOffers.map(({ id, name }) => (
      <Link key={id} href={`/${id}`}>
        {name}
      </Link>
    ))}

    <div className="bg-green-600">tset123</div>
    <div className="bg-green-700">tset321</div>
  </div>
)

export default JobOffers
