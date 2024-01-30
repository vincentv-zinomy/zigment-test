import LandingPageLayout from "@/components/Layout/LandingPageLayout";
import line from "@/assets/images/solutions/hero/line-shape-1.svg";
import alwaysOn from "@/assets/images/solutions/whatwedo/alwaysOn.svg";
import instant from "@/assets/images/solutions/whatwedo/Instant.svg";
import reduce from "@/assets/images/solutions/whatwedo/ReduceHumanCapital.svg";
import img3 from "@/assets/images/solutions/features/CostEfficiency.svg";
import img2 from "@/assets/images/solutions/features/InstantEngagement.svg";
import img4 from "@/assets/images/solutions/features/Omnichannel.svg";
import img5 from "@/assets/images/solutions/features/Tailored Interaction.svg";
import hero from "@/assets/images/solutions/hero/Advertising.svg";
import img15 from "@/assets/images/solutions/howworks/InitialOnboarding.svg";
import img16 from "@/assets/images/solutions/howworks/Integrationprocess.svg";
import img17 from "@/assets/images/solutions/howworks/SeeMagicinRealtime.svg";
import MetaTagsComponents from "@/components/common/MetaTagsComponents";
import ChatBotFeaturesSection from "@/components/solutions/ChatBotFeaturesSection";
import ComparisionSection from "@/components/solutions/ComparisionSection";
import CustomHero from "@/components/solutions/CustomHero";
import EmphasisSection from "@/components/solutions/EmphasisSection";
import Faq from "@/components/solutions/Faq";
import Features from "@/components/solutions/Features";
import HowWorksSections from "@/components/solutions/HowWorksSections";
import IntegrationsSections from "@/components/solutions/IntegrationsSections";
import TestimonySection from "@/components/solutions/TestimonySection";
import WhatWeDo from "@/components/solutions/WhatweDo";
import { testimonies } from "@/lib/testimonial";
import Image from "next/image";
import Link from "next/link";

const whatwedo = [
  {
    id: 1,
    question: "Always On ",
    answer: "Set it and forget it. Zigment is selling 24/7",
    img: alwaysOn,
  },
  {
    id: 2,
    question: "Immediate Engagement",
    answer: "Zigment's A.I. Agent talks on your behalf",
    img: instant,
  },
  {
    id: 3,
    question: "Reduce Human Capital",
    answer: "Save management headaches and use intelligent A.I.",
    img: reduce,
  },
];

const features = [
  {
    id: 1,
    title: "Engage, Don’t Just Display",
    para: "Why settle for static ads when you can have interactive ones? Zigment helps you talk to each viewer like you've got a personal hotline to their interests.",
    img: img2,
  },
  {
    id: 2,
    title: "Real-Time Conversations",
    para: "Don't let your audience lose interest with dull SMS templates. Engage them in real-time, right when they’re eyeballing your ad.",
    img: img3,
  },
  {
    id: 3,
    title: "Data-Driven Insights",
    para: "It’s more than just a click or a view; it's understanding your audience. Get deep insights from every interaction, not just surface-level metrics.",
    img: img4,
  },
  {
    id: 4,
    title: "Scales Like a Dream",
    para: "From a handful of viewers to a football stadium's worth, Zigment scales effortlessly to match your ad campaign's reach.",
    img: img5,
  },
];



const comparisionFeatures = [
  {
    id: 1,
    name: "Interactive vs Static",
    description: "Your ads can now talk, literally!",
  },
  {
    id: 2,
    name: "Instant Engagement vs Delayed Responses",
    description: "Connect when they're hooked, not hours later.",
  },
  {
    id: 3,
    name: "Deep Analytics vs Shallow Metrics",
    description: "Know your audience, don't just count them.",
  },
  {
    id: 4,
    name: "Cost-Efficient vs High Overheads",
    description: "Achieve more with less, we're not kidding.",
  },
  {
    id: 5,
    name: "Easy Scaling vs Manual Hassles",
    description: "Zigment grows with you, no sweat.",
  },
];

const howworks = [
  {
    title: "Initial Onboarding",
    description: `Just provide your business objectives and preferences. We take care of the rest.
      `,
    imageUrl: img15,
  },
  {
    title: "Integration With Your Process",
    description:
      "Zigment easily plugs into your existing CRM, be it Salesforce, Hubspot, or any other.",
    imageUrl: img16,
  },
  {
    title: "See the Magic, In Real-Time",
    description:
      "Track conversions, engagement, and more through a user-friendly analytics dashboard.",
    imageUrl: img17,
  },
];

const chatbotFeatures = [
  {
    id: 1,
    name: "A Conversationalist, Not a Coder",
    description:
      "Zigment doesn’t spit out canned replies. It engages in natural, flowing conversations.",
  },
  {
    id: 2,
    name: "Depth, Not Just Data",
    description:
      "Beyond just numbers, Zigment provides insights that can redefine your advertising strategy.",
  },
  {
    id: 3,
    name: "Adapts and Learns",
    description:
      "Zigment gets better over time, refining its interactions based on past conversations.",
  },
];

type Props = {};

const advertising = (props: Props) => {
  return (
    <LandingPageLayout>
      <MetaTagsComponents 
        title={"Zigment for Advertising – Maximizing Ad ROI with AI"} 
        description="Amplify your advertising ROI with Zigment, using AI-driven responses to convert clicks into customers and streamline your ad engagement process."
        keywords={"AI Advertising, Ad Conversion, Click-to-Customer AI, Advertising ROI, Zigment AI, Marketing Automation, Digital Ad Engagement"}
      /> 
      <CustomHero heading1="Turn Ads Into" heading2="Conversations" img={hero}>
        <h1 className="text-4xl font-black text-gray-900 sm:text-5xl   lg:text-6xl xl:text-6xl  leading-tight">
          <div className="relative leading-tight">
            <p className="block xl:inline ">Turn Ads Into</p>{" "}
            <Image
              src={line}
              alt=""
              className="absolute  w-[250px] sm:w-[350px] inset-x-0 mx-auto lg:mx-0 left-0  lg:w-[600px] -bottom-4 lg:-bottom-6 "
            />
          </div>
          <span className="block   xl:inline leading-tight">Conversations</span>
        </h1>
        <div className="mt-2 lg:mt-10  ">
            <div className="rounded-md w-full flex items-center relative justify-center lg:justify-start">
              <Link
                href={"/contactus?utm_source=organic&utm_campaign=hero_button_advertising"}
                className="inline-block  bg-brand-orange-deski hover:bg-red-500 rounded-md right-2 text-white font-medium sm:font-semibold px-4 sm:px-8   sm:py-3 py-2 text-sm sm:text-base"
              >
                Schedule A Demo
              </Link>
            </div>
            <div className="mx-auto max-w-7xl   py-4">
              <h2 className="lg:text-left text-lg font-semibold text-center leading-8 text-gray-900">
                Integrated with
                <span className="text-brand-orange-deski text-3xl"> 100+ </span>
                popular CRMs
              </h2>
            </div>
          </div>
      </CustomHero>
      <WhatWeDo data={whatwedo} />
      <Features contents={features}>
        <h2 className="hidden sm:block mb-10 text-2xl font-bold text-center leading-loose	mx-auto	 text-gray-900 sm:text-5xl">
          A Futuristic Upgrade For Your Sales Funnel
          <Image
            src={line}
            alt=""
            className="w-[420px] absolute left-[172px]     -bottom-8"
          />
        </h2>
      </Features>
      <EmphasisSection
        heading="Ads are not just billboards;
        they're the first handshake.
        Make them count."
        sub1="Ads are not just billboards;
        "
        sub2="they're the first handshake.
        "
        sub3="Make them count.
        "
      />
      <TestimonySection testimonies={testimonies} />
      <ComparisionSection comparisionFeatures={comparisionFeatures}>
        <h3 className="text-4xl font-bold   text-gray-900 sm:text-5xl   lg:text-6xl xl:text-6xl">
          <div>5 Reasons to </div>
          <Image src={line} alt="" className="w-[200px] sm:w-[300px]  " />

          <div className="-mt-3">Choose Us</div>
        </h3>
      </ComparisionSection>
      <HowWorksSections howworks={howworks} />
      <IntegrationsSections
        title={"Easy Integration"}
        description={`Everywhere Your Customer Is, So Are We. Zigment can work on most customer engagement channels like FB/Insta, Whatsapp, SMS, Email, etc., and can seamlessly integrate with Salesforce, Hubspot, Zoho, Freshdesk, and many more. 
        `}
      />
      <ChatBotFeaturesSection chatbotFeatures={chatbotFeatures} />
      <Faq />
    </LandingPageLayout>
  );
};

export default advertising;
