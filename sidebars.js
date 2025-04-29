// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  promptSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Digital Media',
      link: {
        type: 'doc',
        id: 'digital-media/index',
      },
      items: [
        {
          type: 'category',
          label: 'Web & Content',
          link: {
            type: 'doc',
            id: 'digital-media/web-content/index',
          },
          items: [
            'digital-media/web-content/websites-landing-pages/index',
            'digital-media/web-content/seo-content-blogs/index',
            'digital-media/web-content/digital-infographics/index',
            'digital-media/web-content/content-marketing/index',
            'digital-media/web-content/microsites-campaign-portals/index',
          ],
        },
        {
          type: 'category',
          label: 'Social Media',
          link: {
            type: 'doc',
            id: 'digital-media/social-media/index',
          },
          items: [
            'digital-media/social-media/organic-social-posts/index',
            'digital-media/social-media/paid-social-advertising/index',
            'digital-media/social-media/short-form-videos/index',
            'digital-media/social-media/influencer-ugc/index',
          ],
        },
        {
          type: 'category',
          label: 'Email & Messaging',
          link: {
            type: 'doc',
            id: 'digital-media/email-messaging/index',
          },
          items: [
            'digital-media/email-messaging/newsletters/index',
            'digital-media/email-messaging/drip-campaigns/index',
            'digital-media/email-messaging/sms-mms-campaigns/index',
            'digital-media/email-messaging/chatbot-messenger/index',
          ],
        },
        {
          type: 'category',
          label: 'Digital Advertising',
          link: {
            type: 'doc',
            id: 'digital-media/digital-advertising/index',
          },
          items: [
            'digital-media/digital-advertising/display-ads/index',
            'digital-media/digital-advertising/video-ads/index',
            'digital-media/digital-advertising/ppc-campaigns/index',
            'digital-media/digital-advertising/native-advertising/index',
          ],
        },
        {
          type: 'category',
          label: 'Mobile',
          link: {
            type: 'doc',
            id: 'digital-media/mobile/index',
          },
          items: [
            'digital-media/mobile/app-ads-interfaces/index',
            'digital-media/mobile/push-notifications/index',
            'digital-media/mobile/sms-content-campaigns/index',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Audio & Radio Media',
      link: {
        type: 'doc',
        id: 'audio-radio/index',
      },
      items: [
        'audio-radio/radio-commercials/index',
        'audio-radio/jingles-audio-logos/index',
        'audio-radio/podcast-production/index',
        'audio-radio/voice-over-narration/index',
        'audio-radio/audio-branding/index',
      ],
    },
    {
      type: 'category',
      label: 'Video & Film Media',
      link: {
        type: 'doc',
        id: 'video-film/index',
      },
      items: [
        'video-film/tv-commercials/index',
        'video-film/online-video-advertising/index',
        'video-film/corporate-explainer-videos/index',
        'video-film/product-demonstrations/index',
        'video-film/livestreaming-webinars/index',
        'video-film/branded-web-series/index',
      ],
    },
    {
      type: 'category',
      label: 'Outdoor & Transit Media',
      link: {
        type: 'doc',
        id: 'outdoor-transit/index',
      },
      items: [
        'outdoor-transit/billboards/index',
        'outdoor-transit/transit-advertising/index',
        'outdoor-transit/digital-signage/index',
        'outdoor-transit/ambient-guerrilla/index',
        'outdoor-transit/outdoor-banners/index',
      ],
    },
    {
      type: 'category',
      label: 'Event & Experiential Media',
      link: {
        type: 'doc',
        id: 'event-experiential/index',
      },
      items: [
        'event-experiential/trade-shows/index',
        'event-experiential/pop-up-installations/index',
        'event-experiential/interactive-kiosks/index',
        'event-experiential/live-event-activations/index',
        'event-experiential/sponsorships/index',
      ],
    },
    {
      type: 'category',
      label: 'Emerging & Interactive Technologies',
      link: {
        type: 'doc',
        id: 'emerging-technologies/index',
      },
      items: [
        'emerging-technologies/vr-experiences/index',
        'emerging-technologies/ar-campaigns/index',
        'emerging-technologies/holographic-displays/index',
        'emerging-technologies/projection-mapping/index',
        'emerging-technologies/interactive-installations/index',
      ],
    },
    {
      type: 'category',
      label: 'Promotional & Multimedia Campaigns',
      link: {
        type: 'doc',
        id: 'promotional-multimedia/index',
      },
      items: [
        'promotional-multimedia/digital-presentations/index',
        'promotional-multimedia/digital-giveaways/index',
        'promotional-multimedia/branded-content-series/index',
        'promotional-multimedia/integrated-campaigns/index',
      ],
    },
  ],
};

export default sidebars;
