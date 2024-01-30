import { ArrowLongRightIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { BiSpa } from 'react-icons/bi';
import { BsFileEarmarkBarGraph, BsPersonWorkspace } from 'react-icons/bs';
import { MdOutlineSportsBasketball } from 'react-icons/md';
import { RiAdvertisementLine } from 'react-icons/ri';

const features = [
    {
      name: 'Coaches and Creators',
      description: 'Zigment.ai automates engagement, freeing you to focus on creating and teaching.',
      href: '/solutions/coaches',
      icon: MdOutlineSportsBasketball,
    },
    {
      name: 'Gyms and Spas',
      description: 'Our platform handles bookings and follow-ups, providing a personalized touch without the time investment.',
      href: '/solutions/gymnspa',
      icon: BiSpa, 
    },
    {
      name: 'Webinars',
      description: 'Boost webinar success with Zigment.ai’s streamlined registrant-to-attendee conversion process.',
      icon: BsPersonWorkspace, 
      href: '/solutions/webinars',
    },
    {
      name: 'Fundraising',
      description: 'Automate donor outreach with our AI, scaling your fundraising efforts beyond traditional limits.',
      href: '/solutions/fundraising',
      icon: CurrencyDollarIcon , 
    },
    {
      name: 'Advertising',
      description: 'Turn clicks into clients with intelligent, instant AI-driven ad response systems.',
      href: '/solutions/advertising',
      icon: RiAdvertisementLine, 
    },
    {
      name: 'Managed Sales Services',
      description: 'Zigment.ai’s AI sales agents plus human expertise equals unparalleled sales productivity around the clock.',
      href: '/solutions/managedsales',
      icon: BsFileEarmarkBarGraph, 
    },
  ];
  

export default function OurSolutionSection() {
  return (
    <div className="bg-brand-orange-deskibg pt-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          {/* <h2 className="text-lg font-semibold leading-8 text-indigo-600">Transactions</h2> */}
          <p className="text-4xl font-black text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl  leading-tight">Our Solutions</p>
          <p className="text-base sm:text-lg text-brand-gray-300 mt-2 md:mt-10">
          At Zigment.ai, we understand that each business is unique. Our bespoke AI solutions cater to diverse industries, enhancing interaction and conversion efficiency across the board.

          </p>
        </div>

        <div className="mt-10 md:mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row bg-white p-8 sm:py-10 sm:px-12">
                <div className="flex h-[50px] w-[50px] items-center bg-brand-orange-deskibg justify-center rounded-full  text-black sm:shrink-0">
                  <feature.icon className="h-7 w-7 " aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg md:text-2xl	 font-medium leading-8 text-gray-900">{feature.name}</p>
                  <p className="py-2 md:py-5 text-base leading-7 text-gray-600">{feature.description}</p>
                    <Link href={feature.href} className=''>
                        <ArrowLongRightIcon className=" w-[35px] text-black hover:ml-2 transition-all" />
                    </Link>


                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
