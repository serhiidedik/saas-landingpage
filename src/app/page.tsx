import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { Scan, MousePointerClick, Vote } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Gif Tournament
        </Typography>
        <Typography className="max-w-2xl" variant="h2">
          Battle of the Belly Laughs
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Welcome to the Gif Tournament, where hilarity
          reigns supreme! Dive into a world of
          side-splitting humor as you browse through a
          collection of the funniest gifs ever to grace the
          internet. From laugh-out-loud moments to
          rib-tickling shenanigans, our gif tournament
          invites you to join the fun, choose your favorite
          gifs, and cast your votes to crown the ultimate
          champion of comedy. Get ready to unleash the
          giggles and let the battle for the best gif begin!
        </Typography>
        <Link
          href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
          target="_blank"
        >
          <Button size="tiny" variant="ghost">
            {`Get Started`}
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="Pandem.dev hero image"
          src="/hero1.png"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            3 steps
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Scan size={24} />}
              headline="Choose"
            />
            <Feature
              icon={<MousePointerClick size={24} />}
              headline="Vote"
            />
            <Feature
              icon={<Vote size={24} />}
              headline="Results"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
