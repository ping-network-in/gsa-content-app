'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  MegaphoneIcon,
  HeartIcon,
  TrophyIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const phases = [
  {
    title: "Awareness Phase",
    description: "Spread the word about Google AI tools and their impact on education and creativity.",
    icon: MegaphoneIcon,
    color: "bg-blue-500",
    goals: [
      "Create educational content about Google AI",
      "Share personal experiences with AI tools",
      "Reach minimum 100 impressions per post",
      "Use required hashtags consistently"
    ]
  },
  {
    title: "Engagement Phase",
    description: "Build meaningful connections and foster discussions around AI innovation.",
    icon: HeartIcon,
    color: "bg-green-500",
    goals: [
      "Generate meaningful conversations",
      "Respond to comments and questions",
      "Collaborate with other ambassadors",
      "Achieve 50+ engagements per post"
    ]
  },
  {
    title: "Rewards Phase",
    description: "Earn recognition and rewards based on your contribution and impact.",
    icon: TrophyIcon,
    color: "bg-purple-500",
    goals: [
      "Qualify for exclusive Google swag",
      "Get featured on official channels",
      "Receive certificates of participation",
      "Access to exclusive AI workshops"
    ]
  }
]

const guidelines = [
  "All content must be original and authentic",
  "Include required hashtags: #GoogleGemini #PingNetwork #GoogleStudentAmbassador",
  "Post consistently (minimum 2 posts per week)",
  "Engage respectfully with the community",
  "Follow platform-specific community guidelines",
  "Submit post links within 24 hours of publishing"
]

const rewards = [
  {
    tier: "Bronze Ambassador",
    requirement: "5+ approved posts",
    benefits: ["Digital certificate", "LinkedIn badge", "Community access"]
  },
  {
    tier: "Silver Ambassador", 
    requirement: "15+ approved posts with high engagement",
    benefits: ["Google swag package", "Featured spotlight", "Mentorship opportunity"]
  },
  {
    tier: "Gold Ambassador",
    requirement: "25+ approved posts with exceptional impact",
    benefits: ["Exclusive workshop access", "Google campus visit", "Recommendation letter"]
  }
]

export default function CampaignPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Campaign Details
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Learn about the campaign structure, goals, and how to maximize your impact as a Google AI Pro Student Ambassador.
          </motion.p>
        </div>

        {/* Campaign Phases */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Campaign Phases</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-16 h-16 ${phase.color} rounded-full flex items-center justify-center mb-4`}>
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{phase.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {phase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="flex items-start gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guidelines */}
        <div className="mt-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Campaign Guidelines</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Participation Requirements</CardTitle>
                <CardDescription>
                  Follow these guidelines to ensure your content meets campaign standards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {guidelines.map((guideline, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircleIcon className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{guideline}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Rewards */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Ambassador Rewards</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {rewards.map((reward, index) => (
              <motion.div
                key={reward.tier}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className={`h-full hover:shadow-lg transition-shadow ${
                  index === 2 ? 'ring-2 ring-yellow-400' : ''
                }`}>
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                      index === 0 ? 'bg-orange-100' : 
                      index === 1 ? 'bg-gray-100' : 'bg-yellow-100'
                    }`}>
                      <TrophyIcon className={`w-8 h-8 ${
                        index === 0 ? 'text-orange-600' : 
                        index === 1 ? 'text-gray-600' : 'text-yellow-600'
                      }`} />
                    </div>
                    <CardTitle className="text-xl">{reward.tier}</CardTitle>
                    <CardDescription className="text-base font-medium text-gray-900">
                      {reward.requirement}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {reward.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}