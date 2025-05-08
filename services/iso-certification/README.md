# SEES Global ISO Certification Website

This repository contains the website for SEES Global ISO Certification, providing information about certification, training, and audit services.

## Features

- Responsive design for all devices
- Dark/light mode theme toggle
- Interactive service cards
- Contact forms with FormSubmit integration
- Social media ad redirect functionality

## Social Media Ad URL Parameters

When creating ads on social media platforms, you can use the following URL parameters to enhance tracking and user experience:

### Basic Ad Tracking Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `source` | The platform where the ad is shown | `facebook`, `linkedin`, `instagram` |
| `campaign` | The marketing campaign name | `q1_certification`, `summer_training` |
| `ad_id` | Unique identifier for the specific ad | `cert_ad_001` |

### UTM Parameters (Alternative)

| Parameter | Description | Example |
|-----------|-------------|---------|
| `utm_source` | Traffic source | `facebook`, `newsletter` |
| `utm_medium` | Marketing medium | `cpc`, `social`, `email` |
| `utm_campaign` | Campaign name | `spring_promo`, `lagos_event` |

### Service Selection Parameters

| Parameter | Description | Values |
|-----------|-------------|--------|
| `service` | Direct users to specific service page | `certification`, `audit`, `training` |
| `form` | Pre-select form type | `nigeria`, `international` |

### Examples

1. Facebook ad for ISO 9001 Certification targeting Nigerian businesses:
   ```
   https://seesglobal.com/?source=facebook&campaign=iso9001_nigeria&service=certification&form=nigeria
   ```

2. LinkedIn ad for training services using UTM parameters:
   ```
   https://seesglobal.com/?utm_source=linkedin&utm_medium=social&utm_campaign=lead_gen&service=training
   ```

3. Instagram ad for audit services:
   ```
   https://seesglobal.com/?source=instagram&campaign=audit_promo&service=audit&ad_id=audit_lagos_01
   ```

## How It Works

When users click on your ads with these parameters:

1. They are redirected to the appropriate service page
2. The contact form is pre-filled with tracking information
3. User visits are tracked with cookies (30-day expiry)
4. All ad parameters are included in the email notifications

## Contact Form Integration

This website uses FormSubmit (formsubmit.co) for contact form processing. The contact forms are set up to collect both user information and ad tracking data without requiring a backend server.

## Theme Toggle

The website includes a light/dark theme toggle that respects user preferences and stores their choice in localStorage.