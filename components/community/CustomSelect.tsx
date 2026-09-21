import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface CustomSelectProps {
  id: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
  disabled?: boolean;
}

export default function CustomSelect({
  id,
  value,
  onChange,
  options,
  placeholder,
  disabled
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [position, setPosition] = useState<'bottom' | 'top'>('bottom');

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Determine open direction based on viewport space
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      
      if (spaceBelow < 250 && spaceAbove > spaceBelow) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;

    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        setIsOpen(true);
        setFocusedIndex(value ? options.indexOf(value) : 0);
      }
      return;
    }

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < options.length) {
          onChange(options[focusedIndex]);
          setIsOpen(false);
          buttonRef.current?.focus();
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case 'Tab':
        setIsOpen(false);
        break;
    }
  };

  // Keep focused item in view
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && listboxRef.current) {
      const items = listboxRef.current.querySelectorAll('[role="option"]');
      const activeItem = items[focusedIndex] as HTMLElement;
      if (activeItem) {
        activeItem.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [isOpen, focusedIndex]);

  const isUp = position === 'top';

  return (
    <div className="relative" ref={containerRef} onKeyDown={handleKeyDown}>
      <button
        type="button"
        id={id}
        ref={buttonRef}
        disabled={disabled}
        onClick={() => {
          if (disabled) return;
          setIsOpen(!isOpen);
          if (!isOpen) setFocusedIndex(value ? options.indexOf(value) : 0);
        }}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={`${id}-listbox`}
        className={`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[14px] 
          focus:outline-none focus:border-[#D4AF37]/60 focus:bg-white/8 transition-all duration-200 
          disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-between text-left
          ${isOpen ? 'border-[#D4AF37]/60 bg-white/8 shadow-[0_0_0_1px_rgba(212,175,55,0.4)]' : ''}`}
      >
        <span className={value ? 'text-white truncate pr-4' : 'text-white/30 truncate pr-4'}>
          {value || placeholder}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-white/40 flex-shrink-0 transition-transform duration-200 ${isOpen ? (isUp ? '' : 'rotate-180 text-[#D4AF37]') : ''}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: isUp ? 4 : -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: isUp ? 4 : -4 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-[100] w-full py-1.5 bg-[#141414] border border-white/10 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.9)] overflow-hidden
              ${isUp ? 'bottom-full mb-2' : 'top-full mt-2'}`}
          >
            <ul
              id={`${id}-listbox`}
              role="listbox"
              ref={listboxRef}
              className="max-h-56 overflow-y-auto modal-scroll outline-none"
              tabIndex={-1}
            >
              {options.map((opt, index) => {
                const isSelected = value === opt;
                const isFocused = focusedIndex === index;
                return (
                  <li
                    key={opt}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      onChange(opt);
                      setIsOpen(false);
                      buttonRef.current?.focus();
                    }}
                    onMouseEnter={() => setFocusedIndex(index)}
                    className={`w-full text-left px-4 py-2.5 text-[13px] cursor-pointer transition-colors
                      ${isSelected ? 'bg-[#D4AF37]/15 text-[#D4AF37] font-medium' : ''}
                      ${!isSelected && isFocused ? 'bg-white/5 text-white' : ''}
                      ${!isSelected && !isFocused ? 'text-white/70' : ''}
                    `}
                  >
                    {opt}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
