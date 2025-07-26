# Google Analytics 4 (GA4) Setup

This document explains the Google Analytics 4 integration for the Vedanta Healthcare website.

## What's Implemented

### 1. GA4 Tracking Code
- Added to `index.html` in the `<head>` section
- Tracking ID: `G-8R0ZY0Q9T9`
- Automatically loads in all environments but only tracks in production

### 2. Custom Hook (`useGA4`)
Located at `src/hooks/use-ga4.ts`

**Features:**
- Automatic page view tracking for React Router navigation
- Production-only tracking (no tracking during development)
- Custom event tracking functions
- Button click tracking
- Form submission tracking
- External link tracking

**Available Functions:**
```typescript
const { trackEvent, trackButtonClick, trackFormSubmission, trackExternalLink } = useGA4();

// Track custom events
trackEvent('custom_event_name', { parameter1: 'value1' });

// Track button clicks
trackButtonClick('contact_submit_button', { page: 'contact' });

// Track form submissions
trackFormSubmission('contact_form', { form_type: 'inquiry' });

// Track external link clicks
trackExternalLink('https://example.com', 'Example Link');
```

### 3. TrackedLink Component
Located at `src/components/TrackedLink.tsx`

A utility component for tracking external link clicks:

```typescript
import { TrackedLink } from '@/components/TrackedLink';

<TrackedLink href="https://example.com">
  External Link
</TrackedLink>
```

## Usage Examples

### Tracking Button Clicks
```typescript
import { useGA4 } from '@/hooks/use-ga4';

const MyComponent = () => {
  const { trackButtonClick } = useGA4();

  const handleContactClick = () => {
    trackButtonClick('contact_button', { page: 'home' });
    // Your button logic here
  };

  return (
    <button onClick={handleContactClick}>
      Contact Us
    </button>
  );
};
```

### Tracking Form Submissions
```typescript
import { useGA4 } from '@/hooks/use-ga4';

const ContactForm = () => {
  const { trackFormSubmission } = useGA4();

  const handleSubmit = (formData: any) => {
    trackFormSubmission('contact_form', {
      form_type: 'inquiry',
      has_email: !!formData.email,
      has_phone: !!formData.phone
    });
    // Your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
    </form>
  );
};
```

### Tracking External Links
```typescript
import { TrackedLink } from '@/components/TrackedLink';

const ExternalLinks = () => {
  return (
    <div>
      <TrackedLink href="https://cordis.com">
        Visit Cordis
      </TrackedLink>
      <TrackedLink href="https://coloplast.com">
        Visit Coloplast
      </TrackedLink>
    </div>
  );
};
```

## Environment Behavior

- **Development**: GA4 code loads but no tracking occurs
- **Production**: Full tracking enabled
- **Preview**: Full tracking enabled

## Verification

To verify GA4 is working:

1. **Check Network Tab**: Look for requests to `googletagmanager.com`
2. **Check Console**: No errors related to `gtag`
3. **GA4 Dashboard**: Check Real-Time reports in Google Analytics
4. **Production Build**: Run `npm run build` and test the production build

## Events Tracked

### Automatic Events
- Page views (all routes)
- Route changes

### Manual Events (when implemented)
- Button clicks
- Form submissions
- External link clicks
- Custom events

## Troubleshooting

1. **No tracking in development**: This is expected behavior
2. **Tracking not working in production**: Check if `import.meta.env.PROD` is true
3. **Console errors**: Ensure GA4 tracking ID is correct
4. **No data in GA4**: Wait 24-48 hours for data to appear in reports

## Security Notes

- GA4 tracking ID is visible in client-side code (this is normal)
- No sensitive data is sent to GA4
- Tracking respects user privacy settings
- Only production builds send tracking data 