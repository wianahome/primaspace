'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config' // Pastikan path mengarah ke file sanity.config.ts kamu

export default function StudioPage() {
  return <NextStudio config={config} />
  
}