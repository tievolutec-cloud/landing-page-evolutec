import React, { useState, useEffect } from 'react'
import './GaleriaFormatura.css'

const allImages = [
  { id: 1, src: '/formatura6.jpeg', alt: 'Formatura Turma 2024', type: 'large' },
  { id: 2, src: '/formatura5.jpeg', alt: 'Momentos Especiais', type: 'standard' },
  { id: 3, src: '/formatura3.jpeg', alt: 'Novos Profissionais', type: 'standard' },
  { id: 4, src: '/formatura4.jpeg', alt: 'Orgulho Evolutec', type: 'standard' },
  { id: 5, src: '/formatura2.jpeg', alt: 'Conquista', type: 'standard' },
  { id: 6, src: '/formatura.jpeg', alt: 'Formatura Geral', type: 'large' },
  { id: 7, src: '/a.jpg', alt: 'Evento Evolutec', type: 'standard' },
  { id: 8, src: '/b.jpg', alt: 'Alunos Evolutec', type: 'standard' },
  { id: 9, src: '/c.jpg', alt: 'Confraternização', type: 'standard' },
]

// Define slots and their required image type
const slots = [
  { className: 'galeria-item-large', type: 'large' },
  { className: 'galeria-item-tall', type: 'standard' },
  { className: 'galeria-item-small', type: 'standard' },
  { className: 'galeria-item-small', type: 'standard' },
  { className: 'galeria-item-small', type: 'standard' },
]

export default function GaleriaFormatura() {
  // Initial fill: find first matching image for each slot
  const [visibleIndices, setVisibleIndices] = useState(() => {
    const indices = []
    const used = new Set()
    
    slots.forEach(slot => {
      const idx = allImages.findIndex((img, i) => img.type === slot.type && !used.has(i))
      if (idx !== -1) {
        indices.push(idx)
        used.add(idx)
      } else {
         // Fallback if not enough matching types (shouldn't happen with correct data)
        indices.push(0) 
      }
    })
    return indices
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndices((currentIndices) => {
        // Identify which images are currently NOT used
        const availableIndices = allImages
          .map((_, i) => i)
          .filter(i => !currentIndices.includes(i))
        
        if (availableIndices.length === 0) return currentIndices

        // Pick a random available image
        const candidateIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)]
        const candidateType = allImages[candidateIndex].type

        // Find valid slots for this image type
        const validSlots = slots
          .map((slot, index) => ({ index, ...slot }))
          .filter(slot => slot.type === candidateType)
        
        if (validSlots.length === 0) return currentIndices

        // Pick a random valid slot to swap
        const targetSlot = validSlots[Math.floor(Math.random() * validSlots.length)]
        
        const newIndices = [...currentIndices]
        newIndices[targetSlot.index] = candidateIndex
        return newIndices
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="galeria-section">
      <div className="galeria-header">
        <h2 className="galeria-title">Se junte aos +5000 formados</h2>
        <p className="galeria-subtitle">
          Confira alguns registros de momentos inesquecíveis de nossos alunos e eventos.
        </p>
      </div>

      <div className="galeria-grid">
        {slots.map((slot, index) => {
          const imgIndex = visibleIndices[index]
          // Safety check in case index is invalid during hot reload/state transition
          const img = allImages[imgIndex] || allImages[0]
          
          return (
            <div key={`${img.id}-${index}`} className={`galeria-item ${slot.className}`}>
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy" 
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
