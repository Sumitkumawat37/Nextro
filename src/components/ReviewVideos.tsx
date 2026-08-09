'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import reviewVideos from '@/data/reviewVideos.json';

const ReviewVideos = () => {
  const getYouTubeThumbnail = (youtubeId: string) => {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  };

  const getYouTubeUrl = (youtubeId: string) => {
    return `https://www.youtube.com/watch?v=${youtubeId}`;
  };

  const handleVideoClick = (youtubeId: string) => {
    window.open(getYouTubeUrl(youtubeId), '_blank');
  };

  return (
    <section id="reviews" style={{ padding: 'clamp(48px, 8vw, 96px) 0', backgroundColor: '#F9FAFB' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px', width: '100%', boxSizing: 'border-box' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vw, 64px)' }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, marginBottom: '16px' }}>
            <span style={{ background: 'linear-gradient(135deg, #2448D8 0%, #3D5FE8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Customer Reviews</span>
          </h2>
          <p style={{ fontSize: 'clamp(16px, 3vw, 20px)', color: '#4B5563', maxWidth: '672px', margin: '0 auto', lineHeight: 1.6 }}>
            See what our customers have to say about our Smart AV Solutions
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(24px, 5vw, 32px)' }}>
          {reviewVideos.videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              style={{ backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', border: '1px solid #F3F4F6', transition: 'all 0.3s', overflow: 'hidden' }}
            >
              {/* Video Thumbnail */}
              <div 
                onClick={() => handleVideoClick(video.youtubeId)}
                style={{ position: 'relative', paddingTop: '56.25%', backgroundColor: '#000', overflow: 'hidden', cursor: 'pointer' }}
              >
                <img
                  src={getYouTubeThumbnail(video.youtubeId)}
                  alt={video.title}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}
                  >
                    <Play size={28} style={{ color: '#2448D8', marginLeft: '4px' }} />
                  </motion.div>
                </div>
              </div>

              {/* Video Info */}
              <div style={{ padding: 'clamp(16px, 4vw, 24px)' }}>
                <h3 style={{ fontSize: 'clamp(16px, 3vw, 20px)', fontWeight: 700, color: '#10172B', marginBottom: '8px', lineHeight: 1.3 }}>
                  {video.title}
                </h3>
                <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#4B5563', lineHeight: 1.6 }}>
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewVideos;
