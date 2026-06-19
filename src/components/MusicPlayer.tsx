'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [showPrompt, setShowPrompt] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  const tryAutoplay = useCallback(async () => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        setAutoplayBlocked(true);
        setShowPrompt(true);
      }
    }
  }, [volume]);

  useEffect(() => {
    // Delay autoplay attempt slightly
    const timer = setTimeout(() => {
      tryAutoplay();
    }, 1000);
    return () => clearTimeout(timer);
  }, [tryAutoplay]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        setShowPrompt(false);
        setAutoplayBlocked(false);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
      if (audioRef.current) audioRef.current.muted = false;
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/music/wedding-music.mp3"
      />

      {/* Autoplay blocked prompt */}
      {showPrompt && autoplayBlocked && (
        <div className="autoplay-prompt">
          <p className="mb-2 text-sm leading-relaxed">
            🎵 Enable traditional wedding music for a richer experience.
          </p>
          <button
            onClick={() => {
              togglePlay();
              setShowPrompt(false);
            }}
            className="text-xs px-4 py-2 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[rgba(201,168,76,0.1)] transition-all rounded-sm font-[var(--font-serif)]"
          >
            Enable Music
          </button>
        </div>
      )}

      {/* Floating music control */}
      <div className="music-control">
        {/* Play / Pause */}
        <button onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'} title={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Volume slider */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          aria-label="Volume"
        />

        {/* Mute / Unmute */}
        <button onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'} title={isMuted ? 'Unmute' : 'Mute'}>
          {isMuted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>

        {/* Musical note icon */}
        <span className="text-[var(--color-gold)] opacity-50 text-xs">♪</span>
      </div>
    </>
  );
}
