'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  SparklesIcon, 
  ShareIcon, 
  TrophyIcon,
  LightBulbIcon,
  UsersIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const sampleCampaigns = [
  {
    title: "AI in Education",
    description: "Share how Google AI tools are transforming learning experiences in your field of study.",
    hashtags: "#GoogleGemini #AIEducation #StudentLife",
    icon: LightBulbIcon,
    color: "bg-blue-500"
  },
  {
    title: "Creative AI Projects",
    description: "Showcase your creative projects using Google AI tools - art, music, writing, or coding.",
    hashtags: "#GoogleGemini #CreativeAI #Innovation",
    icon: SparklesIcon,
    color: "bg-purple-500"
  },
  {
    title: "AI for Social Good",
    description: "Highlight how AI can solve real-world problems in your community or globally.",
    hashtags: "#GoogleGemini #AIForGood #SocialImpact",
    icon: GlobeAltIcon,
    color: "bg-green-500"
  },
  {
    title: "Study Buddy AI",
    description: "Document your experience using AI as a study companion and learning assistant.",
    hashtags: "#GoogleGemini #StudyTips #AILearning",
    icon: UsersIcon,
    color: "bg-orange-500"
  }
]

const instructions = [
  {
    step: "1",
    title: "Choose Your Campaign",
    description: "Select from our sample campaigns or create your own unique content idea.",
    icon: LightBulbIcon
  },
  {
    step: "2",
    title: "Create & Share",
    description: "Post your content on LinkedIn, Instagram, or X with the required hashtags.",
    icon: ShareIcon
  },
  {
    step: "3",
    title: "Submit Your Link",
    description: "Use our submission form to track your posts and engagement.",
    icon: TrophyIcon
  }
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4285f4] to-[#34a853] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Join the{' '}
              <span className="google-gradient bg-clip-text text-transparent">
                Google AI Pro Campaign
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
            >
              Share your creativity with the world! Participate in our student ambassador campaign, 
              showcase your AI projects, and connect with a global community of innovators.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link href="/submit">
                <Button size="lg" className="google-gradient text-white px-8 py-3 text-lg">
                  Start Creating Content
                </Button>
              </Link>
              <Link href="/campaign">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Instructions Section */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How to Participate
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Follow these simple steps to join the campaign and start sharing your content
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {instructions.map((instruction, index) => (
                <motion.div
                  key={instruction.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <instruction.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                        {instruction.step}
                      </div>
                      <CardTitle className="text-xl">{instruction.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-base">
                        {instruction.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sample Campaigns Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sample Campaign Ideas
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Get inspired by these campaign ideas or create your own unique content
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {sampleCampaigns.map((campaign, index) => (
              <motion.div
                key={campaign.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${campaign.color} rounded-lg flex items-center justify-center`}>
                        <campaign.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {campaign.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {campaign.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {campaign.hashtags.split(' ').map((hashtag) => (
                        <span
                          key={hashtag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {hashtag}
                        </span>
                      ))}
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        #PingNetwork
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        #GoogleStudentAmbassador
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/submit">
              <Button size="lg" className="google-gradient text-white">
                Submit Your Content
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}