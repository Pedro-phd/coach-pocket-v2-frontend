'use client'
import { cn } from '@/lib/utils'
import { Manrope } from 'next/font/google'
import { motion } from 'framer-motion';


const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin']  })

export default function Home() {
  return (
   <main className="flex flex-col gap-2 items-center justify-center h-full space-x-2 p-4">
      <motion.h2
        initial={{ opacity: 0, filter: 'blur(5px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ ease: 'easeInOut', duration: .3 }}
        className={
          cn("scroll-m-20 text-2xl text-center md:text-4xl tracking-tight lg:text-5xl text-zinc-800", 
          manrope.className)}>
        Bem-vindo, novamente Pedro!
      </motion.h2>
      <div className='flex gap-4'>

      <motion.h3 
        className={cn("scroll-m-20 text-xl md:text-2xl tracking-tight text-zinc-500", manrope.className)}
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y:0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: .5, delay: .2 }}
      >
        113 <span className='text-sm md:text-lg'>Alunos</span>
      </motion.h3>
      <motion.h3
        className={cn("scroll-m-20 text-xl md:text-2xl tracking-tight text-zinc-500", manrope.className)}
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y:0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: .5, delay: .4 }} 
      >
        78 <span className='text-sm md:text-lg'>Treinos</span>
      </motion.h3>
      <motion.h3
        className={cn("scroll-m-20 text-xl md:text-2xl tracking-tight text-zinc-500", manrope.className)}
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y:0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: .5, delay: .6 }} 
      >
        43 <span className='text-sm md:text-lg'>Dietas</span>
      </motion.h3>
      </div>
   </main>
  );
}
