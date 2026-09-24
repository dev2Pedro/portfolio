'use client'

import { motion, useMotionValue, useTransform, type PanInfo } from 'motion/react'
import { useState, useEffect } from 'react'

interface CardRotateProps {
  children: React.ReactNode
  onSendToBack: () => void
  sensitivity: number
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [60, -60])
  const rotateY = useTransform(x, [-100, 100], [-60, 60])

  function handleDragEnd(
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack()
    } else {
      x.set(0)
      y.set(0)
    }
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  )
}

const VISIBLE_DEPTH = 5

interface StackCard {
  id: number
  content: React.ReactNode
  rotation: number
}

interface StackProps {
  cards: React.ReactNode[]
  randomRotation?: boolean
  sensitivity?: number
  animationConfig?: { stiffness: number; damping: number }
  autoplay?: boolean
  autoplayDelay?: number
  pauseOnHover?: boolean
}

export default function Stack({
  cards,
  randomRotation = false,
  sensitivity = 200,
  animationConfig = { stiffness: 260, damping: 20 },
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
}: StackProps) {
  const buildStack = (cards: React.ReactNode[]): StackCard[] =>
    cards.map((content, index) => ({
      id: index + 1,
      content,
      rotation: 0,
    }))

  const [isPaused, setIsPaused] = useState(false)
  const [stack, setStack] = useState<StackCard[]>(() => buildStack(cards))

  useEffect(() => {
    if (!randomRotation) return
    setStack((prev) =>
      prev.map((card) => ({ ...card, rotation: Math.random() * 10 - 5 })),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const sendToBack = (id: number) => {
    setStack((prev) => {
      const newStack = [...prev]
      const index = newStack.findIndex((card) => card.id === id)
      const [card] = newStack.splice(index, 1)
      newStack.unshift(card)
      return newStack
    })
  }

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        const topCardId = stack[stack.length - 1].id
        sendToBack(topCardId)
      }, autoplayDelay)

      return () => clearInterval(interval)
    }
  }, [autoplay, autoplayDelay, stack, isPaused])

  return (
    <div
      className="relative w-full h-full"
      style={{ perspective: 600 }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => {
        const distanceFromTop = Math.min(stack.length - index - 1, VISIBLE_DEPTH)
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="rounded-2xl overflow-hidden w-full h-full"
              animate={{
                rotateZ: distanceFromTop * 4 + card.rotation,
                scale: 1 - distanceFromTop * 0.06,
                opacity: stack.length - index - 1 > VISIBLE_DEPTH ? 0 : 1,
                transformOrigin: '90% 90%',
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        )
      })}
    </div>
  )
}
