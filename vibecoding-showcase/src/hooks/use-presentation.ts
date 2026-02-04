"use client";

import { useEffect, useCallback, useState, useRef } from "react";

interface UsePresentationOptions {
  sectionIds: string[];
  onSectionChange?: (index: number) => void;
}

export function usePresentation({
  sectionIds,
  onSectionChange,
}: UsePresentationOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrollingRef = useRef(false);
  const lastScrollTimeRef = useRef(0);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const changeSection = useCallback(
    (newIndex: number) => {
      if (newIndex < 0 || newIndex >= sectionIds.length) return;
      if (isScrollingRef.current) return;

      const now = Date.now();
      if (now - lastScrollTimeRef.current < 1000) return; // Debounce threshold

      isScrollingRef.current = true;
      lastScrollTimeRef.current = now;

      setCurrentIndex(newIndex);
      onSectionChange?.(newIndex);

      // Allow next scroll after transition time
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    },
    [sectionIds, onSectionChange]
  );

  const goToNext = useCallback(() => {
    changeSection(currentIndex + 1);
  }, [currentIndex, changeSection]);

  const goToPrev = useCallback(() => {
    changeSection(currentIndex - 1);
  }, [currentIndex, changeSection]);

  const goToSection = useCallback(
    (index: number) => {
      changeSection(index);
    },
    [changeSection]
  );

  // Wheel navigation
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      // Prevent default to stop native scroll behaviors
      // event.preventDefault();

      if (Math.abs(event.deltaY) > 10) {
        if (event.deltaY > 0) {
          goToNext();
        } else {
          goToPrev();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [goToNext, goToPrev]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (event.key) {
        case "ArrowDown":
        case "ArrowRight":
        case " ": // Space
        case "PageDown":
          event.preventDefault();
          goToNext();
          break;
        case "ArrowUp":
        case "ArrowLeft":
        case "PageUp":
          event.preventDefault();
          goToPrev();
          break;
        case "Home":
          event.preventDefault();
          goToSection(0);
          break;
        case "End":
          event.preventDefault();
          goToSection(sectionIds.length - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, goToSection, sectionIds.length]);

  return {
    currentIndex,
    totalSections: sectionIds.length,
    goToNext,
    goToPrev,
    goToSection,
    isFirst: currentIndex === 0,
    isLast: currentIndex === sectionIds.length - 1,
  };
}
