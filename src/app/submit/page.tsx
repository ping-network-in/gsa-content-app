'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  university: z.string().min(2, 'University name is required'),
  platform: z.enum(['linkedin', 'instagram', 'twitter'], {
    required_error: 'Please select a platform',
  }),
  postUrl: z.string().url('Please enter a valid URL'),
  contentType: z.string().min(1, 'Please select a content type'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  hashtags: z.string().min(1, 'Please confirm you used the required hashtags'),
})

type FormData = z.infer<typeof formSchema>

const contentTypes = [
  'Educational Post',
  'Creative Project',
  'Tutorial/How-to',
  'Personal Experience',
  'AI Tool Review',
  'Community Discussion',
  'Other'
]

export default function SubmitPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    setIsLoading(false)
    reset()
  }

  if (isSubmitted) {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircleIcon className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Submission Successful!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for submitting your content. We'll review it within 24-48 hours and update your ambassador status.
            </p>
            <div className="space-x-4">
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="google-gradient text-white"
              >
                Submit Another Post
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/'}>
                Back to Home
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Submit Your Content
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Share your post links with us to track your engagement and qualify for ambassador rewards.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Content Submission Form</CardTitle>
              <CardDescription>
                Fill out the form below to submit your social media post for tracking and review.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-2">
                    University/Institution *
                  </label>
                  <input
                    {...register('university')}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your university name"
                  />
                  {errors.university && (
                    <p className="mt-1 text-sm text-red-600">{errors.university.message}</p>
                  )}
                </div>

                {/* Post Information */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="platform" className="block text-sm font-medium text-gray-700 mb-2">
                      Platform *
                    </label>
                    <select
                      {...register('platform')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select platform</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="instagram">Instagram</option>
                      <option value="twitter">X (Twitter)</option>
                    </select>
                    {errors.platform && (
                      <p className="mt-1 text-sm text-red-600">{errors.platform.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contentType" className="block text-sm font-medium text-gray-700 mb-2">
                      Content Type *
                    </label>
                    <select
                      {...register('contentType')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select content type</option>
                      {contentTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.contentType && (
                      <p className="mt-1 text-sm text-red-600">{errors.contentType.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="postUrl" className="block text-sm font-medium text-gray-700 mb-2">
                    Post URL *
                  </label>
                  <input
                    {...register('postUrl')}
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://..."
                  />
                  {errors.postUrl && (
                    <p className="mt-1 text-sm text-red-600">{errors.postUrl.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Content Description *
                  </label>
                  <textarea
                    {...register('description')}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Briefly describe your post content and its relevance to the campaign..."
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      {...register('hashtags')}
                      type="checkbox"
                      value="confirmed"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      I confirm that my post includes the required hashtags: 
                      <span className="font-medium"> #GoogleGemini #PingNetwork #GoogleStudentAmbassador</span>
                    </span>
                  </label>
                  {errors.hashtags && (
                    <p className="mt-1 text-sm text-red-600">{errors.hashtags.message}</p>
                  )}
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full google-gradient text-white py-3 text-lg"
                  >
                    {isLoading ? 'Submitting...' : 'Submit Content'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}