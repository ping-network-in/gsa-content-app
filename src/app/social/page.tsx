'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  HeartIcon, 
  ChatBubbleLeftIcon, 
  ArrowPathRoundedSquareIcon,
  ShareIcon
} from '@heroicons/react/24/outline'
import { 
  HeartIcon as HeartSolidIcon
} from '@heroicons/react/24/solid'

const mockPosts = [
  {
    id: 1,
    platform: 'linkedin',
    author: {
      name: 'Sarah Chen',
      username: 'sarahchen_ai',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      title: 'Computer Science Student at MIT'
    },
    content: 'Just finished building an AI-powered study assistant using Google Gemini! 🤖✨ It helps me summarize complex research papers and generates practice questions. The future of education is here! #GoogleGemini #PingNetwork #GoogleStudentAmbassador #AIEducation',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    timestamp: '2 hours ago',
    likes: 127,
    comments: 23,
    shares: 15,
    liked: false
  },
  {
    id: 2,
    platform: 'twitter',
    author: {
      name: 'Alex Rodriguez',
      username: 'alexr_creates',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    content: 'Created this amazing digital art piece with AI assistance! Google Gemini helped me brainstorm concepts and refine my creative process. Technology + creativity = magic ✨🎨 #GoogleGemini #PingNetwork #GoogleStudentAmbassador #CreativeAI',
    image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800',
    timestamp: '4 hours ago',
    likes: 89,
    comments: 12,
    shares: 34,
    liked: true
  },
  {
    id: 3,
    platform: 'linkedin',
    author: {
      name: 'Maya Patel',
      username: 'mayapatel_dev',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      title: 'Data Science Student at Stanford'
    },
    content: 'Excited to share my latest project: an AI chatbot that helps students with mental health resources! 🧠💚 Using Google Gemini to provide empathetic responses and connect students with appropriate support. AI for social good! #GoogleGemini #PingNetwork #GoogleStudentAmbassador #AIForGood',
    timestamp: '6 hours ago',
    likes: 203,
    comments: 45,
    shares: 28,
    liked: false
  },
  {
    id: 4,
    platform: 'twitter',
    author: {
      name: 'Jordan Kim',
      username: 'jordankim_tech',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    content: 'Thread 🧵: How I use Google Gemini as my coding buddy! From debugging to code optimization, AI has transformed my development workflow. Here are 5 ways it boosted my productivity... #GoogleGemini #PingNetwork #GoogleStudentAmbassador #CodingLife',
    timestamp: '8 hours ago',
    likes: 156,
    comments: 31,
    shares: 67,
    liked: true
  }
]

export default function SocialPage() {
  const [posts, setPosts] = useState(mockPosts)
  const [filter, setFilter] = useState('all')

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            liked: !post.liked, 
            likes: post.liked ? post.likes - 1 : post.likes + 1 
          }
        : post
    ))
  }

  const filteredPosts = filter === 'all' ? posts : posts.filter(post => post.platform === filter)

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return (
          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
          </svg>
        )
      case 'twitter':
        return (
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-gray-50 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Social Media Feed
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            See how students are sharing their Google AI experiences across social platforms
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <Button
              variant={filter === 'all' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setFilter('all')}
              className="rounded-md"
            >
              All Posts
            </Button>
            <Button
              variant={filter === 'linkedin' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setFilter('linkedin')}
              className="rounded-md"
            >
              LinkedIn
            </Button>
            <Button
              variant={filter === 'twitter' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setFilter('twitter')}
              className="rounded-md"
            >
              X (Twitter)
            </Button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                          {getPlatformIcon(post.platform)}
                        </div>
                        <p className="text-sm text-gray-500">@{post.author.username}</p>
                        {post.author.title && (
                          <p className="text-sm text-gray-500">{post.author.title}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{post.timestamp}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-800 mb-4 leading-relaxed">{post.content}</p>
                  
                  {post.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img
                        src={post.image}
                        alt="Post content"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Engagement Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-6">
                      <button
                        onClick={() => handleLike(post.id)}
                        className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors"
                      >
                        {post.liked ? (
                          <HeartSolidIcon className="w-5 h-5 text-red-500" />
                        ) : (
                          <HeartIcon className="w-5 h-5" />
                        )}
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                        <ChatBubbleLeftIcon className="w-5 h-5" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                        <ArrowPathRoundedSquareIcon className="w-5 h-5" />
                        <span className="text-sm">{post.shares}</span>
                      </button>
                    </div>
                    
                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                      <ShareIcon className="w-5 h-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Share Your Story?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join these amazing students and share your own Google AI experiences. 
                Create content, engage with the community, and earn ambassador rewards!
              </p>
              <Button className="google-gradient text-white px-8 py-3">
                Submit Your Content
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}