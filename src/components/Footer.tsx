import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.036.388a3.892 3.892 0 00-1.407.923A3.892 3.892 0 00.628 2.718c-.184.484-.306 1.058-.34 2.005C.254 5.671.24 6.078.24 9.699v4.618c0 3.621.014 4.028.048 4.976.034.947.156 1.521.34 2.005a3.892 3.892 0 00.923 1.407 3.892 3.892 0 001.407.923c.484.184 1.058.306 2.005.34.948.034 1.355.048 4.976.048h4.618c3.621 0 4.028-.014 4.976-.048.947-.034 1.521-.156 2.005-.34a3.892 3.892 0 001.407-.923 3.892 3.892 0 00.923-1.407c.184-.484.306-1.058.34-2.005.034-.948.048-1.355.048-4.976V9.699c0-3.621-.014-4.028-.048-4.976-.034-.947-.156-1.521-.34-2.005a3.892 3.892 0 00-.923-1.407A3.892 3.892 0 0018.982.628c-.484-.184-1.058-.306-2.005-.34C16.029.013 15.622 0 12.017 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12.017 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2024 Google AI Pro Student Ambassador Campaign. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}