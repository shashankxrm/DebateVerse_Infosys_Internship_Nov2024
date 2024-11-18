import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <main className='flex h-screen w-full flex-col items-center justify-center gap-10'>
        <SignIn />
    </main>
  )
}

// refer to the readme file for live link of the application