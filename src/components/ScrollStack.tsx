// components/ScrollStack.tsx (Fixed Version)
import React, { type ReactNode, useLayoutEffect, useRef, useCallback } from 'react';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full min-h-[200px] my-6 p-6 rounded-2xl box-border origin-top ${itemClassName}`.trim()}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: number;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 60,
  itemScale = 0.06,
  itemStackDistance = 30,
  stackPosition = 100,
  baseScale = 0.85,
  rotationAmount = 0.3,
  blurAmount = 0.5,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || !scrollerRef.current) return;

    const scrollTop = scrollerRef.current.scrollTop;
    const containerHeight = scrollerRef.current.clientHeight;

    cardsRef.current.forEach((card, index) => {
      const cardTop = card.offsetTop;

      // Calculate when this card should start stacking
      const stackStart = cardTop - stackPosition - (index * itemStackDistance);
      const stackEnd = stackStart + containerHeight * 0.8;

      // Calculate progress through the stacking animation
      let progress = 0;
      if (scrollTop >= stackStart) {
        progress = Math.min(1, (scrollTop - stackStart) / (stackEnd - stackStart));
      }

      // Apply transformations based on progress
      const scale = 1 - (progress * (1 - (baseScale + index * itemScale)));
      const translateY = progress * (index * itemStackDistance);
      const rotation = progress * (index * rotationAmount);
      const blur = progress * (index * blurAmount);

      // Apply styles
      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
      card.style.filter = `blur(${blur}px)`;
      card.style.zIndex = `${cardsRef.current.length - index}`;
    });
  }, [itemScale, itemStackDistance, stackPosition, baseScale, rotationAmount, blurAmount]);

  const handleScroll = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(updateCardTransforms);
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Initialize cards
    const cards = Array.from(scroller.querySelectorAll('.scroll-stack-card')) as HTMLElement[];
    cardsRef.current = cards;

    // Set initial styles
    cards.forEach((card, index) => {
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.transition = 'none';
      card.style.position = 'relative';

      if (index < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
    });

    // Initial update
    updateCardTransforms();

    // Add scroll listener
    scroller.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateCardTransforms);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      scroller.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateCardTransforms);

      // Clean up styles
      cards.forEach(card => {
        card.style.transform = '';
        card.style.filter = '';
        card.style.zIndex = '';
        card.style.marginBottom = '';
      });
    };
  }, [handleScroll, updateCardTransforms, itemDistance]);

  return (
    <div
      ref={scrollerRef}
      className={`relative w-full h-full overflow-y-auto ${className}`}
      style={{ scrollBehavior: 'auto' }}
    >
      <div className="scroll-stack-inner">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;