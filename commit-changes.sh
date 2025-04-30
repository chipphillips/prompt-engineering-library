#!/bin/bash

# Stage all changes
git add docs/digital-media/email-messaging/newsletters/index.md
git add docs/digital-media/social-media/influencer-ugc/index.md
git add docs/digital-media/social-media/organic-social-posts/index.md
git add docs/digital-media/social-media/paid-social-advertising/index.md
git add docs/digital-media/social-media/short-form-videos/index.md
git add docs/digital-media/web-content/content-marketing/index.md
git add docs/digital-media/web-content/digital-infographics/index.md
git add docs/digital-media/web-content/microsites-campaign-portals/index.md
git add docs/digital-media/web-content/seo-content-blogs/index.md
git add docs/digital-media/web-content/websites-landing-pages/index.md
git add package-lock.json

# Commit the changes
git commit -m "Update digital media documentation with prompt engineering content"

echo "Changes committed successfully!" 